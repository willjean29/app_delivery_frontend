import {RoutesNames} from 'utils/enums';
import {
  UI_SHOW_MODAL,
  UI_CLOSE_MODAL,
  UI_SELECT_MENU,
  UiDispatchTypes,
} from 'store/ui/ui.types';
import {IUiState} from 'store/ui/interface/uiState.interface';
const uiInitialState: IUiState = {
  showModal: false,
  messageModal: '',
  drawerActive: RoutesNames.BOTTOM_TAB_STACK,
};

const uiReducer = (
  state: IUiState = uiInitialState,
  action: UiDispatchTypes,
) => {
  switch (action.type) {
    case UI_SHOW_MODAL:
    case UI_CLOSE_MODAL:
      return {
        ...state,
        showModal: action.payload.showModal,
        messageModal: action.payload.messageModal,
      };
    case UI_SELECT_MENU:
      return {
        ...state,
        drawerActive: action.payload,
      };
    default:
      return state;
  }
};

export default uiReducer;
