<<<<<<< HEAD
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Propiedad } from "../models/Propiedad";
import { Observable, Subject } from "rxjs";
=======
import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { environment } from "../../environments/environment"
import { Subject } from "rxjs"
import { Propiedad } from "../models/Propiedad"
>>>>>>> 1eff8b61fc3e2adadf7b7107946d6e4abc07a9de

const base_url=environment.base

@Injectable({
  providedIn: 'root',
})
<<<<<<< HEAD
export class Propiedadservice{
    private url = `${base_url}/propiedades`;
    private listaCambio = new Subject<Propiedad[]>();
    
    constructor(private http: HttpClient){}
    
    list(): Observable<Propiedad[]> {
        return this.http.get<Propiedad[]>(this.url);
    }
=======
export class Propiedadservice {
  private url= `${base_url}/propiedad`;
  private listaCambio = new Subject<Propiedad[]>();
  constructor (private http:HttpClient){}
>>>>>>> 1eff8b61fc3e2adadf7b7107946d6e4abc07a9de

  list(){
    return this.http.get<Propiedad[]>(this.url)
  }

<<<<<<< HEAD
    setList(listaNueva: Propiedad[]) {
        this.listaCambio.next(listaNueva);
    }
    
    getList(){
        return this.listaCambio.asObservable();
    }
    
    listId(id: number) {
        return this.http.get<Propiedad>(`${this.url}/${id}`);
    }
    
    update(p: Propiedad) {
        return this.http.put(this.url, p, { responseType: 'text' });
    }
    
    delete(id: number) {
        return this.http.delete(`${this.url}/${id}`, { responseType: 'text' });
    }

    
=======
  insert(d: Propiedad) {
    return this.http.post(this.url, d);
  }

  setList(listaNueva: Propiedad[]) {
    this.listaCambio.next(listaNueva);
  }
  getList(){
    return this.listaCambio.asObservable()
  }

  listId(id: number) {
    return this.http.get<Propiedad>(`${this.url}/${id}`);
  }

  update(d: Propiedad) {
    return this.http.put(this.url, d, { responseType: 'text' });
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`, { responseType: 'text' });
  }
  
>>>>>>> 1eff8b61fc3e2adadf7b7107946d6e4abc07a9de
}