import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VisitasService {

  url='http://localhost/server/';

  constructor(private http: HttpClient) { 
    console.log('Base de datos funcionando');
  }

  recuperarEmpleados(){
    return this.http.get(`${this.url}recuperarempleados.php`);
  }

  recuperarSector(){
    return this.http.get(`${this.url}recuperarsector.php`);
  }

  recuperarHistorial(){
    return this.http.get(`${this.url}recuperarhistorial.php`);
  }

  recuperarVisitante(dni){
    return this.http.get(`${this.url}recuperarvisitante.php`);
  }

  alta(visita){
    return this.http.post(`${this.url}alta.php`, JSON.stringify(visita));
  }

  registrarVisitante(visitante){
    return this.http.post(`${this.url}registrarvisitante.php`, JSON.stringify(visitante))
  }

}
