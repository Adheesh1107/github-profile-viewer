import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MatInputModule, FormsModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  profileName!: string;
  constructor(private router: Router, private route: ActivatedRoute) {}
  onSubmit() {
    console.log(this.profileName);
    this.router.navigate([`/${this.profileName}`, 'profile'], {
      relativeTo: this.route,
    });
  }
}
