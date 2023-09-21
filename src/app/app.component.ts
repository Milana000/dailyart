import { Component } from '@angular/core';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dailyart';

  users$:any;
  constructor(private userService:UserService){}


  onGetUsers():void{
    this.userService.getUsers().subscribe(
      (response) => this.users$ = response,
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
