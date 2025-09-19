import { Component } from '@angular/core';
import { MomentModule } from 'ngx-moment';

@Component({
  selector: 'app-footer',
  imports: [MomentModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  date: Date;

  constructor() {
    this.date = new Date();
  }
}
