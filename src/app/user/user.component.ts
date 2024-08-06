import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { User } from '../User';
import usersList from '../../assets/users.json';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  users: User[] = usersList;
  @Input() userFilter: string = '';

  getFilteredUsers(): User[] {
    return this.users.filter((user) =>
      user.email.toLowerCase().includes(this.userFilter.toLowerCase())
    );
  }
}
