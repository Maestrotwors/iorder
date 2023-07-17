import { ActivatedRouteSnapshot, CanActivateFn } from '@angular/router';

export const userAuthGuard: CanActivateFn = (route: ActivatedRouteSnapshot ) => {
  if (route.data['auth'] === localStorage.getItem('userType')) {
    return true;
  }

  return true;
};
