import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import Analytics from 'analytics'
import snowplow from '@analytics/snowplow'

import analytics from 'src/analytics.js'

// const analytics = Analytics({
//     app: 'snow-analytics',
//     //debug: true,
//     plugins: [
//       snowplowPlugin({
//         // scriptSrc: 'http://cdn.jsdelivr.net/gh/snowplow/sp-js-assets@2.10.2/sp.js"',
//         //scriptSrc:  "http://src/sp.js",
//           scriptSrc:"http://localhost:8080/src/sp.js",
//      //  scriptSrc: "http://localhost:8000/user",
//         collectorUrl: 'http://localhost:4200/',  
//         })
//     ]
// })
// snowplow('enableFormTracking');
// snowplow('enableActivityTracking', 30, 10);
// snowplow('trackPageView');

analytics.on('initialize:snowplow', ({ instance }) => {
  instance.plugins.snowplow.enableActivityTracking(10, 10)
  instance.plugins.snowplow.enableLinkClickTracking()
})

// analytics.pageStart()
// analytics.on('page:snowplow', ({ payload }) => {
//   console.log('page start')
// })

analytics.page();
analytics.on('page:snowplow', ({ payload }) => {
  console.log('page:snowplowPlugin fired')
})



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'snow-analytics';


  // onSubmit(form: NgForm) {
  //   // Add your own unique ID here or we will automatically assign an anonymousID
  //   window.analytics.identify({
  //     name: form.value.name,
  //     email: form.value.email,
  //     file:form.value.file,
  //   });
  // }


// userId=this.id;
//id:0;

// onSubmit(form:NgForm){
//         var a1= analytics.identify(form.value)
//        analytics.on('identify', ({ payload }) => {
//         console.log('track call just happened. Do stuff Current Data',a1)


        
//       })
      
//    // Get all user data
//    const userData = analytics.user()
//    console.log("Previous userData",userData);


//    // Get user id
//      const userId = analytics.user('userId')
//      console.log("userId",userId);

//  // Get user User name
//    const userName = analytics.user('traits.name');
//  console.log("Name of User",userName);
// }


// //const userData = analytics.user()
//   // console.log("Previous userData",userData);
   
  
// tryclick(){

//  analytics.track('click');
  
//   analytics.on('track', ({ payload }) => {
//   console.log('click done')
// })

// // analytics.track('EnhancedEcommerceAction', {
// //   action: 'add'
// // })
// }

    






}
