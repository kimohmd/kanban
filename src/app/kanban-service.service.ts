import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import {Utilisateur, Fiche, Tableau} from './domain';

@Injectable({
  providedIn: 'root'
})
export class KanbanServiceService {

  
  apiUrl: string = '';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  getAllUtilisateurs(): Observable<Utilisateur[]>{
    let API_URL = `${this.apiUrl}/utilisateur/getAllUtilisateurs`;
    
    return this.http.get<Utilisateur[]>(API_URL,{ headers: this.headers}).pipe(
      catchError(this.error)
    );
  }

  getAllTableaux(): Observable<Tableau[]>{
    let API_URL = `${this.apiUrl}/tableau/getAllTableaux`;
    
    return this.http.get<Tableau[]>(API_URL,{ headers: this.headers}).pipe(
      catchError(this.error)
    );
  }

  getAllFiches(): Observable<Fiche[]>{
    let API_URL = `${this.apiUrl}/fiche/getAllFiches`;
    
    return this.http.get<Fiche[]>(API_URL,{ headers: this.headers}).pipe(
      catchError(this.error)
    );
  }

  addFiche(idTableau: number, idUtilisateur: number, body: string): Observable<number>{
    let API_URL = `${this.apiUrl}/fiche/addFiche/${idTableau}/${idUtilisateur}`;
    
    
    return this.http.post<number>(API_URL, body, { headers: this.headers, }).pipe(
      catchError(this.error)
    );
  }

  addTableau(body: string): Observable<number>{
    let API_URL = `${this.apiUrl}/tableau/addTableau`;
    
    
    return this.http.post<number>(API_URL, body, { headers: this.headers, }).pipe(
      catchError(this.error)
    );
  }


  // Handle Errors 
  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
