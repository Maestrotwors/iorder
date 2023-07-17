import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'iorder-frontend-supplier-entry',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<iorder-nx-welcome></iorder-nx-welcome>`,
})
export class RemoteEntryComponent {}
