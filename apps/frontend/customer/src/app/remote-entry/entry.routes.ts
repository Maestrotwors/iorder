import { Route } from '@angular/router';
import { isSupplierSelected } from './guards/is-supplier-selected.guard';

export const remoteRoutes: Route[] = [
  {
    path: 'suppliers',
    loadComponent: () => import('./pages/suppliers/suppliers.component').then(c => c.SuppliersComponent)
  },
  {
    path: '',
    loadComponent: () => import('./pages/suppliers/suppliers.component').then(c => c.SuppliersComponent),
    canActivate: [isSupplierSelected],
    children: [
      {
        path: 'catalog',
        loadComponent: () => import('./pages/catalog/catalog.component').then(c => c.CatalogComponent),
      },
      {
        path: 'product',
        loadComponent: () => import('./pages/product/product.component').then(c => c.ProductComponent),
      },
      {
        path: 'order',
        loadComponent: () => import('./pages/order/order.component').then(c => c.OrderComponent),
      },
    ]
  },
  {
    path: '**',
    redirectTo: ''
  },
];
