import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'skill-points',
  templateUrl: './skill-points.component.html',
})
export class SkillPointsComponent implements OnInit {
  availablePts: number = 0;
  totalPts: number = 0

  ngOnInit(): void {
  }

}
