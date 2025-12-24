import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MATERIAL_IMPORTS } from '../../shared/material';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslatePipe, ...MATERIAL_IMPORTS],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects = [
    {
      id: 'project_1',
      title: 'Join',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      tech: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
      image: '/images/project_1.png',
      github: 'https://github.com',
      liveTest: 'https://example.com'
    },
    {
      id: 'project_2',
      title: 'Sharkie',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      tech: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
      image: '/images/project_2.png',
      github: 'https://github.com',
      liveTest: 'https://example.com'
    },
    {
      id: 'project_3',
      title: 'Pollo Loco',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco also to defeat against the crazy hen.',
      tech: ['JavaScript', 'HTML', 'CSS'],
      image: '/images/project_3.png',
      github: 'https://github.com',
      liveTest: 'https://example.com'
    }
  ];
}
