import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mission-navigation',
  templateUrl: './mission-navigation.component.html',
})
export class MissionNavigationComponent implements OnInit {
  missions: any[] = [
   {name: 'Loomings', path: 'loomings'},
   {name: 'Rebel Yell', path: 'rebel-yell'},
   {name: 'The Overmind', path: 'the-overmind'},
   {name: 'Enslavers', path: 'enslavers'},
   {name: 'The Fall', path: 'the-fall'},
   {name: 'The Stand', path: 'the-stand'},
   {name: 'UED', path: 'the-iron-fist'},
   {name: 'Zerg 2', path: 'queen-of-blades'},
   {name: 'Enslavers: Dark Vengeance', path: 'enslavers-dark-vengeance'},
   {name: 'Wings of Liberty', path: 'wol'},
   {name: 'Heart of the Swarm', path: 'hots'},
   {name: 'Legacy of the Void', path: 'lotv'}
  ]

  ngOnInit(): void {
  }

}
