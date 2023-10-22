import { Component } from '@angular/core';
import AuthService from '../../shared/service/auth/auth.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css',"../container-form.css"]
})
export class LoginUserComponent {

  statusMessage: string ='';
  private __nickname: string = '';
  private __password: string = '';
  loggedUser :number = -1;

  constructor(private authService: AuthService){
  }

  login() {
    try{
      if(!this.__nickname){
       throw new Error('Please enter a nickname')
      }
      else if(!this.__password){
        throw new Error('Please enter a password');  
      }
      const user= this.authService.login(this.__nickname, this.__password);
      if(user){

        this.loggedUser = 1;
        this.statusMessage = `Welcome ${this.authService.currentUser?.nickname}!`
      }
     
      else{
        throw new Error(`User ${this.__nickname} not found.`);  

      }
    }
    catch(error:any){
      console.log(error);
      this.statusMessage = error.message;
      this.loggedUser = 0
    }
  }
  
  get nickname(){
    return this.__nickname    
  }
  get password(){
    return this.__password    
  }

  set nickname(newNickname){
    this.__nickname= newNickname;
  }
  set password(newPassword){
    this.__password= newPassword;
  }  
}

