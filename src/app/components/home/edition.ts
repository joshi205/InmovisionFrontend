import { Component } from '@angular/core';
import { Menu } from '../menu/menu';

@Component({
  selector: 'app-edition',
  standalone: true,
  imports: [Menu],
  templateUrl: './edition.html',
  styleUrl: './edition.css',
})
export class EditionComponent {}
