import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent {

  @Input() post; 

  constructor(private postsService: PostsService) { }

  onLoveIt() {
    this.postsService.setLoveIt(this.post);
  }

  onDontLoveIt() {
    this.postsService.setDontLoveIt(this.post);
  }

  onRemovePost() {
    this.postsService.removePost(this.post);
  }

}
