import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { MatCardModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuestionFormComponent } from './question-form/question-form.component';
import { QuestionsComponent } from './questions/questions.component';
import { ResultsComponent } from './results/results.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: ':quizId', component: QuestionsComponent },
  { path: '', redirectTo: "home", pathMatch: "prefix" },
];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuestionFormComponent,
    QuestionsComponent,
    ResultsComponent
  ],

  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule,RouterModule.forRoot(appRoutes), BrowserAnimationsModule, MatCardModule, MatButtonModule],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
