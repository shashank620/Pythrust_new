import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {


  experience = [
    {
      title: '1 yr as Frontend Developer',
      company: 'Procloudware service pvt ltd',
      dates: 'September 2022 - November 2023',
      description: '',
      point1: 'Handle the clients and their Projects.',
      point2: 'Get a Task on call and Implements.',
      point3: 'Task Include like User Interface, Logical Parts, Debugging, whatever clients wants.'
    },
  ];

  selectedJob: any = null;

  selectExperience(job: any) {
    this.selectedJob = this.selectedJob === job ? null : job;
  }
}
