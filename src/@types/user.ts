export type UserType = {
  avatar_url: string;
  name: string;
  login: string;
  email: string;
  bio: string;
  followers: number;
  following: number;
  public_repos: number;
  public_gists: number;
  restored?: boolean;
  repos: Repos[];
};

export type Repos = {
  ful_name: string;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  watchers_count: number;
};
