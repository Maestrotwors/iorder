import { Route } from '@angular/router';
import { UserTypeEnum } from './models/user-type.interface';
import { userAuthGuard } from './guards/auth.guard';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('frontend-landing/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'member-supplier',
    loadChildren: () =>
      import('frontend-supplier/Module').then((m) => m.RemoteEntryModule),
    canActivate: [userAuthGuard],
    data: {
      auth: UserTypeEnum.Supplier,
    }
  },
  {
    path: 'member-customer',
    loadChildren: () =>
      import('frontend-customer/Module').then((m) => m.RemoteEntryModule),
    canActivate: [userAuthGuard],
    data: {
      auth: UserTypeEnum.Customer,
    }
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('frontend-admin/Module').then((m) => m.RemoteEntryModule),
    canActivate: [userAuthGuard],
    data: {
      auth: UserTypeEnum.Admin,
    }
  },
  {
    path: '**',
    redirectTo: ""
  },
];
