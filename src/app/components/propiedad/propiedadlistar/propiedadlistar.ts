import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router'; // <- IMPORTAR Router
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Propiedad } from '../../../models/Propiedad';
import { Propiedadservice } from '../../../services/propiedadservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-propiedadlistar',
  imports: [CommonModule, MatTableModule, MatIconModule, MatButtonModule, RouterLink, CommonModule],
  templateUrl: './propiedadlistar.html',
  styleUrls: ['./propiedadlistar.css'], // <- CORREGIDO styleUrls
})
export class Propiedadlistar implements OnInit {
  dataSource: MatTableDataSource<Propiedad> = new MatTableDataSource();
  displayedColumns: string[] = ['c1','c2','c3','c4','c5','c6','c7','c8','c9','c10','c11','c12','c13','c14','c15','c16','c17','c18','c19','c20','c21','c22'];

  // <- INYECTAR Router en el constructor
  constructor(private dS: Propiedadservice, private router: Router, public route: ActivatedRoute) {}

  ngOnInit(): void {
    this.dS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.dS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  eliminar(id: number) {
    this.dS.delete(id).subscribe((data) => {
      this.dS.list().subscribe((data) => {
        this.dS.setList(data);
      });
    });
  }

  // <-- NUEVA FUNCIÓN DE NAVEGACIÓN
  verUbicacion(idPropiedad: number) {
    this.router.navigate(['/propiedades', idPropiedad, 'mapa']);
  }
}