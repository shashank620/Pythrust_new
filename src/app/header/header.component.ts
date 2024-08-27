import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class ResumeComponent {

  name: string = 'Shashank';
  jobTitle: string = 'Frontend Developer';
  email: string = 'shashank@gmail.com';
  phone: string = '6205690133';
  address:string='Muzaffarpur (Bihar) 842002'

}
