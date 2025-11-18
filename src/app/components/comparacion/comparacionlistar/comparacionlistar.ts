import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { Comparacion } from '../../../models/Comparacion';
import { Comparacionservice } from '../../../services/comparacionservice';

@Component({
  selector: 'app-comparacionlistar',
  imports: [MatTableModule,CommonModule,MatIconModule,MatButtonModule,RouterLink],
  templateUrl: './comparacionlistar.html',
  styleUrl: './comparacionlistar.css',
})
export class Comparacionlistar implements OnInit{

  dataSource: MatTableDataSource<Comparacion> = new MatTableDataSource();
  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4','c5','c6'];

  constructor(private cS:  Comparacionservice) {}
  
  ngOnInit(): void {

    this.cS.list().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data)
    })
    this.cS.getList().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data)
    })
  }  
  eliminar(id:number){
    this.cS.delete(id).subscribe(data=>{
      this.cS.list().subscribe(data=>{
        this.cS.setList(data)
      })
    })
  }
}
