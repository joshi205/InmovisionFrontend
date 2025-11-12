import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Propiedad } from "../models/Propiedad";
import { Subject } from "rxjs";

const base_url = environment.base;

@Injectable({
    providedIn: 'root',
})
export class Propiedadservice{
    private url = `${base_url}/propiedades`;
    private listaCambio = new Subject<Propiedad[]>();
    constructor(private http: HttpClient){}
    list(){
        return this.http.get<Propiedad[]>(this.url);
    }

    insert(p: Propiedad){
        return this.http.post(this.url, p);
    }

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
}