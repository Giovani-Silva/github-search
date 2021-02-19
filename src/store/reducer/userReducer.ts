const initialState = {
  avatar_url: '',
  name: '',
  email: '',
  bio: '',
  followers: 0,
  following: 0,
  public_repos: 0,
  public_gists: 0,
};

interface UserAction {
  type: string;
  data: {
    avatar_url: string;
    name: string;
    email: string;
    bio: string;
    followers: number;
    following: number;
    public_repos: number;
    public_gists: number;
  };
}

interface UserState {
  avatar_url: string;
  name: string;
  email: string;
  bio: string;
  followers: number;
  following: number;
  public_repos: number;
  public_gists: number;
}

export function user(state = initialState, action: UserAction): UserState {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...action.data,
      };
    default:
      return state;
  }
}
