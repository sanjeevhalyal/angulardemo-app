import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { PostsService } from '../../services/posts.service';
import { Posts } from '../../models/Posts';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: Posts;

  constructor(
    private route: ActivatedRoute,
    private postService: PostsService
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.postService.getPost(id).subscribe(post => this.post = post);

  }

}
