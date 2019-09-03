import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  private $subject = new Subject<any>();

  constructor() { }

  sendError(error: string) {
    this.$subject.next(error);
  }

  getAsObserver() {
    return this.$subject.asObservable();
  }
}
