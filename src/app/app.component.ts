import { Component } from '@angular/core';
import { UserService } from './service/user.service';
import { User } from './interface/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dailyart';

  users$:any;



  private user: User=   {
    "name": "Aljosa Graham",
    "username": "Aljosa",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }

  constructor(private userService:UserService){}


  onGetUsers():void{
    this.userService.getUsers().subscribe(
      (response) => {
        this.users$ = response
        console.table(response)
      },
      (error) => console.log(error),
      () => console.log('Done getting users')
    )
  }


  onGetUser():void{
    this.userService.getUser().subscribe(
      (response) => console.log(response),
      (error) => console.log(error),
      () => console.log('Done getting user')
    )
  }


  onCreateUser(){

    this.userService.createUser(this.user).subscribe(
      (response) => console.log(response),
      (error) => console.log(error),
      () => console.log('User was created')
    )

  }



}
