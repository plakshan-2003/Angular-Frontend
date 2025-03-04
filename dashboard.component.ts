import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-dashboard',
  imports: [CommonModule,MatButtonModule,MatCardModule,MatIconModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  images = [
    { src: '523-5239905_apple-iphone-6-plus-iphone-6s-plus-gold.png', alt: 'Image 1' },
    { src: 'mobiles.png', alt: 'Image 2' },
    { src: 'R (5).jpeg', alt: 'Image 3' }
  ];
}
