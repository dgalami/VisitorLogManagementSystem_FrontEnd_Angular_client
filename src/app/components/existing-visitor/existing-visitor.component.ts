import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VisitorService } from '../../services/visitor.service';
import { Employee } from '../../models/employee.model';
import { LogServiceService } from '../../services/log-service.service';
import { LogVisitor } from '../../services/log.model';
import { Visitor } from '../../models/visitor.model';


@Component({
  selector: 'app-existing-visitor',
  templateUrl: './existing-visitor.component.html',
  styleUrls: ['./existing-visitor.component.css']
})
export class ExistingVisitorComponent implements OnInit {

  logVisitor:LogVisitor;
  visitor: Visitor;
  employees:Employee[];
  employeeId:number;
  reason:string = "";
  id:any;

  constructor(private visitorService:VisitorService,
              private activeRoute: ActivatedRoute,
              private router:Router,
              private logService: LogServiceService) { }

  ngOnInit() {
    this.id = this.activeRoute.snapshot.params['vId'];

    this.getById();

    this.getAllEmployee();

  }
  signInVisitor(){
    //check if visitor has appoingment 
      this.logService.getVisitorLogById(this.id)
      .subscribe(data=>{

       
        this.createLog(data);
    
      }, 
      error=> {
      
      })


  
    this.router.navigate(['message'], { queryParams: { firstName: this.visitor.firstName, 'lastName': this.visitor.lastName }, queryParamsHandling: 'merge' });
  }


  createLog(logVisitor:LogVisitor){
     //if found
    if(logVisitor){
      this.logVisitor = logVisitor;
      this.logVisitor.eId = this.employeeId;

      
    } else {
      //not found
      let tempVisit = new LogVisitor();
      tempVisit.vId = this.id;
      tempVisit.eId = this.employeeId;
      tempVisit.reason = this.reason;
      
      this.logVisitor = tempVisit;
      

    }
    console.log( "new visitor log ", this.logVisitor);

    this.logService.createLog(this.logVisitor)
    .subscribe(res=>{
      console.log("log created");
    })
  }

  backToLog(){
    this.router.navigate(['log']);
  }

  getById(){
    this.visitorService.getVisitorById(parseInt(this.id))
    .subscribe(data=>{
      this.visitor = data;
      console.log("--", this.visitor);
    })
  }

  getAllEmployee(){
    this.visitorService.getAllEmployee()
    .subscribe(data=>{
      this.employees = data;
    })
  }

}
