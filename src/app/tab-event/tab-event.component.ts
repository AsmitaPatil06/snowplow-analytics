import { Component, OnInit } from '@angular/core';
import analytics from 'src/analytics.js'
import tabEventsPlugin from 'analytics-plugin-tab-events'

import { onTabChange } from 'analytics-plugin-tab-events'

//import tabEventsPlugin from 'analytics-plugin-tab-events'

let tabInterval;

// analytics.on('tabHidden', () => {
//   tabHidden: () => {
//     console.log('Tab is now hidden')
//     let tabHiddenCount = 0
//     tabInterval = setInterval(() => {
//       console.log(`tab counter ${tabHiddenCount++}`)
//     }, 500)
//   }

// })

// analytics.on('tabVisible', () => {
//   tabVisible: () => {
//         console.log('Tab now visible again')
//         clearInterval(tabInterval)
//       }

// })
const myListener = onTabChange((isHidden) => {
  if (isHidden) {
    console.log('Tab is now hidden')
    let tabHiddenCount = 0
    tabInterval = setInterval(() => {
      console.log(`tab counter ${tabHiddenCount++}`)
    }, 3000)
  
  } else {
    console.log('Welcome back tab is visible')
  //  console.log('Tab now visible again')
        clearInterval(tabInterval)
  }
})

// const myListener = onTabChange((isHidden) => {
//   if (isHidden) {
//     console.log('Tab is not visible')
//   } else {
//     console.log('Welcome back tab is visible')
//   }
// })


@Component({
  selector: 'app-tab-event',
  templateUrl: './tab-event.component.html',
  styleUrls: ['./tab-event.component.css']
})
export class TabEventComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   
    analytics.on('tabHidden', () => {
      console.log("on-tabhiden")
    })
    analytics.on('tabVisible', () => {
      // do stuff when tab visible
      console.log("on-tabvisibble")
    })
    
    /* Or fire listeners just once */
    analytics.once('tabHidden', () => {
      // do stuff ONCE when tab hidden
      console.log("once-tabhidden")
    })
    analytics.once('tabVisible', () => {
      // do stuff ONCE when tab visible
      console.log("once-tabvisibble")
    })
    
  
  }
  


}
