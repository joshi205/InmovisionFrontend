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
import { Usuario } from '../../../models/Usuario';
import { Usuarioservice } from '../../../services/usuarioservice';
@Component({
  selector: 'app-usuarioinsertar',
  imports: [ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatButtonModule],
  templateUrl: './usuarioinsertar.html',
  providers: [provideNativeDateAdapter()],
  styleUrl: './usuarioinsertar.css',
})
export class Usuarioinsertar {
  form: FormGroup = new FormGroup({});
    us: Usuario = new Usuario();
    edicion: boolean = false;
    id: number = 0;
  
     departamentoDistrito: { value: string; viewValue: string }[] = [
        { value: 'Amazonas', viewValue: 'Amazonas' },    
     ];
  
    constructor(
      private uS: Usuarioservice,
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
  
      this.form = this.formBuilder.group({
        codigo: [''],
        nombre: ['', Validators.required],
        apellido: ['', Validators.required],
        correo: ['', Validators.required],
        username: ['', Validators.required],
        password: ['', Validators.required],
        telefono: ['', Validators.required],
        fotourl: ['', Validators.required],
        fecha_registro: ['', Validators.required],


      });
    }
    aceptar(): void {
      if(this.form.valid){  
        this.us.idUser = this.id ? this.id : this.form.value.codigo;
        this.us.nombre=this.form.value.nombre
        this.us.apellido=this.form.value.apellido
        this.us.correo=this.form.value.correo
        this.us.username=this.form.value.username
        this.us.password=this.form.value.password
        this.us.telefono=this.form.value.telefono
        this.us.fotourl=this.form.value.fotourl
        this.us.fecha_registro=this.form.value.fecha_registro

        if (this.edicion) {
          this.uS.update(this.us).subscribe((data) => {
            this.uS.list().subscribe((data) => {
              this.uS.setList(data);
            });
          });
        }
        else{
          this.uS.insert(this.us).subscribe(data=>{
            this.uS.list().subscribe(data=>{
              this.uS.setList(data)
          })
        })}
        this.router.navigate(['usuarios'])
      }
  
    }
  
  
    cancelar(): void {
    this.router.navigate(['usuarios']);
    }
  
    init() {
      if (this.edicion) {
        this.uS.listId(this.id).subscribe((data) => {
          this.form = new FormGroup({
            codigo: new FormControl(data.idUser),
            nombre: new FormControl(data.nombre),
            apellido: new FormControl(data.apellido),
            correo: new FormControl(data.correo),
            username: new FormControl(data.username),
            password: new FormControl(data.password),
            telefono: new FormControl(data.telefono),
            fotourl: new FormControl(data.fotourl),
            fecha_registro: new FormControl(data.fecha_registro),
            
          });
        });
      }
    }

}
