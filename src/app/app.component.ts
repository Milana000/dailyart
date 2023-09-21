import { Component } from '@angular/core';
import { PeopleService } from './people.service';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dailyart';

  
  constructor(private userService:UserService){}


  onGetUsers():void{
    this.userService.getUsers().subscribe(
      (response) => console.log(response),
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



}
