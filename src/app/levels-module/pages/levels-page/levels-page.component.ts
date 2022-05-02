import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'levels-page',
  templateUrl: './levels-page.component.html',
})
export class LevelsPageComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}
  
  ngOnInit(): void {
    this.router.navigate(['general'],  { relativeTo: this.route });
  }

}
