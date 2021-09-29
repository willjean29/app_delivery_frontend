import {RoutesNames} from 'utils/enums';

export const UI_SHOW_MODAL = 'UI_SHOW_MODAL';
export const UI_CLOSE_MODAL = 'UI_CLOSE_MODAL';
export const UI_SELECT_MENU = 'UI_SELECT_MENU';

export type UiShowModal = {
  type: typeof UI_SHOW_MODAL;
  payload: {
    showModal: boolean;
    messageModal: string;
  };
};

export type UiCloseModal = {
  type: typeof UI_CLOSE_MODAL;
  payload: {
    showModal: boolean;
    messageModal: string;
  };
};

export type UiSelectMenu = {
  type: typeof UI_SELECT_MENU;
  payload: RoutesNames;
};

export type UiDispatchTypes = UiShowModal | UiCloseModal | UiSelectMenu;
