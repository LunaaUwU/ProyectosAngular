import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

export interface UserData
{
  id: number;
  name: string;
  email: string;
  website: string;
  company:
  {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http = inject(HttpClient);
  private apiUrl = "https://jsonplaceholder.typicode.com/users";
  
  getUsers(): Observable<UserData[]>
  {
    return this.http.get<UserData[]>(this.apiUrl).pipe(
      catchError(error =>
      {
        console.error('Error fetching data', error);
        return throwError(() => new Error('Error en la API'));
      })
    );
  }
}
