import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // url: string = "http://127.0.0.1:8080/memory-cache-service/v1/";
  url: string = "";
  endpoint: string = "";
  method: string = "get";
  body: string = '';
  result: any;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
  }

  get() {

    this.http.get(this.url + this.endpoint, this.httpOptions).subscribe(data => {
      this.result = data;
    },
    error => console.log(error))
  }

  post() {

    this.http.post(this.url + this.endpoint, JSON.parse(this.body), this.httpOptions).subscribe(data => {
      this.result = data;
    },
    error => console.log(error))
  }

}
