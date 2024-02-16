import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface IGitHubUserProfileResponse {
  login: string;
  id: number;
  avatar_url: string;
  url: string;
  repos_url: string;
  name: string;
  html_url: string;
  email: string | null;
  bio: string;
  twitter_username: string | null;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

@Injectable({
  providedIn: 'root',
})
export class GithubAPIService {
  private baseUrl = 'https://api.github.com/users/';
  constructor(private http: HttpClient) {}

  fetchProfileDetails(
    profileName: string
  ): Observable<IGitHubUserProfileResponse> {
    const url = `${this.baseUrl}${profileName}`;
    return this.http.get<IGitHubUserProfileResponse>(url);
  }
}
