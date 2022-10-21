import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  name=""
  dob=""
  phoneNo=""
  place=""
  emailId=""
  password=""
  readValue=()=>{
    let data={
      "name":this.name,
      "dob":this.dob,
      "phoneNo":this.phoneNo,
      "place":this.place,
      "emailId":this.emailId,
      "password":this.password
    }
    
  }
  ngOnInit(): void {
  }

}
