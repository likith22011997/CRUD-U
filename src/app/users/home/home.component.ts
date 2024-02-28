import { Component, OnInit } from '@angular/core';
import { users } from '../users';
import { usersService } from '../users.service';

declare var window: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allUsers: users[] = [];
  deleteModal: any;
  idTodelete: number = 0;

  constructor(private userService: usersService) { }

  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
    this.get();
  }
  get() {
    this.userService.get().subscribe((data) => {
      this.allUsers = data;
    });
  }
  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }
  
  delete() {
    this.userService.delete(this.idTodelete).subscribe({
      next: (data) => {
        this.allUsers = this.allUsers.filter(_ => _.id != this.idTodelete)
        this.deleteModal.hide();
      },
    });
  }
}