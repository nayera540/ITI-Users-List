import { Component } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { User } from '../User';
import usersList from "../../assets/users.json";


@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [UserComponent],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent {
  users: User[] = usersList;
}
