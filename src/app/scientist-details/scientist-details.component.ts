import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from './../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scientist-details',
  templateUrl: './scientist-details.component.html',
  styleUrls: ['./scientist-details.component.css']
})
export class ScientistDetailsComponent implements OnInit {

  scientistId : any;
  scientistDetails : any = {};

  constructor(private routerDetails : ActivatedRoute, private common : CommonService, private router: Router) {
    this.routerDetails.params.subscribe(route => this.scientistId = route);
  }
  ngOnInit(): void {
    if(parseInt(this.scientistId.id) < 1) {
      this.router.navigate(['/home']);
    }
    else{
      this.scientistDetails = this.common.getScientistById(parseInt(this.scientistId.id));
    }
  }

}
