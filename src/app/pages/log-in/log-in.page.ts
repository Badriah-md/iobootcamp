import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {
  
  onClickbtn(username:string) {
    console.log('yup'+ username);

  }

  constructor(public router:Router) { }

  ngOnInit() {
  }
log(name:string,pass:string){
  if(name === 'bdor' && pass === 'bb'){
    this.router.navigateByUrl('/category');
  }
  name='';
  pass='';
}

}
