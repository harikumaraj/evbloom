import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {

  // @ViewChild('slider') slides: IonSlides;

  constructor(
    private router: Router
  ) {
  }

  swipeNext(isNext) {
    if (isNext) {
      // this.slides.slideNext();
    } else {
      this.router.navigate(['tabs']);
    }
  }

  ngOnInit() { }

}
