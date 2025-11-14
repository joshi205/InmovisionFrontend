import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { SimulacionPrecios } from '../../../models/simulacion-de-precios';
import { SimulacionDePreciosService } from '../../../services/simulacion-de-precios';

@Component({
  selector: 'app-simulacion-de-precios-listar',
  imports: [MatTableModule, MatIconModule, MatButtonModule, RouterLink],
  templateUrl: './simulacion-de-precios-listar.html',
  styleUrl: './simulacion-de-precios-listar.css',
})
export class SimulacionDePreciosListar implements OnInit {

  dataSource: MatTableDataSource<SimulacionPrecios> = new MatTableDataSource();
  displayedColumns: string[] = [
    'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'acciones'
  ];

  constructor(private sS: SimulacionDePreciosService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });

    this.sS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  eliminar(id: number) {
    this.sS.delete(id).subscribe(() => {
      this.sS.list().subscribe(data => {
        this.sS.setList(data);
      });
    });
  }
}