import { Dispatch } from 'redux';
import { SET_APP_BASIC_STATE } from './constant';
import { IAppBasicStateProps } from '../type';

export const setAppBasicStateAction = (state: Partial<IAppBasicStateProps>) => (dispatch: Dispatch) => {
  dispatch({ type: SET_APP_BASIC_STATE, payload: state });
};
