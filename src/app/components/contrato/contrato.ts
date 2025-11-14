import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Contratolistar } from './contratolistar/contratolistar';

@Component({
  selector: 'app-contrato',
  imports: [RouterOutlet, Contratolistar],
  templateUrl: './contrato.html',
  styleUrl: './contrato.css',
})
export class ContratoComponent {
  constructor(public route: ActivatedRoute) { }
}