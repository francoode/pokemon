import { Component, OnInit } from '@angular/core';
import {ErrorService} from "../services/error.service";

@Component({
  selector: 'app-error-component',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  message: string = '';

  constructor(private service: ErrorService) { }

  ngOnInit() {
    this.service.getAsObserver()
      .subscribe(error => {
        this.message = error;

        setTimeout(() => {
          this.message = '';
        }, 5000);
      });
  }

}
