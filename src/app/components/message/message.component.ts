import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
firstName:string = "";
lastName:string = "";
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    
    this.route.queryParams
      .subscribe(params => {
        console.log(params);

        this.firstName = params.firstName;
        console.log(this.firstName);

        this.lastName = params.lastName;
        console.log(this.lastName);
      });

  }

}
