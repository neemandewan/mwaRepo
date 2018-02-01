import { Injectable } from '@angular/core';
import { LogService } from './log.service';
import { User } from '../models/user.model';
import { Router } from "@angular/router";

@Injectable()
export class DbService {
  private data: User[] = [
    new User(1, "Prabhab Dewan", "12345", "neeman.drn@gmail.com"),
    new User(2, "Test 1", "23456", "test1@gmail.com"),
    new User(3, "Test 2", "34567", "test2@gmail.com"),
    new User(4, "Test 3", "45678", "test3@gmail.com"),
    new User(5, "Test 4", "56789", "test4@gmail.com"),
    new User(6, "Test 5", "67890", "test5@gmail.com")
  ];

  constructor(private logService: LogService, private router: Router) {}
    
  getData() {
    return this.data;
  }

  getDataById(id) {
    let userInfo = this.data[id-1];
    if(userInfo != undefined) {
      return this.data[id-1];
    }else {
      this.router.navigate(['./error']);
    }
  }
}