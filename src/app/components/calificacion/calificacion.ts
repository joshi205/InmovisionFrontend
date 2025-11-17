import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Calificacioninsertar } from "./calificacioninsertar/calificacioninsertar";

@Component({
  selector: 'app-calificacion',
  imports: [Calificacioninsertar, RouterOutlet],
  templateUrl: './calificacion.html',
  styleUrl: './calificacion.css',
})
export class Calificacion {
    constructor(public route:ActivatedRoute){}


}
