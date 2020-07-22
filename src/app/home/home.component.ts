import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';
import { Quiz } from '../quiz.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  quiz: Quiz[];

  constructor(public questionsService: QuestionsService) {}

  ngOnInit() {

    this.questionsService.getQuizzes()
      .subscribe(quiz => {
        this.quiz= quiz
      })
  }

  reset(){
    this.quiz=undefined
  }

}
