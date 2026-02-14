import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {

  currentTime: String = ''

  ngOnInit(): void {
    this.updateClock()
    setInterval(() => {
      this.updateClock();
    }, 1000); 


  }

  updateClock() {
    const now = new Date();

    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    };

    this.currentTime = now.toLocaleString('en-US', options);
  }

}
