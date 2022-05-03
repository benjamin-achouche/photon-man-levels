import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'skill-points',
  templateUrl: './skill-points.component.html',
})
export class SkillPointsComponent implements OnInit {
  availablePts: number = 25;
  totalPts: number = 100

  ngOnInit(): void {
  }

}
