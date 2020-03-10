import { Component, OnInit } from '@angular/core';
import { GetRocketsGQL, Rocket } from '../../generated/graphql';

@Component({
  selector: 'app-rockets',
  templateUrl: './rockets.component.html',
  styleUrls: ['./rockets.component.scss'],
})
export class RocketsComponent implements OnInit {
  public rockets: Rocket[] = null;

  constructor(private rocketsGQL: GetRocketsGQL) { }

  ngOnInit(): void {
    this.rocketsGQL.watch().valueChanges.subscribe((result) => {
      this.rockets = result.data.rockets;
    });
  }
}
