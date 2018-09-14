import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogVisitor } from '../../services/log.model';
import { Visitor } from '../../models/visitor.model';
import { VisitorService } from '../../services/visitor.service';

@Component({
  selector: 'app-new-visitor',
  templateUrl: './new-visitor.component.html',
  styleUrls: ['./new-visitor.component.css']
})
export class NewVisitorComponent implements OnInit {

  visitor:Visitor = new Visitor();

  constructor(private route: Router,
              private visitorService: VisitorService) { }

  ngOnInit() {
  }

  goNext(){
    this.visitorService.saveNewVisitorInfo(this.visitor)
    .subscribe(data=>{
      console.log("Visitor Info saved");
      console.log(data.vId);
      this.route.navigate(['existingVisitor', data.vId]);
    }, error=>{
      console.log("Already exist");
    })
   
  }

  goToMain(){
    this.route.navigate(['log']);
  }
}
