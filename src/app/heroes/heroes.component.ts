import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  @Input() id:Number;
  @Input() name:String;
  
  heroes : any[];
  selectHero;

  constructor(private dataService: DataService) {
    
   }

  ngOnInit() {
    this.heroes = this.dataService.heroes;
  }

  onClick(argument1) {
    this.selectHero = argument1;
  }

}