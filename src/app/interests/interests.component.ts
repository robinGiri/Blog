import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.scss']
})
export class InterestsComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    let wrapper = document.getElementById('wrapper');
    let topLayer: any = wrapper.querySelector('.top');
    let handle: any = wrapper.querySelector('.handle');
    let skew = 0;
    let delta = 0;

    if(wrapper.className.indexOf('skewed') != -1){
      skew = 1000;
    }
  
    wrapper.addEventListener('mousemove', function(e){
      delta = (e.clientX - window.innerWidth / 2) * 0.5;
      handle.style.left = e.clientX + delta + 'px';
      topLayer.style.width= e.clientX + skew + delta + 'px';
    });
  }

}
