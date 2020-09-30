import { Component , OnInit } from '@angular/core' ;
import { DataService } from '../service/data.service';

@ Component ({
selector : 'app-dashboard' ,
templateUrl : './dashboard.component.html' ,
styleUrls : [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
heroes : any[];
constructor (private dataService: DataService) {
this.heroes = this.dataService.heroes.slice (1,5)
}
ngOnInit () {}
}