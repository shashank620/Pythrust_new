import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from './models/models';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projects: Project[] = [
    {
      title: 'Delta Air Lines/Flight &plane Tickets + Hotel Tickets & Rental Cars (delta.com): ',
      technologies: 'HTML, CSS, JavaScript,Typescript and Angular.',
      description: [
        'https://www.delta.com/',
        'Library - IDP (IDP- which is own library of Delta.com.).',
        'With the help of this website we can book a plane, flight Ticket and Hotels.',
        'Library - IDP (IDP- which is own library of Delta.com.)',
        'My responsibility - Show API data, display on user interface and implements.',
        "Outcome - Users can easily booked the ticket with step by step information, and that's Buisness growing day by day.",
      ],
    },
    {
      title: 'Employee Management System (ADP): ',
      technologies: 'HTML, CSS, JavaScript,Typescript and Angular.',
      description: [
        'Library - ADP(which is own library of ADP).',
        'Worked as a team and Managing UI using HTML, CSS, JavScript, and Angular',
        "Outcome - Employee can easily use company profile page, and it's also a secure",
      ],
    },
    {
      title: 'Microsoft Outlook project: ',
      technologies: ' JavaScript and property of microsoft.',
      description: [
        'Here we can Recieve Email and send',
        'create taskpane, add addins with manifest file.',
        'Get all Categorize Color of outlook in Taskpane with Radio Button and select the Categorize color and assign value in Individual Email.',
      ],
    },
  ];
}
