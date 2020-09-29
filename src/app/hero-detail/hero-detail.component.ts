import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../service/data.service'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() selectHero;
 
  heroes : any[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.heroes = this.dataService.heroes
  }

}
