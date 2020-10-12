import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

import { analytics } from '@analytics/snowplow';
import { AboutComponent } from './about/about.component';
import { TabEventComponent } from './tab-event/tab-event.component';
import { WindowEventComponent } from './window-event/window-event.component';
import { FormDataComponent } from './form-data/form-data.component';


declare global {
  interface Window { analytics: any; }
}

//import analytics from './analytics';




///import * as snowplow from “snowplow”
//  import Analytics from 'analytics';
// import analytics from 'analytics';
// import snowplowPlugin from '@analytics/snowplow';

// const analytics = Analytics({
//   app: 'snow-analytics',
//   debug: true,
//   plugins: [
//     // Minimal recommended configuration
//     snowplowPlugin({
//       name: 'snowplow',
//      // scriptSrc: '//*.cloudfront.net/2.14.0/sp.js',
//       // collectorUrl: 'collector.mysite.com',
//       scriptSrc: 'http://localhost:4200/sp.js',
//       collectorUrl: 'http://localhost:4200/',
      
//       trackerSettings: {
//         appId: 'myApp',
//         contexts: {
//           webPage: true
        
          
//         }
//       }
//     })
//   ]
//})


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TabEventComponent,
    WindowEventComponent,
    FormDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule 
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
  
}
