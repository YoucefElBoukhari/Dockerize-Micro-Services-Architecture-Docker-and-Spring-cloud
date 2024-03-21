import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css',
})
export class CustomersComponent implements OnInit{
  customers : any;
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get("http://192.168.16.128:8888/CUSTOMER-SERVICE/customers")
      .subscribe({
        next: data => {
          this.customers = data;
        },
        error : err => {
          console.log(err);
        }
      })
  }

}
