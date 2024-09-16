import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { login, registro } from 'src/app/global/endpoints';
import { StudentInsertRequest, GetStudentsResponse, StudentUpdateRequest } from '../models/students';
import { RegistroInsertRequest, RegistroRequest } from '../models/registro';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({})
  }
  insertRegistro(Registro:RegistroInsertRequest): Observable<boolean> {
    const httpOptions = {headers:this.headers}
    return this.http.post<boolean>(registro.insert, Registro, httpOptions)
    .pipe(
      map(res => {
        return res;
      })
    )
  }
}