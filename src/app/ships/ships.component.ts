import { Component, OnInit } from '@angular/core';
import { GetShipsGQL, Ship } from '../../generated/graphql';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {
  public ships: Ship[] = null;

  constructor(private shipsGQL: GetShipsGQL) { }

  ngOnInit(): void {
    this.shipsGQL.watch().valueChanges.subscribe((result) => {
      this.ships = result.data.ships;
    });
  }
}
