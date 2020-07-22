import { Component, Input } from "@angular/core";
import { Answers } from "../quiz.service";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})


  export class ResultsComponent {
    @Input() answers: Answers;
  }
  


