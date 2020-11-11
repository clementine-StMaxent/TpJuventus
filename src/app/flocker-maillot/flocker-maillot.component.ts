import { Component } from '@angular/core';

interface Players {
  name: string;
  numero: number;
}

@Component({
  selector: 'app-flocker-maillot',
  templateUrl: './flocker-maillot.component.html',
  styleUrls: ['./flocker-maillot.component.css']
})
export class FlockerMaillotComponent {

  afficherJoueur: string;

  // articles
  players: Players[] = [
    { name: "Christian Abbiati", numero: 1 },
    { name: "Tiziano Acagni", numero: 2 },
    { name: "Accusati", numero: 3 },
    { name: "Karl Aegli", numero: 4 },
    { name: "Piero Aggradi", numero: 5 },
    { name: "Billy Aitken", numero: 6 },
    { name: "Alessandro Ajmone Marsan", numero: 7 },
    { name: "Riccardo Ajmone Marsan I", numero: 8 },
    { name: "Annibale Ajmone Marsan III", numero: 9 }
  ];


  constructor() { }

  // displayName() {
  //   console.log("name" + this.players);
  // }

  onChange(event: any) {
    let joueur = event.target;
    // pour sélectionner un joueur
    // console.log(joueur.options[joueur.selectedIndex].text);
    this.afficherJoueur = joueur.options[joueur.selectedIndex].text;
  }

}