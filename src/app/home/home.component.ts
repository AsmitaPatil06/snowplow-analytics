import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import analytics from 'src/analytics.js'
import snowplowPlugin from '@analytics/snowplow'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    analytics.page('home');
    analytics.on('page', ({ payload }) => {
        console.log('Home:plugin fired')
      })

     
  }


  onSubmit(form:NgForm){
    var a1= analytics.identify(form.value)
   analytics.on('identify', ({ payload }) => {
    console.log(' Current Data',a1)
       
  })
  
  console.log ("geocity",analytics.geo_city)
// Get all user data
const userData = analytics.user()
console.log("Previous userData",userData);


// Get user id

 const userId = analytics.user('userId')
 console.log("userId",userId);

// Get user User name
const userName = analytics.user('traits.name');
console.log("Name of User",userName);

const IpAddress = analytics.user('userIpAddress')
console.log("IP",IpAddress);

const a3=analytics.domainsessionidx
console.log("domainsessionidx",a3)
}





tryclick(){

analytics.track('click');

analytics.on('track', ({ payload }) => {
console.log('click done')
})

// analytics.track('EnhancedEcommerceAction', {
//   action: 'add'
// })
}





}
