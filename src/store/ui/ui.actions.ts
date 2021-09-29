import {Dispatch} from 'redux';
import {
  UI_SHOW_MODAL,
  UI_CLOSE_MODAL,
  UI_SELECT_MENU,
  UiDispatchTypes,
} from 'store/ui/ui.types';

export const uiShowModal =
  (message: string) => async (dispatch: Dispatch<UiDispatchTypes>) => {
    dispatch({
      type: UI_SHOW_MODAL,
      payload: {
        showModal: true,
        messageModal: message,
      },
    });
  };

export const uiCloseModal =
  () => async (dispatch: Dispatch<UiDispatchTypes>) => {
    dispatch({
      type: UI_CLOSE_MODAL,
      payload: {
        showModal: true,
        messageModal: '',
      },
    });
  };

export const uiSelectMenu =
  () => async (dispatch: Dispatch<UiDispatchTypes>) => {};
