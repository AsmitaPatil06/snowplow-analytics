import { Component, OnInit } from '@angular/core';
import analytics from 'src/analytics.js'

@Component({
  selector: 'app-window-event',
  templateUrl: './window-event.component.html',
  styleUrls: ['./window-event.component.css']
})
export class WindowEventComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    analytics.on('windowEnter', () => {
      // do stuff when visitor enters window
      console.log("windowEnter")
    })
    
    analytics.on('windowLeft', () => {
      // do stuff when visitor leaves window
      console.log("windowLeft")
    })
  }

}
