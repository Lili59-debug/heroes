import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  id: String;
  name: String;
  heroes: any[];

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location    
  ) { }

  ngOnInit(): void {
    this.heroes = this.dataService.heroes;
    const id = this.route.snapshot.params["id"];
    this.id = id;
    this.name = this.dataService.getPerso(+id).name;
  }

  goBack(): void {
    this.location.back();
  }

}
