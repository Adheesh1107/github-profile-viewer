import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { GithubAPIService } from '../../services/github-service/github-api.service';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss',
})
export class ProfilePageComponent implements OnInit {
  profileName!: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private githubService: GithubAPIService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.profileName = params['profileName'];
      this.fetchProfileDetails(this.profileName);
    });
  }

  fetchProfileDetails(profileName: string) {
    this.githubService
      .fetchProfileDetails(profileName)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
