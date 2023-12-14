import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Commande } from 'src/models/commende';
@Injectable({
  providedIn: 'root'
})
export class CommendeService {
  private baseUrl ="http://localhost:3000/commande";

  constructor(private http: HttpClient) { }

  public addCommende(commende: Commande): Observable<Commande> {
    return this.http.post<Commande>(this.baseUrl, commende);
  }
  public getCommende(): Observable<Commande[]> {
    console.log("Service getCommende() called");
    return this.http.get<Commande[]>(this.baseUrl);
  }
  public deleteCommende(id: number): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }

}
