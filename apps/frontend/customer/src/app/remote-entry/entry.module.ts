import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { remoteRoutes } from './entry.routes';

@NgModule({
  declarations: [],
  imports: [CommonModule, RemoteEntryComponent, RouterModule.forChild(remoteRoutes)],
  providers: [],
})
export class RemoteEntryModule {}
