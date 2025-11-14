import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Mensaje } from "../models/Mensaje";
import { Subject } from "rxjs";
import { Injectable } from "@angular/core";

const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class MensajeService {
  private url = `${base_url}/mensajes`;
  private listaCambio = new Subject<Mensaje[]>();

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Mensaje[]>(this.url);
  }

  insert(m: Mensaje) {
    return this.http.post(this.url, m);
  }

  setList(listaNueva: Mensaje[]) {
    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  listId(id: number) {
    return this.http.get<Mensaje>(`${this.url}/${id}`);
  }

  update(m: Mensaje) {
    return this.http.put(this.url, m, { responseType: "text" });
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`, { responseType: "text" });
  }
}

