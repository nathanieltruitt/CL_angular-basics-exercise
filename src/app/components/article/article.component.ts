import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  title: string = 'This is a cool article';
  content: string =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi distinctio eius dolores tempora. Libero, necessitatibus reprehenderit fuga sint magnam corrupti!';
  isTechRelated: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
