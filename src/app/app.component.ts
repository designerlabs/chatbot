
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
  
  active = true;
  title = 'app';
  result:object;
  sessionId:String;
  pastRes = [];
  body:object;
  buttonText = 'Let\'s Go';
  initialQues = 'How can I help you ?';
  question: string;
  apiRoot: string = "https://api.api.ai/v1/query"; 
  //urlData: string = "query=hi&lang=en&sessionId=bae3e533-5a09-450e-932e-058fb2c6cf63&timezone=Asia/Kuala_Lumpur";

  getQuestion(){
    this.buttonText = 'Submit';
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
      sessionId: this.sessionId,
      timezone:'Asia/Kuala_Lumpur'
    };
    let headers = new Headers();
    headers.append('Authorization', 'Bearer 20fb58c3b4644c699e4ffe6012c76656');
    headers.append('Content-Type','application/json; charset=utf-8');
    let opts = new RequestOptions();
    opts.headers = headers;
    let url = `${this.apiRoot}`;
    this.http.post(url, this.body, opts).subscribe(res => { 
      this.initialQues = res.json().result.speech;
      
      this.question = '';
      if(res.json().result.speech == 'Great! Your order is on its way!'){
        this.result = res.json();
        this.active = false;
        console.log(this.result);
      }else{
        this.pastRes = [];
        this.pastRes.push(res.json());
      }
    });
  }

  doPUT() {
    console.log("PUT");
  }

  doDELETE() {
    console.log("DELETE");
  }

  tryagain(){
    this.active = true;
    this.initialQues = 'How can I help you ?';
  }


  resetSession(){
    this.sessionId = Math.random().toString(36).substring(2);
    this.tryagain();
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
    this.resetSession()
  }

 
}
