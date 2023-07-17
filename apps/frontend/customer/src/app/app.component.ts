import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'iorder-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a routerLink="/suppliers" routerLinkActive="active" ariaCurrentWhenActive="page">suppliers</a><br/>
    <a routerLink="/catalog" routerLinkActive="active" ariaCurrentWhenActive="page">catalog</a><br/>
    <a routerLink="/order" routerLinkActive="active" ariaCurrentWhenActive="page">order</a><br/>
    <a routerLink="/product" routerLinkActive="active" ariaCurrentWhenActive="page">product</a><br/>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
