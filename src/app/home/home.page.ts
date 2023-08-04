import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CardComponent } from '../components/card/card.component';
import { register } from 'swiper/element/bundle';
import { CommonModule } from '@angular/common';

register();

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CardComponent, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage {
}
