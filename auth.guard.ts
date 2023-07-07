import { Injectable } from '@angular/core';
import {  CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate():boolean {
    let token=localStorage.getItem('token');
    if(!token){
      alert('Please login to view this page');
      return false
    }
    return true;
  }
  
}
