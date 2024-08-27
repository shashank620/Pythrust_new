import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ExperienceComponent } from "./experience/experience.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { ResumeComponent } from "./header/header.component";
import { EducationComponent } from "./education/education.component";
import { SkillsComponent } from "./skills/skills.component";
import { HobbiesInterestComponent } from "./hobbies-interest/hobbies-interest.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ContactComponent } from './contact/contact.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ExperienceComponent, NavigationComponent, ResumeComponent, EducationComponent, SkillsComponent, HobbiesInterestComponent, ProjectsComponent,ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PythrustAssignment';
}
