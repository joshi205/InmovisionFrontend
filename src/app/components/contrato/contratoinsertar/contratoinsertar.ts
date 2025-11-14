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

import { Contrato } from '../../../models/contrato';
import { Contratoservice } from '../../../services/contratoservice';

@Component({
  selector: 'app-contratoinsertar',
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatButtonModule
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

  constructor(
    private cS: Contratoservice,
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
      usuario_id: ['', Validators.required],
      propiedad_id: ['', Validators.required],
      fecha_inicio: ['', Validators.required],
      fecha_fin: ['', Validators.required],
      monto_total: ['', Validators.required]
    });
  }

  aceptar(): void {
    if (this.form.valid) {
      this.con.contrato_id = this.id ? this.id : this.form.value.codigo;
      this.con.arrendador.idUser = this.form.value.usuario_id;
      this.con.propiedad = this.form.value.propiedad_id;
      this.con.fecha_inicio = this.form.value.fecha_inicio;
      this.con.fecha_fin = this.form.value.fecha_fin;
      this.con.monto = this.form.value.monto_total;

      if (this.edicion) {
        this.cS.update(this.con).subscribe(() => {
          this.cS.list().subscribe(data => this.cS.setList(data));
        });
      } else {
        this.cS.insert(this.con).subscribe(() => {
          this.cS.list().subscribe(data => this.cS.setList(data));
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
          codigo: new FormControl(data.contrato_id),
          usuario_id: new FormControl(data.arrendador),
          propiedad_id: new FormControl(data.propiedad),
          fecha_inicio: new FormControl(data.fecha_inicio),
          fecha_fin: new FormControl(data.fecha_fin),
          monto_total: new FormControl(data.monto)
        });
      });
    }
  }
}