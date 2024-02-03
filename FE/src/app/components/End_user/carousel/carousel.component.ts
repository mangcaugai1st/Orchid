import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  slides = [
      {
          id: 0,
          src: 'https://www.orchideen-wichmann.de/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/p/_/p._vietnamense_10112.jpg',
          title: '',
          subtitle: '',
      },
      {
          id: 1,
          src: 'https://lh3.googleusercontent.com/proxy/IXG3_ih0d4rYnE7Da5p0oNQvGWL15uNvFHOv7LQiqIXyeqqAbps4qTlB4aj9F1WUjGFfMoi1s0tY7W2JHLzPlYx-r7uqems4G0jeWPd1hnLX1WRv',
          title: '',
          subtitle: '',
      },
  ];
  currentSlide = 0;
  next() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }
  prev() {
    this.currentSlide = (this.currentSlide - 1) % this.slides.length;
  }
}
