import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

import { SimulacionPrecios } from '../../../models/simulacion-de-precios';
import { SimulacionDePreciosService } from '../../../services/simulacion-de-precios';

@Component({
  selector: 'app-simulacioninsertar',
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatButtonModule
  ],
  templateUrl: './simulacion-de-precios-insertar.html',
  providers: [provideNativeDateAdapter()],
  styleUrl: './simulacion-de-precios-insertar.css',

})
export class Simulacioninsertar implements OnInit {

  form: FormGroup = new FormGroup({});
  sim: SimulacionPrecios = new SimulacionPrecios();
  edicion: boolean = false;
  id: number = 0;

  constructor(
    private sS: SimulacionDePreciosService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = this.id != null;
      this.init();
    });

    this.form = this.formBuilder.group({
      codigo: [''],
      usuario: ['', Validators.required],
      propiedad: ['', Validators.required],
      monto_inicial: ['', Validators.required],
      tasa_intereses: ['', Validators.required],
      plazo_meses: ['', Validators.required],
      cuota_mensual: ['', Validators.required],
      fecha: ['', Validators.required],
    });
  }

  aceptar(): void {
    if (this.form.valid) {
      this.sim.simulacion_id = this.id ? this.id : this.form.value.codigo;

      this.sim.usuario.idUser = this.form.value.usuario;
      this.sim.propiedad.idPropiedad = this.form.value.propiedad;

      this.sim.monto_inicial = this.form.value.monto_inicial;
      this.sim.tasa_intereses = this.form.value.tasa_intereses;
      this.sim.plazo_meses = this.form.value.plazo_meses;
      this.sim.cuota_mensual = this.form.value.cuota_mensual;
      this.sim.fecha = this.form.value.fecha;

      if (this.edicion) {
        this.sS.update(this.sim).subscribe(() => {
          this.sS.list().subscribe(data => this.sS.setList(data));
        });
      } else {
        this.sS.insert(this.sim).subscribe(() => {
          this.sS.list().subscribe(data => this.sS.setList(data));
        });
      }
      this.router.navigate(['simulacion-de-precios']);
    }
  }

  cancelar(): void {
    this.router.navigate(['simulacion-de-precios']);
  }

  init() {
    if (this.edicion) {
      this.sS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          codigo: new FormControl(data.simulacion_id),
          usuario: new FormControl(data.usuario.idUser),
          propiedad: new FormControl(data.propiedad.idPropiedad),
          monto_inicial: new FormControl(data.monto_inicial),
          tasa_intereses: new FormControl(data.tasa_intereses),
          plazo_meses: new FormControl(data.plazo_meses),
          cuota_mensual: new FormControl(data.cuota_mensual),
          fecha: new FormControl(data.fecha),
        });
      });
    }
  }
}