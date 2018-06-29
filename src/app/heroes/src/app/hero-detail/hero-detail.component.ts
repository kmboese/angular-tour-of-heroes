import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})


export class HeroDetailComponent implements OnInit {
  //@Input is required as hero is being bound by HeroesComponent externally
  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}
