import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private myClient: HttpClient) {}
  private URLData = 'http://localhost:3000/users';

  getAllUsers() {
    return this.myClient.get<any>(this.URLData);
  }
  addANewUser(newUser: any) {
    return this.myClient.post(this.URLData, newUser);
  }
  getUserById(id: any) {
    return this.myClient.get(`${this.URLData}/${id}`);
  }
  deleteUser(id: any) {
    return this.myClient.delete(`${this.URLData}/${id}`);
  }
  editUserData(id: any, updatedUser: any) {
    return this.myClient.put(`${this.URLData}/${id}`, updatedUser);
  }
}
