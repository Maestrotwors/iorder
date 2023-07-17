import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'iorder-frontend-admin-entry',
  template: `<iorder-nx-welcome></iorder-nx-welcome>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RemoteEntryComponent {}
