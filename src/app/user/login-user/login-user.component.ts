import { Component } from '@angular/core';
import AuthService from '../../shared/service/auth/auth.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css',"../container-form.css"]
})
export class LoginUserComponent {

  statusMessage: string ='';
  private _nickname: string = '';
  private _password: string = '';
  loggedUser :number = -1;

  constructor(private authService: AuthService){
  }

  login() {
    try{
      
      if(!this._nickname){
       throw new Error('Please enter a nickname')
      }
      else if(!this._password){
        throw new Error('Please enter a password');  
      }

      this.authService.login(this._nickname, this._password);
      
      if(this.authService.currentUser){

        this.loggedUser = 1;
        const userNickname = this.authService.currentUser.subscribe(user => user.nickname)
        this.statusMessage = `Welcome ${userNickname}!`
      }
     
      else{
        throw new Error(`User ${this._nickname} not found.`);  

      }
    }
    catch(error:any){
      this.statusMessage = error.message;
      this.loggedUser = 0
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

