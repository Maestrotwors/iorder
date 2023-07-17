import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'iorder-suppliers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SuppliersComponent {}
