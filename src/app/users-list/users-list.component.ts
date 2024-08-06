import { Component } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { FormsModule, NgModel } from '@angular/forms';



@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [UserComponent, FormsModule],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent {
  searchText:string = '';
  onSearch(){

  }

  clearSearch(){
    this.searchText = '';
    this.onSearch();

  }
}
