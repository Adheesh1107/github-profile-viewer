import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { UserProfile } from '../../models/user-profile.model';

export interface IGitHubUserProfileResponse {
  login: string;
  id: number;
  avatar_url: string | null;
  url: string;
  repos_url: string;
  name: string;
  html_url: string;
  email: string | null;
  bio: string | null;
  twitter_username: string | null;
  public_repos: number;
}

@Injectable({
  providedIn: 'root',
})
export class GithubAPIService {
  private baseUrl = 'https://api.github.com/users/';
  private currentProfile!: UserProfile;
  constructor(private http: HttpClient) {}

  fetchProfileDetails(
    profileName: string
  ): Observable<IGitHubUserProfileResponse> {
    const url = `${this.baseUrl}${profileName}`;
    return this.http
      .get<IGitHubUserProfileResponse>(url)
      .pipe(catchError(this.handleError))
      .pipe(
        tap((response) => {
          this.currentProfile = new UserProfile(
            response.login,
            response.id,
            response.avatar_url,
            response.url,
            response.repos_url,
            response.name,
            response.html_url,
            response.email,
            response.bio,
            response.twitter_username,
            response.public_repos
          );
        })
      );
  }
  private handleError(errorObject: HttpErrorResponse) {
    let errorMessage = 'unknown error!';
    if (errorObject?.status === 404) {
      errorMessage = 'Unable to fetch details!';
    } else if (errorObject?.status === 500) {
      errorMessage = 'Server not accessible';
    }
    return throwError(errorMessage);
  }

  getCurrentProfile(): UserProfile | null {
    if (this.currentProfile) {
      return this.currentProfile;
    }
    return null;
  }
}
