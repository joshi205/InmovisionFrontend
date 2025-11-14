import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Mensaje } from '../../../models/Mensaje';
import { MensajeService } from '../../../services/mensajeservice';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-mensajelistar',
  imports: [MatTableModule, CommonModule, MatIconModule, MatButtonModule, RouterLink],
  templateUrl: './mensajelistar.html',
  styleUrl: './mensajelistar.css',
})
export class Mensajelistar implements OnInit {
  
  dataSource: MatTableDataSource<Mensaje> = new MatTableDataSource();

  displayedColumns: string[] = [
    'a', // id
    'b', // enviado_por
    'c', // contenido
    'd', // usuario
    'e', // propiedad
    'f', // actualizar
    'g'  // eliminar
  ];

  constructor(private mS: MensajeService) {}

  ngOnInit(): void {
    this.mS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });

    this.mS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  eliminar(id: number) {
    this.mS.delete(id).subscribe(() => {
      this.mS.list().subscribe(data => {
        this.mS.setList(data);
      });
    });
  }

}
