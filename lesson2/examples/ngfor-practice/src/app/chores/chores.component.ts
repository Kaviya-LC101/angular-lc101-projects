import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   //chores = [ 'Complete LaunchCode prep work', 'Buy groceries', 'Clean bathroom'];
   //todoTitles = ["Yesterday's Chores", "Today's Chores", "Tomorrow's Chores"];
  chores=[
      {title:"Yesterday's chores",tasks:['Empty dishwasher','start Launchcode prep work','Buy groceries']},
      {title:"Today's chores", tasks:['Load diswasher','Finish Launchcode prep work','Buy the groceries you forgot']},
      {title:"Tomorrow's chores",tasks:['Empty dishwasher AGAIN','Play with LaunchCode practice code','Groceries AGAIN']}
   ]
   constructor() { }

   ngOnInit() {
   }

}
