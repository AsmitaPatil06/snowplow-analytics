import { Component, OnInit } from '@angular/core';
import analytics from 'src/analytics.js';
import snowplow from '@analytics/snowplow'
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    analytics.page('home');
    analytics.on('page', ({ payload }) => {
        console.log('About:plugin fired')     
      })
  }


  onSubmit(form:NgForm){
   
  var a1= snowplow.identify(form.value)
  analytics.on('identify', ({ payload }) => {
   console.log('track call just happened. Do stuff Current Data',a1) 
 })
     
}



}
