import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nosotros-devs',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nosotros-devs.component.html',
  styleUrl: './nosotros-devs.component.css'
})
export class NosotrosDevsComponent {

  profesionalList: {
    id: number;
    name: string;
    perfil: string;
    photo: string;
    githubLink: string;
    linkedinLink: string;
  }[] = [
    {
      id: 1,
      name: 'Veronica Ludemann',
      perfil: 'Desarrollador web',
      photo: 'assets/devs/vero.webp',
      githubLink: 'https://github.com/veroludemann',
      linkedinLink:"https://www.linkedin.com/in/veronica-ludemann/",
    },
    {
      id: 2,
      name: 'Diego Guzman',
      perfil: 'Desarrollador web',
      photo: 'assets/devs/die.webp',
      githubLink: 'https://github.com/cerveux',
      linkedinLink:"https://www.linkedin.com/in/diego-guzm%C3%A1n-cerveux/",
    },
    {
      id: 3,
      name: 'Gisele Lavisse',
      perfil: 'Desarrollador web',
      photo: 'assets/devs/gi.webp',
      githubLink: 'https://github.com/gigilvs',
      linkedinLink:"",
    },
    {
      id: 4,
      name: 'Nicolas Luna',
      perfil: 'Desarrollador web',
      photo: 'assets/devs/nico.webp',
      githubLink: 'https://github.com/NicolasLuna12',
      linkedinLink:"https://www.linkedin.com/in/nicolas-luna-632612106/",
    },
    {
      id: 5,
      name: 'Lucas Gelpi',
      perfil: 'Desarrollador web',
      photo: 'assets/devs/lucas.webp',
      githubLink: 'https://github.com/lucasGelpi',
      linkedinLink:"https://www.linkedin.com/in/lucas-gelpi/",
    },
    {
      id: 6,
      name: 'Jimena Galleguillo',
      perfil: 'Desarrollado web',
      photo: 'assets/devs/jime.webp',
      githubLink: '',
      linkedinLink:"",
    },
    {
      id: 7,
      name: 'Javier Garcia',
      perfil: 'Desarrollador web',
      photo: 'assets/devs/javi.webp',
      githubLink: '',
      linkedinLink:"",
    },
    {
      id: 8,
      name: 'Cristian Ariel López ',
      perfil: 'Desarrollador web',
      photo: 'assets/devs/cristian.webp',
      githubLink: 'https://github.com/Kronomio',
      linkedinLink:"https://www.linkedin.com/in/cristianlopez-ok/",
    },
    {
      id: 9,
      name: 'Agustin Gallardo',
      perfil: 'Desarrollador web',
      photo: 'assets/devs/agus.webp',
      githubLink: 'https://github.com/agustinnicolasgallardorios',
      linkedinLink:"",
    },
  ];

}
