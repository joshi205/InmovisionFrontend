import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

import { Mensaje } from '../../../models/Mensaje';
import { MensajeService } from '../../../services/mensajeservice';
import { Usuarioservice } from '../../../services/usuarioservice';
import { Propiedadservice } from '../../../services/propiedadservice';
import { Usuario } from '../../../models/Usuario';
import { Propiedad } from '../../../models/Propiedad';

@Component({
  selector: 'app-mensaje-insert',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatButtonModule,
    MatNativeDateModule,
    MatIconModule,
  ],
  templateUrl: './mensajeinsertar.html',
  styleUrl: './mensajeinsertar.css',
})
export class Mensajeinsertar implements OnInit {
  
  form: FormGroup = new FormGroup({});
  edicion: boolean = false;
  id: number = 0;

  men: Mensaje = new Mensaje();

  listaUsuarios: Usuario[] = [];
  listaPropiedades: Propiedad[] = [];

  constructor(
    private mS: MensajeService,
    private uS: Usuarioservice,
    private pS: Propiedadservice,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });

    this.uS.list().subscribe((data) => (this.listaUsuarios = data));
    this.pS.list().subscribe((data) => (this.listaPropiedades = data));

    this.form = this.formBuilder.group({
      codigo: [''],
      enviado_por: ['', Validators.required],
      contenido: ['', Validators.required],
      enviado_en: ['', Validators.required],
      usuario: ['', Validators.required],
      propiedad: ['', Validators.required],
    });
  }

  aceptar(): void {
    if (this.form.valid) {
      this.men.idMensaje = this.form.value.codigo;
      this.men.enviado_por = this.form.value.enviado_por;
      this.men.contenido = this.form.value.contenido;
      this.men.enviado_en = this.form.value.enviado_en;
      this.men.usuario.idUser = this.form.value.usuario;
      this.men.propiedad.idPropiedad = this.form.value.propiedad;

      if (this.edicion) {
        this.mS.update(this.men).subscribe(() => {
          this.mS.list().subscribe((data) => {
            this.mS.setList(data);
          });
        });
      } else {
        this.mS.insert(this.men).subscribe(() => {
          this.mS.list().subscribe((data) => {
            this.mS.setList(data);
          });
        });
      }

      this.router.navigate(['mensaje']);
    }
  }

  init() {
    if (this.edicion) {
      this.mS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          codigo: new FormControl(data.idMensaje),
          enviado_por: new FormControl(data.enviado_por),
          contenido: new FormControl(data.contenido),
          enviado_en: new FormControl(data.enviado_en),
          usuario: new FormControl(data.usuario.idUser),
          propiedad: new FormControl(data.propiedad.idPropiedad),
        });
      });
    }
  }
}