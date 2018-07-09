import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts = [
    {
      title: 'Le nouveau ASUS ROG est une tuerie !',
      content: 'Le nouveau ASUS ROG, prévue pour une sortie officielle en 2019, a pu être testé par norte direction. Suspense !',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'EasyPHP rachète SensioLabs, c\'est officiel',
      content: 'Nous aussi nous sommes choqués à notre rédaction. Incroyable mais vrai, mais EasyPHP étant trop "casual" a décidé de racheter la société SensioLabs à l\'origine du sublimissime Symfony. Réactions de Fabien POTENCIER.',
      loveIts: -1,
      created_at: new Date()
    },
    {
      title: 'Si toi aussi tu n\'as plus d\'idée d\'article invraissemblable...',
      content: 'Ouai vraiment, plus aucune inspiration... :-)',
      loveIts: 1,
      created_at: new Date()
    }
  ]
}
