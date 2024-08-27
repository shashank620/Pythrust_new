import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {

  education = [
    {
      degree: 'B.tech Computer science Engineering',
      University: 'Punjab Technical University',
      graduationDate: '2018-2022',
      marks:'7.35 CGPA'
    },
  ];

  selectedEducation: any = null;

  selectEducation(edu: any) {
    this.selectedEducation = this.selectedEducation === edu ? null : edu;
  }

}
