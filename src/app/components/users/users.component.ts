import { Component, OnInit, ViewChild, Inject, Injectable } from '@angular/core';

import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { UserPipe } from '../../pipes/user.pipe';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName:'',
    email:''

  }
  users: User[];
  showExtended: boolean = false;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm') form:any;
  data: any;

  constructor(@Injectable()private userService: UserService) { }

  ngOnInit() {
    
      this.userService.getData().subscribe(data => {
        console.log(data);
        
      });

      this.userService.getUsers().subscribe(users => {
        this.users = users;
        this.loaded = true;
      });
  
 }
  

  onSubmit({value, valid}: {value:User, valid:boolean }){
    if(!valid)
    {
      console.log('Form is not valid');
    }
    else{
    value.isActive = true;
    value.joined = new Date();
    value.hide = true;
    
    this.userService.addUser(value);

    this.form.reset();
    }

    
  }
}
