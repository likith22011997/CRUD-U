import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { users } from '../users';
import { usersService } from '../users.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  userForm: users = {
    id: 0,
    staff_id: 0,
    name: '',
    designation: '',
    branch: '',
  };

  constructor(private userService: usersService,
    private router: Router) { }

  ngOnInit(): void { }


  create() {

    this.userService.create(this.userForm)
      .subscribe({
        next: (data) => {
          this.router.navigate(["/users/home"])
          console.log('User addess successfully');

        },
        error: (err) => {
          console.log(err);
          console.log('unable to add user ');
        }
      })

  }
}
