import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// importamos modulo observable
import { Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class ApiService{
  // url de la api
  private urlApi = 'https://rickandmortyapi.com/api/character'
  // metemos el parámetro httpclient previamente importando httpclient module en appmodule.ts
  constructor(private http: HttpClient) {}
  // creamos un método para inscribirnos al observable y traer la api.
  public getData(): Observable<any> {
    return this.http.get(`${this.urlApi}`)
  }
}
