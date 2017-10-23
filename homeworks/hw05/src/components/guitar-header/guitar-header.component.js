import componentTemplate from './guitar-header.template.html';
import guitarHeaderStyles from './guitar-header.style.scss';

class GuitarHeaderController {
    constructor() {
        this.logoLink = 'http://www.gibson.com/';
        this.logoImgLink = 'http://images.gibson.com/Site-Images/Page-Elements/Header-Gibson-Logo.png';
    }
}

const GuitarHeaderComponent = {
    template: componentTemplate,
    controller: GuitarHeaderController,
};

export default GuitarHeaderComponent;
