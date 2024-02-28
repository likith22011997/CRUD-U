import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { users } from '../users';
import { usersService } from '../users.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  userForm: users = {
    id: 0,
    staff_id: 0,
    name: '',
    designation: '',
    branch: '',
  };
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: usersService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }

  getById(id: number) {
    this.userService.getById(id).subscribe((data) => {
      this.userForm = data;
    });
  }

  update() {
    this.userService.update(this.userForm)
      .subscribe({
        next: (data) => {
          this.router.navigate(["/users/home"]);
        },
        error: (err) => {
          console.log(err);
        }
      })
  }
}
