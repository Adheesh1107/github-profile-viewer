import { Component, NgModule } from '@angular/core';
import { LoaderService } from '../../services/loader-service/loader.service';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatCommonModule } from '@angular/material/core';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [MatProgressSpinner, AsyncPipe, CommonModule],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss',
})
export class SpinnerComponent {
  constructor(public loaderService: LoaderService) {}
}
