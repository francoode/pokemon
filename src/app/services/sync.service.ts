import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export abstract class SyncService {

  protected abstract urlResource;
  protected abstract pageSize;
  protected abstract pageOffset;

  protected constructor(
    protected http: HttpClient
  ) {

  }

  protected get(url): Observable<any> {
    return this.http.get(url);
  }


}
