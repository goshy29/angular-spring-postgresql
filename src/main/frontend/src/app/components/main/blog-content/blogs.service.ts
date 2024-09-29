import { inject, Injectable, signal } from "@angular/core";
import { Blog } from "./blog.model";
import { HttpClient } from "@angular/common/http";
import { catchError, map, throwError } from "rxjs";

@Injectable({
    providedIn: 'root',
  })
export class BlogsService {
    private httpClient = inject(HttpClient);
    // OR
    // constructor(private httpClient: HttpClient) {} 

    getAllBlogs() {
        return this.httpClient.get<Blog[]>(
            'http://localhost:8080/api/blogs'
          )
          .pipe(
            map((resData) => resData),
            catchError((error) => {
              return throwError(() => new Error('Something went wrong while fetching available Blogs.')
            )})
          )
    }

    getBlogById(id: string) {
      return this.httpClient.get<Blog>(
          `http://localhost:8080/api/blogs/${id}`
        )
        .pipe(
          map((resData) => resData),
          catchError((error) => {
            if (error.status === 404) {
              return throwError(() => new Error('Blog not found.'));
            }
            return throwError(() => new Error('Something went wrong while fetching the Blog details.'));
          })
        );
    }

    createBlog(blogData: Blog) {
        return this.httpClient.post<{blog: Blog}>(
            'http://localhost:8080/api/blogs', blogData
        )
        .pipe(
            catchError((error) => {
              return throwError(() => new Error('Something went wrong while creating the Blog.'));
            })
        );
    }

    deleteBlog(id: string) {
      return this.httpClient.delete<{ message: string }>(
          `http://localhost:8080/api/blogs/${id}`
        )
        .pipe(
          catchError((error) => {
            return throwError(() => new Error('Something went wrong while deleting the Blog.'));
          })
      );
  }
}