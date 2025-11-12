import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { Propiedad } from '../../../models/Propiedad';
import { Propiedadservice } from '../../../services/propiedadservice';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Distritoservice } from '../../../services/distritoservice';
import { Usuarioservice } from '../../../services/usuarioservice';
import { CommonModule } from '@angular/common';
import { Usuario } from '../../../models/Usuario';
import { Distrito } from '../../../models/Distrito';

@Component({
  selector: 'app-propiedadinsertar',
  imports: [ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatRadioModule, MatDatepickerModule, MatButtonModule, CommonModule, MatNativeDateModule],
  templateUrl: './propiedadinsertar.html',
  providers: [provideNativeDateAdapter()],
  styleUrl: './propiedadinsertar.css',
})
export class Propiedadinsertar implements OnInit {
  form: FormGroup = new FormGroup({});
  prop: Propiedad = new Propiedad();
  edicion: boolean = false;
  id: number = 0;

  listaUsuarios: Usuario[] = [];
  listaDistritos: Distrito[] = [];

  typeOptions = [
    { value: 'Casa', viewValue: 'Casa' },
    { value: 'Departamento', viewValue: 'Departamento' },
    { value: 'Terreno', viewValue: 'Terreno' },
  ];

  categoryOptions = [
    { value: 'Venta', viewValue: 'Venta' },
    { value: 'Alquiler', viewValue: 'Alquiler' },
  ];

  estadoOptions = [
    { value: 'Disponible', viewValue: 'Disponible' },
    { value: 'Ocupado', viewValue: 'Ocupado' },
    { value: 'Reservado', viewValue: 'Reservado' },
  ];

  destacadaOptions = [
    { value: true, viewValue: 'Sí' },
    { value: false, viewValue: 'No' },
  ];

  constructor(
    private pS: Propiedadservice,
    private uS: Usuarioservice,
    private dS: Distritoservice,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });

    this.uS.list().subscribe(data => {
      this.listaUsuarios = data;
    });

    this.dS.list().subscribe(data => {
      this.listaDistritos = data;
    });

    this.form = this.formBuilder.group({
      id: [''],
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: [0, Validators.required],
      tipo: ['', Validators.required],
      categoria: ['', Validators.required],
      direccion: ['', Validators.required],
      fechaPublicacion: ['', Validators.required],
      estado: ['', Validators.required],
      metrosCuadrados: [0, Validators.required],
      habitaciones: [0, Validators.required],
      banos: [0, Validators.required],
      destacada: [false, Validators.required],
      urlVr: [''],
      notas: [''],
      usuarioFK: ['', Validators.required],
      distritoFK: ['', Validators.required],
    });
  }

  aceptar(): void {
    if (this.form.valid) {
      this.prop.idPropiedad = this.form.value.id;
      this.prop.titulo = this.form.value.titulo;
      this.prop.descripcion = this.form.value.descripcion;
      this.prop.precio = this.form.value.precio;
      this.prop.tipo = this.form.value.tipo;
      this.prop.categoria = this.form.value.categoria;
      this.prop.direccion = this.form.value.direccion;
      this.prop.fechaPublicacion = this.form.value.fechaPublicacion;
      this.prop.estado = this.form.value.estado;
      this.prop.metrosCuadrados = this.form.value.metrosCuadrados;
      this.prop.habitaciones = this.form.value.habitaciones;
      this.prop.banos = this.form.value.banos;
      this.prop.destacada = this.form.value.destacada;
      this.prop.urlVr = this.form.value.urlVr;
      this.prop.notas = this.form.value.notas;
      this.prop.usuario.idUser=this.form.value.usuarioFK;
      this.prop.distrito.idDistrito=this.form.value.distritoFK;

      // Relacionales (igual que el device en software)
      //this.prop.usuario.idUser = this.form.value.usuario;
      //this.prop.distrito.idDistrito = this.form.value.distrito;

      if (this.edicion) {
        this.pS.update(this.prop).subscribe(() => {
          this.pS.list().subscribe((data) => {
            this.pS.setList(data);
          });
        });
      } else {
        this.pS.insert(this.prop).subscribe(() => {
          this.pS.list().subscribe((data) => {
            this.pS.setList(data);
          });
        });
      }
      this.router.navigate(['propiedades']);
    }
  }

  init() {
    if (this.edicion) {
      this.pS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.idPropiedad),
          titulo: new FormControl(data.titulo),
          descripcion: new FormControl(data.descripcion),
          precio: new FormControl(data.precio),
          tipo: new FormControl(data.tipo),
          categoria: new FormControl(data.categoria),
          direccion: new FormControl(data.direccion),
          fechaPublicacion: new FormControl(data.fechaPublicacion),
          estado: new FormControl(data.estado),
          metrosCuadrados: new FormControl(data.metrosCuadrados),
          habitaciones: new FormControl(data.habitaciones),
          banos: new FormControl(data.banos),
          destacada: new FormControl(data.destacada),
          urlVr: new FormControl(data.urlVr),
          notas: new FormControl(data.notas),
          usuarioFK: new FormControl(data.usuario.idUser),
          distritoFK: new FormControl(data.distrito.idDistrito),
        });
      });
    }
  }
}