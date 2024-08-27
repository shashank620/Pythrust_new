import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  technicalSkills = [
    { name: 'HTML/CSS', rating: 4},
    { name: 'Bootstrap', rating: 4},
    { name: 'JavaScript', rating: 5},
    { name: 'Angular', rating: 5},
    { name: 'TypeScript', rating: 5},
    { name: 'Git', rating: 5},
    { name: 'SQL', rating: 4},

  ];

  softSkills = [
    { name: 'Teamwork', rating: 5},
    { name: 'Communication', rating: 5},
    { name: 'Problem-solving', rating: 4},
    { name: 'Time management', rating: 5}
  ];


  activeSkill: any = null;

  showRating(skill: any) {
    this.activeSkill = skill;
  }

  hideRating() {
    this.activeSkill = null;
  }
}
