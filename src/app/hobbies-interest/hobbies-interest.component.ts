import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-hobbies-interest',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hobbies-interest.component.html',
  styleUrl: './hobbies-interest.component.css'
})
export class HobbiesInterestComponent {

  showHobbies: boolean = false;

  hobbies = [
    'Photography', 'Traveling', 'Outdoor Games'
  ];

  toggleHobbies() {
    this.showHobbies = !this.showHobbies;
  }

}
