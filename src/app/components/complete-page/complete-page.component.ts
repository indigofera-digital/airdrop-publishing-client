import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-complete-page',
  templateUrl: './complete-page.component.html',
  styleUrls: ['./complete-page.component.scss']
})
export class CompletePageComponent implements OnInit {

  url: string = ''
  address: string = ''

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.url = params["campaignUrl"]
      this.address = params["address"]
    });
  }

}
