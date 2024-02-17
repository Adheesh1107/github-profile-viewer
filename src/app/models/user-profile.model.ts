export class UserProfile {
  constructor(
    public login: string,
    public id: number,
    public avatar_url: string | null,
    public url: string,
    public repos_url: string,
    public name: string,
    public html_url: string,
    public email: string | null,
    public bio: string | null,
    public twitter_username: string | null,
    public public_repos: number
  ) {}
}
