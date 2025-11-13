import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  private http = inject(HttpClient);
  private baseUrl: string = "https://jsonplaceholder.typicode.com/posts";

  public posts = toSignal(
    this.http.get<Post[]>(this.baseUrl).pipe(
      map(posts => posts.slice(0, 10))
    ), 
    { initialValue: [] as Post[] }
  );

}