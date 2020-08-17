import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
})
export class PortfolioComponent implements OnInit {
  portfolio = [];
  constructor() { }

  ngOnInit(): void {
    this.portfolio = [
      {
        icon: 'assets/img/planet_home.png',
        title: "Planet Learning",
        url:"https://github.com/open-learning-exchange/planet",
        info:
          "Planet Learning is a generic learning system built in Angular & CouchDB."
      },
      {
        icon: 'assets/img/newsapp.jpg',
        title: "News App",
        url:"https://github.com/robinGiri/news",
        info:
          "News App is a simple mobile application built in Flutter project."
      },
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
