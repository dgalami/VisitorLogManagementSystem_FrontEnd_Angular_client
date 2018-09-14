import { Component, OnInit } from '@angular/core';
import { LogServiceService } from '../../services/log-service.service';
import { LogVisitor } from '../../services/log.model';
import { VisitorService } from '../../services/visitor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.css']
})
export class SignOutComponent implements OnInit {

  logVisitor: LogVisitor[];
  logV: LogVisitor;
  email: string;
  phone: string;
  isNotFound: boolean = false;
  message:string;
  constructor(private logService: LogServiceService, private visitorService: VisitorService, private router: Router) { }

  ngOnInit() {
    this.searchCurrentLog();
  }

  searchVisitorLog() {
    if (this.logVisitor) {
      if (this.email) {
        //get by email
        this.visitorService.getVisitorByEmail(this.email)
        .subscribe(data=>{
          if(data){
            this.logV = this.logVisitor.find(x => x.vId === data.vId);
            this.isNotFound = false;
          } else {
            this.isNotFound = true;
            this.message = "Data not Found!";
          }
        })
      } else if (this.phone) {
        this.visitorService.getVisitorByPhone(this.phone)
          .subscribe(data => {
            if (data) {
              this.logV = this.logVisitor.find(x => x.vId === data.vId);
              this.isNotFound = false;
            } else {
              this.isNotFound = true;
              this.message = "Data not Found!"
            }
          })
      } else {
        this.isNotFound = true;
        this.message = "Invalid Input!"
      }

    }

  }

  signOut() {
    this.logService.VisitorLogOut(this.logV)
      .subscribe(data => {
        console.log("successfully logged Out");
        this.router.navigate(['log']);
      })
  }

  searchCurrentLog() {
    this.logService.getLoggedIn()
      .subscribe(data => {
        this.logVisitor = data;
        console.log(this.logVisitor);
      })
  }


}
