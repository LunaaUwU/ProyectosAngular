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

  private posts$ = this.http.get<Post[]>(this.baseUrl).pipe(
    map(posts => posts.slice(0, 10))
  );

  public posts = toSignal(this.posts$,
  { 
    initialValue: [] as Post[]
  });

}