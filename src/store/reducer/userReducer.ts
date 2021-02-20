import { Repos, UserType } from '../../@types/user';

export const userActionTypes = {
  ADD_USER: 'user/ADD_USER',
  ADD_REPOS: 'user/ADD_REPOS',
};

const initialState = {
  avatar_url: '',
  name: '',
  login: '',
  email: '',
  bio: '',
  followers: 0,
  following: 0,
  public_repos: 0,
  public_gists: 0,
  repos: [],
};

interface UserAction {
  type: string;
  data: UserType;
  repos: Repos[];
}

export function user(state = initialState, action: UserAction): UserType {
  switch (action.type) {
    case userActionTypes.ADD_USER:
      return {
        ...state,
        ...action.data,
      };
    case userActionTypes.ADD_REPOS: {
      const repos = [...action.repos];
      return {
        ...state,
        repos,
      };
    }
    default:
      return state;
  }
}
