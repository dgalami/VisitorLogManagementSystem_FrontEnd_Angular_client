import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VisitorService } from '../../services/visitor.service';
import { Visitor } from '../../models/visitor.model';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  email: string;
  phone: string;
  isEmpty: boolean;
  visitor: Visitor;

  errMessage: string;

  constructor(private router: Router, private visitorService: VisitorService) { }

  ngOnInit() {
    this.isEmpty = false;

  }

  search(){
    if(this.email){
      this.searchByEmail();
    } else if(this.phone){
      this.searchByPhone();
    }
    else {
      alert("Please enter the value to search.");
      this.reset();
    }
    
  }

  searchByEmail() {

    if (this.email){
        this.visitorService.getVisitorByEmail(this.email).subscribe(
          data => {
            this.visitor = data;
            console.log(data);
            if(data){
              this.router.navigate(['existingVisitor', this.visitor.vId]);
            } else {
              console.log("not found");
              this.isEmpty = true;
            }
            
          },
          error => {
            this.isEmpty = true;
          })
      }
  }


  searchByPhone() {
    if (this.phone == "" && this.phone == null) {
      this.isEmpty = true;
    } else {

      if (this.phone) {
        this.visitorService.getVisitorByPhone(this.phone)
          .subscribe(data => {
            this.visitor = data;
            if(data){
              this.router.navigate(['existingVisitor', this.visitor.vId]);
            } else {
              console.log("not found");
              this.isEmpty = true;
            }
            
           
          },
            error => {
              this.isEmpty = true;
            })
      }
    }

  }


  goNewVisitor() {
    this.router.navigate(['newVisitor']);
  }

  reset() {
    this.isEmpty = false;
  }

  
}
