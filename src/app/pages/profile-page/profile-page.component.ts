import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {
  GithubAPIService,
  IGitHubUserProfileResponse,
} from '../../services/github-service/github-api.service';
import { CommonModule } from '@angular/common';
import { UserProfile } from '../../models/user-profile.model';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss',
})
export class ProfilePageComponent implements OnInit {
  profileName!: string;
  profileDetails!: UserProfile | null;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private githubService: GithubAPIService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.profileName = params['profileName'];
      // this.fetchProfileDetails(this.profileName);
    });
    this.profileDetails = this.githubService.getCurrentProfile();
    // this.profileDetails = this.githubService.getCurrentProfile();
  }
}
