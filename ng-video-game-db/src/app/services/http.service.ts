import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { HttpParams } from '@angular/common/http';
import { APIResponse, Game } from '../models';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}
  getGameList(
    ordering: string,
    search?: string
  ): Observable<APIResponse<Game>> {
    let params = new HttpParams().set('ordering', ordering);
    if (search) {
      params = params.set('search', search).set('ordering', ordering);
    }
    return this.http.get<APIResponse<Game>>(`${env.BASE_URL}/games`, {
      params: params,
    });
  }
}
