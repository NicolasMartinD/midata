import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class RenaperService {

  constructor(private http: HttpClient) {
    console.log('Service funcionando!');
  }

  consultarRenaper(dni){
    console.log(dni);
    return this.http.get('https://raw.githubusercontent.com/NicolasMartinD/midata/master/mock.JSON');
  }

}
