export default class InputType {
  constructor() {
    this.restrict = 'A';
    this.require = 'ngModel';
    this.link = (scope, element, attr, ngModel) => {
      if (attr.inputType === 'number') {
        element.on('input', () => {
          ngModel.$setViewValue(ngModel.$viewValue.replace(/[^0-9]+/g, ""));
          ngModel.$render();
        });
      }
    }
  }
}
