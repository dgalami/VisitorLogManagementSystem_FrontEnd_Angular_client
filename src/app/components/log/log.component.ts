import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
  }

  goToSignIn(){
    this._router.navigate(['signIn']);
  }
  signOutVisitor(){
    this._router.navigate(['signOut']);
  }

}
