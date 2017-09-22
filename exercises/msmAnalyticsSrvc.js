'use strict';

import * as angular from 'angular';
import services from 'lib/services';

export class AnalyticsSrvc {

    constructor($document, $interval) {
        this.metas = [];
        this.pollCount = 0;
        this.document = $document[0];
        this.interval = $interval;

        this.eventQueue = [];
        this.meta = (name) => {
            return this.metas[name];
        };

        $document.find('meta').each((index, metaElement) => {
            if ('name' in metaElement) {
                this.metas[metaElement.name] = metaElement.content;
            }
        });

        if (this.document) {
            this.pollInterval = parseInt(this.document.trackInitializationPollInterval, 10);
            this.pollIntervalMaxRetries = parseInt(this.document.trackInitializationPollMaxRetries, 10);
            this.customerAnalyticsEventsEnabled = angular.isDefined(this.document.track ) ||
                (this.pollInterval && this.pollIntervalMaxRetries);
        }

        this.poll = () => {
            this.pollCount += 1;

            if (angular.isDefined(this.document.track)) {
                //then track has loaded, so cancel interval and process the events
                this.interval.cancel(this.pollPromise);
                this.processCachedEvents();
            }
        };
    }

    track(name, data) {
        if (this.customerAnalyticsEventsEnabled) {
            if (this.document.track) {
                this.document.track(name, data);
            } else {
                this.cacheEvent({name, data});
            }
        }
    }

    cacheEvent(eventData) {
        if (this.pollCount < this.pollIntervalMaxRetries) {
            this.eventQueue.push(eventData);

            if(!this.pollPromise && !isNaN(this.pollInterval) && !isNaN(this.pollIntervalMaxRetries)) {
                //no interval currently specified as promise is empty
                this.pollPromise = this.interval(this.poll, this.pollInterval, this.pollIntervalMaxRetries);
            }
        }
    }

    processCachedEvents() {
        angular.forEach(this.eventQueue, (value) => {
            this.document.track(value.name, value.data);
        });

        this.eventQueue = [];
    }
}

AnalyticsSrvc.$inject = ['$document', '$interval'];

export default services.service('AnalyticsSrvc', AnalyticsSrvc);
