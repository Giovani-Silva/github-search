import { UserType } from '../../@types/user';

export const historicActionTypes = {
  ADD_USER_TO_HISTORIC: 'historic/ADD_USER_TO_HISTORIC',
};

const initialState = new Array<UserType>();

interface UserAction {
  type: string;
  payload: UserType;
}

export function historic(
  state = initialState,
  action: UserAction,
): Array<UserType> {
  switch (action.type) {
    case historicActionTypes.ADD_USER_TO_HISTORIC: {
      const removeDuplicated = state.filter(
        item => item.login !== action.payload.login,
      );
      const users = [action.payload, ...removeDuplicated];
      return users;
    }
    default:
      return state;
  }
}
