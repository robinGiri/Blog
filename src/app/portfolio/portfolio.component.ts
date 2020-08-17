import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  portfolio = [];
  constructor() { }

  ngOnInit(): void {
    this.portfolio = [
      {
        icon: 'assets/img/planet_home.png',
        title: "Planet Learning",
        info:
          "Planet Learning is a generic learning system built in Angular & CouchDB."
      },
      // {
      //   icon: '',
      //   title: "Endless Hiking",
      //   info:
      //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
      // },
      // {
      //   icon: '',
      //   title: "Free Shuttle",
      //   info:
      //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
      // },
      // {
      //   icon: '',
      //   title: "Strongest Beer",
      //   info:
      //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
      // }
    ]
  }

}
