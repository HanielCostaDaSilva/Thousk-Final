import { Component } from '@angular/core';
import UserService from '../../shared/service/user/user.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css',"../container-form.css"]
})
export class LoginUserComponent {

  statusMessage: string ='';
  private _nickname: string = '';
  private _password: string = '';
  loggedUser=-1;


  constructor(private userService: UserService){
  }

  login() {
    try{
      
      if(!this._nickname){
       throw new Error('Please enter a nickname')
      }
      else if(!this._password){
        throw new Error('Please enter a password');  
      }
      const userLogged =this.userService.login(this._nickname, this._password);
      if (!userLogged){
        throw new Error(`User ${this._nickname} not found.`);  
      }
      this.loggedUser = 1;
      this.statusMessage = `Welcome ${this._nickname}!`

    }
    catch(error:any){
      this.statusMessage = error.message;
      this.loggedUser=0
    }
  }
  
  get nickname(){
    return this._nickname    
  }
  get password(){
    return this._password    
  }

  set nickname(newNickname){
    this._nickname= newNickname;
  }
  set password(newPassword){
    this._password= newPassword;
  }  
  
}

