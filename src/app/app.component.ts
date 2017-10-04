
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { AppService } from './app.service';
import { SpeechRecognitionDirective } from 'ng-speech-recognition';
@Component({
  selector: 'app-root',
  templateUrl:"./app.component.html",
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  

  title = 'app';
  body:object;
  question: string;
  apiRoot: string = "https://api.api.ai/v1/query"; 
  //urlData: string = "query=hi&lang=en&sessionId=bae3e533-5a09-450e-932e-058fb2c6cf63&timezone=Asia/Kuala_Lumpur";

  getQuestion(){
    //console.log(this.question);
    return this.question;
  }
  

  constructor(private appService: AppService, private http: Http) { }
  

  
  doGET() {
    console.log("GET");
  }

  doPOST() {
    this.body={
      v:'20170712',
      query:this.getQuestion(),
      lang:'en',
      sessionId:'bae3e533-5a09-450e-932e-058fb2c6cf63',
      timezone:'Asia/Kuala_Lumpur'
    };
  
    console.log("POST");
    console.log(this.getQuestion());
    console.log(this.getQuestion());
    let headers = new Headers();
    headers.append('Authorization', 'Bearer 4029c7df8a2e422d99e5e39c4890eaa7');
    headers.append('Content-Type','application/json; charset=utf-8');
    let opts = new RequestOptions();
    opts.headers = headers;
    let url = `${this.apiRoot}`;
    this.http.post(url, this.body, opts).subscribe(res => console.log(res.json()));
  }

  doPUT() {
    console.log("PUT");
  }

  doDELETE() {
    console.log("DELETE");
  }

  doGETAsPromise() {
    console.log("GET AS PROMISE");
  }

  doGETAsPromiseError() {
    console.log("GET AS PROMISE ERROR");
  }

  doGETAsObservableError() {
    console.log("GET AS OBSERVABLE ERROR");
  }

  doGETWithHeaders() {
    console.log("GET WITH HEADERS");
  }

  ngOnInit():void{
     
  }

 
}
