import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoaderService } from '../../services/loader-service/loader.service';
import { finalize } from 'rxjs';

export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
  const loaderService = inject(LoaderService);
  console.log(`Request is on the way to ${req.url}`);
  // show the loader
  loaderService.showLoader();
  return next(req).pipe(
    finalize(() => {
      // hide loader
      loaderService.hideLoader();
    })
  );
};
