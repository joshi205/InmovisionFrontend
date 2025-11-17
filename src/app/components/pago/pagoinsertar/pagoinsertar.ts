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

import { Pago } from '../../../models/pago';
import { Pagoservice } from '../../../services/pagoservice';

@Component({
  selector: 'app-pagoinsertar',
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatButtonModule
  ],
  templateUrl: './pagoinsertar.html',
  providers: [provideNativeDateAdapter()],
  styleUrl: './pagoinsertar.css',
})
export class Pagoinsertar implements OnInit {

  form: FormGroup = new FormGroup({});
  pago: Pago = new Pago();
  edicion: boolean = false;
  id: number = 0;

  constructor(
    private pS: Pagoservice,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });

    this.form = this.formBuilder.group({
      codigo: [''],
      monto: ['', Validators.required],
      fecha: ['', Validators.required],
      metodo: ['', Validators.required],
      contrato_id: ['', Validators.required]
    });
  }

  aceptar(): void {
    if (this.form.valid) {
      this.pago.pago_id = this.id ? this.id : this.form.value.codigo;
      this.pago.monto = this.form.value.monto;
      this.pago.fecha_pago = this.form.value.fecha;
      this.pago.metodo_pago = this.form.value.metodo;
      this.pago.contrato = this.form.value.contrato_id;

      if (this.edicion) {
        this.pS.update(this.pago).subscribe(() => {
          this.pS.list().subscribe(data => this.pS.setList(data));
        });
      }
      else {
        this.pS.insert(this.pago).subscribe(() => {
          this.pS.list().subscribe(data => this.pS.setList(data));
        });
      }
      this.router.navigate(['pagos']);
    }
  }

  cancelar(): void {
    this.router.navigate(['pagos']);
  }

  init() {
    if (this.edicion) {
      this.pS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          codigo: new FormControl(data.pago_id),
          monto: new FormControl(data.monto),
          fecha: new FormControl(data.fecha_pago),
          metodo: new FormControl(data.metodo_pago),
          contrato_id: new FormControl(data.contrato)
        });
      });
    }
  }
}