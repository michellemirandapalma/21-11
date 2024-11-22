import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor( private http: HttpClient) { }
  backend = environment.backend+"registroFrom"; 

  obtenerRegistros(){
    return this.http.get(`${this.backend}/obtener-registro`)
  }
}
