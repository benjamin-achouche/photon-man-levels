import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mission-navigation',
  templateUrl: './mission-navigation.component.html',
})
export class MissionNavigationComponent implements OnInit {
  missions: string[] = [
    "Loomings",
    "Rebel Yell",
    "The Overmind",
    "Enslavers",
    "The Fall",
    "The Stand",
    "UED",
    "Zerg 2",
    "Enslavers: Dark Vengeance",
    "Wings of Liberty",
    "Heart of the Swarm",
    "Legacy of the Void"
  ]

  ngOnInit(): void {
  }

}
