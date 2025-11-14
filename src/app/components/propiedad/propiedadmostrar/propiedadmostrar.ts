import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Propiedad } from '../../../models/Propiedad';
import { Propiedadservice } from '../../../services/propiedadservice';

@Component({
  selector: 'app-propiedadmostrar',
  templateUrl: './propiedadmostrar.html',
  styleUrls: ['./propiedadmostrar.css'],
})
export class Propiedadmostrar implements OnInit {

  propiedad: Propiedad = new Propiedad();

  constructor(
    private propiedadService: Propiedadservice,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.propiedadService.list(id).subscribe((data: Propiedad) => {
      this.propiedad = data;
    });
  }
}
