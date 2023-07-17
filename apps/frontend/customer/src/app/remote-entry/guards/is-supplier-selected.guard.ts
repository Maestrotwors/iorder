import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';

export const isSupplierSelected: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return true;
}
