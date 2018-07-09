import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts = [
    {
      title: 'Post 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur laoreet ultricies. Nulla bibendum, odio eget viverra efficitur, nisl enim congue nisl, ut lobortis justo sapien at tortor. Aenean mollis.',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Post 2',
      content: 'Contenu post 2',
      loveIts: -1,
      created_at: new Date()
    },
    {
      title: 'Post 3',
      content: 'Contenu post 3',
      loveIts: 1,
      created_at: new Date()
    }
  ]
}
