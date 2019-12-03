import { Component, OnInit } from '@angular/core';
import { toast } from 'angular2-materialize';
import { AlertService } from '../services/index';

@Component({
  selector: 'app-alert',
  templateUrl: 'alert.component.html'
})

export class AlertComponent implements OnInit {
  message: any;

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.alertService.getMessage().subscribe(message => {
      if (message) {
        this.toaster(this.message = message, message.type);
      }
    });
  }

  toaster(message, type) {
    if (type === 'success') {
      toast(message.text, 3000);
    } else if (type === 'error') {
      toast(message.text.error.message, 3000);
    }
  }
}
