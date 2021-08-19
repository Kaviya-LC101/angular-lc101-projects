import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffStatus : boolean=false;
  //landStatus :boolean=true;
  
handleTakeOff(){
  let result=window.confirm("Confirm that the shuttle is ready for takeoff");
  if(result){
    this.message="Shuttle in flight";
    this.color='blue';
    this.height=10000;
    this.width=0;
    this.takeOffStatus=true;
  
  }
}
handleLand(){
  alert("The shuttle is landing. Landing gear engaged.");
  this.message="The Shuttle has landed";
  this.color="green";
  this.height=0;
 this.width=0;
  this.takeOffStatus=false;
  
}
handleAbort(){
  let answer=window.confirm("Do you reall want to abort the mission");
  if(answer){
    this.message="Mission Aborted";
    this.color='Red';
    this.height=0;
    this.width=0;
  }
 }
 warning(width,height){
   if(width>260000||width<0 ||height>340000||height<0){
    
   this.color='orange';
   }
   else{this.color='blue'}
 }
 moveRocket(rocketImage,direction){
  if (direction === 'right') {
    let movement = parseInt(rocketImage.style.left) + 10 + 'px';
    rocketImage.style.left = movement;
    this.width = this.width + 10000;
    
 }
 else if(direction==='left'){
  let movement = parseInt(rocketImage.style.left) - 10 + 'px';
  rocketImage.style.left = movement;
  this.width = this.width - 10000;
 }
 else if(direction=='up'){
  let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
  rocketImage.style.bottom = movement;
  this.height = this.height + 10000;
  
 }
 else if(direction=='down'){
  let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
  rocketImage.style.bottom = movement;
  this.height = this.height - 10000;
 }
 this.warning(this.width,this.height);
}
}
