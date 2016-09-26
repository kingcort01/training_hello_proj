import { Component } from '@angular/core';
import { User } from './user'

const USERS = [
  new User("jack", 25, "jackie", 180, 80),
  new User("pop", 24, "jackie", 160, 50),
  new User("yon", 23, "jackie", 140, 20),
  new User("nick", 22, "jackie", 50, 40),
  new User("mieggie", 15, "jackie", 190, 50)
];

@Component({ //must be on top of class
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {
  title:string = "this is my title"
  // user: User
  selectedUser : User
  users : Array<User>
  isEditMode:boolean = false;
  
  constructor(){
    // this.user = new User();
    // this.user.name =  "Goku"
    // this.user.age = 30
    // this.user.weight = 70; //kg
    // this.user.height = 175; //cm
    this.selectedUser = USERS[3]
    this.users = USERS
  }

  onCheckAge(){
    if(this.selectedUser.isOld())
      alert("Too old")
    else
      alert("OK")
  }

  onCheckBMI(){
    alert(this.selectedUser.getBMI())
  }

  deleteUser(index){
    this.users.splice(index, 1);
  }

  addUser(){
    let tempUser:any = {};
    tempUser.name = prompt("name")
    tempUser.password = prompt("password")
    tempUser.age = Number(prompt("age"))
    tempUser.weight = Number(prompt("weight"))
    tempUser.height = Number(prompt("height"))
    this.users.push(
      new User(tempUser.name, tempUser.age, tempUser.password, tempUser.height, tempUser.weight)
    )
  }

  getUser(){
    return this.users
  }

}