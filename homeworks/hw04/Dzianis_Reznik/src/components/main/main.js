import actions from '../../actions/actions';

import './main.scss';
import './img/logo.jpg';

class MainController {
  constructor($ngRedux, $scope) {

    $scope.enableTransfer = true;
    $scope.disableTransfer = false;
    $scope.transfer = $scope.enableTransfer;

    function mapStateToThis(state) {
      return {
        reducer: state.reducer
      };
    }

    $ngRedux.connect(
      mapStateToThis,
      actions
    )(this);
  }
};

const MainComponent = {
  template: require('./main.html'),
  controller: MainController
}

export default MainComponent;
