import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Menu } from '../menu/menu';

@Component({
  selector: 'app-simulation',
  standalone: true,
  imports: [Menu,],
  templateUrl: './simulation.html',
  styleUrl: './simulation.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SimulationComponent {}
