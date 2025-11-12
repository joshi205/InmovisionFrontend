import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Propiedadservice } from '../../../services/propiedadservice';
import { Propiedad } from '../../../models/Propiedad';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-propiedadlistar',
  imports: [MatTableModule, MatIconModule, MatButtonModule, RouterLink, CommonModule],
  templateUrl: './propiedadlistar.html',
  styleUrl: './propiedadlistar.css',
})
export class Propiedadlistar implements OnInit{
  dataSource: MatTableDataSource<Propiedad> = new MatTableDataSource();
   displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4','c5','c6', 'c7','c8','c9','c10','c11','c12'];

    constructor(private pS:Propiedadservice, public route:ActivatedRoute){}

    ngOnInit(): void {
        this.pS.list().subscribe(data=>{
          this.dataSource=new MatTableDataSource(data);
        })
        this.pS.getList().subscribe(data=>{
          this.dataSource=new MatTableDataSource(data);
        })
    }

    eliminar(id: number) {
    this.pS.delete(id).subscribe(data=>{
      this.pS.list().subscribe(data=>{
        this.pS.setList(data)
      })
    })
  }
}
