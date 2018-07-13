import { Injectable } from "@angular/core";
import { Post } from "../models/Post.model";
import { Subject } from "rxjs";
import * as firebase from 'firebase';

@Injectable()
export class PostsService {

  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();

  constructor() { }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  saveAndEmit() {
    this.savePosts();
    this.emitPosts();
  }

  /* Récupération de tous les articles */
  getPosts() {
    firebase.database()
            .ref('/posts')
            .on('value', (data) => {
                this.posts = data.val() ? data.val() : [];
                this.emitPosts();
            });
  }

  /* Récupération d'un seul article */
  getSinglePost(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/posts/' + id).once('value').then(
          (data) => {
            resolve(data.val());
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  /* Recherche de l'index d'un article */
  searchPost(post : Post) {
    const postIndex = this.posts.findIndex(
      (postElement) => {
        if(postElement === post) {
          return true;
        }
      }
    );
    return postIndex;
  } 

  /* Création d'un article */
  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.saveAndEmit();
  }

  /* Suppression d'un article */
  removePost(post: Post) {
    const index = this.searchPost(post);
    this.posts.splice(index, 1);
    this.saveAndEmit();
  }

  /* J'aime +1 sur un article */
  setLoveIt(post: Post) {
    const index = this.searchPost(post);
    this.posts[index].loveIts++;
    this.saveAndEmit();
  }

  /* J'aime -1 sur un article */
  setDontLoveIt(post: Post) {
    const index = this.searchPost(post);
    this.posts[index].loveIts--;
    this.saveAndEmit();
  }  
}