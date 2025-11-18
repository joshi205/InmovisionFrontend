import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

import { Contrato } from '../../../models/Contrato';
import { Contratoservice } from '../../../services/contratoservice';
import { Propiedadservice } from '../../../services/propiedadservice';
import { Propiedad } from '../../../models/Propiedad';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contratoinsertar',
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatButtonModule, CommonModule
  ],
  templateUrl: './contratoinsertar.html',
  providers: [provideNativeDateAdapter()],
  styleUrl: './contratoinsertar.css',
})
export class Contratoinsertar implements OnInit {
  form: FormGroup = new FormGroup({});
  con: Contrato = new Contrato();
  edicion: boolean = false;
  id: number = 0;
  listaPropiedades: Propiedad[] = [];

  constructor(
    private cS: Contratoservice,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private pS: Propiedadservice
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = this.id != null;
      this.init();
    });

    this.pS.list().subscribe((data) => {
      this.listaPropiedades = data;
    });

    this.form = this.formBuilder.group({
      codigo: [''],
      tipo: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required],
      monto: ['', Validators.required],
      estado: ['', Validators.required],
      terminosYCondiciones: ['', Validators.required],
      propiedad: ['', Validators.required],
    });
  }

  aceptar(): void {
    if (this.form.valid) {
      this.con.idContrato = this.id ? this.id : this.form.value.codigo;
      this.con.tipo = this.form.value.tipo;
      this.con.fechaInicio = this.form.value.fechaInicio;
      this.con.fechaFin = this.form.value.fechaFin;
      this.con.monto = this.form.value.monto;
      this.con.estado = this.form.value.estado;
      this.con.terminosYCondiciones = this.form.value.terminosYCondiciones;
      this.con.propiedad.idPropiedad = this.form.value.propiedad;

      if (this.edicion) {
        this.cS.update(this.con).subscribe(() => {
          this.cS.list().subscribe((data) => this.cS.setList(data));
        });
      } else {
        this.cS.insert(this.con).subscribe(() => {
          this.cS.list().subscribe((data) => this.cS.setList(data));
        });
      }
      this.router.navigate(['contratos']);
    }
  }

  cancelar(): void {
    this.router.navigate(['contratos']);
  }

  init() {
    if (this.edicion) {
      this.cS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          codigo: new FormControl(data.idContrato),
          tipo: new FormControl(data.tipo),
          fechaInicio: new FormControl(data.fechaInicio),
          fechaFin: new FormControl(data.fechaFin),
          monto: new FormControl(data.monto),
          estado: new FormControl(data.estado),
          terminosYCondiciones: new FormControl(data.terminosYCondiciones),
          propiedad: new FormControl(data.propiedad.idPropiedad),



        });
      });
    }
  }
}
