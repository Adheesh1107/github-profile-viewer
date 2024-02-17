import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubAPIService } from '../../services/github-service/github-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MatInputModule, FormsModule, CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  profileName!: string;
  isError!: boolean;
  errorText!: string;
  constructor(
    private githubService: GithubAPIService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  onSubmit() {
    console.log(this.profileName);
    this.fetchProfileDetails(this.profileName);
  }

  fetchProfileDetails(profileName: string) {
    if (profileName) {
      this.githubService.fetchProfileDetails(profileName).subscribe({
        next: (response) => {
          this.router.navigate([`/${this.profileName}`, 'profile'], {
            relativeTo: this.route,
          });
        },
        error: (error) => {
          this.isError = true;
          this.errorText = error;
        },
      });
    }
  }
}
