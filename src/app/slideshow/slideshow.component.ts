import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { IQuestion, ISurvey, IQuestionAnswer, ISurveyResult } from "../../backend/interfaces";

@Component({
    selector: "quest-slideshow",
    templateUrl: "./slideshow.component.html",
    styleUrls: ["./slideshow.component.css"]
})
export class SlideshowComponent implements OnInit {
    private static moveDirection = "right";

    @Input() survey: ISurvey | null;
    @Output() onSurveyEnd = new EventEmitter<ISurveyResult>();
    private currentQuestion: IQuestion;
    private currentQuestionIndex: number;
    private currentSurveyResult: ISurveyResult;
    private currentChoice: IQuestionAnswer;

    public ngOnInit() {
        this.currentSurveyResult = { surveyId: this.survey.id, answers: [] };
        this.setQuestion(0);

    }

    public onNextClick(event: IQuestionAnswer) {
        const newIndex = Math.min(this.survey.questions.length - 1, this.currentQuestionIndex + 1);
        this.saveAnswer(event);

        if (newIndex === this.currentQuestionIndex) {
            this.onSurveyEnd.emit(this.currentSurveyResult);
        } else {
            this.setQuestion(newIndex);
        }
        console.log("currentSurveyResult: ", this.currentSurveyResult);
    }

    public onPrevClick(event: IQuestionAnswer) {
        const newIndex = Math.max(0, this.currentQuestionIndex - 1);
        this.saveAnswer(event);
        this.setQuestion(newIndex);
        console.log("currentSurveyResult: ", this.currentSurveyResult);
    }

    private saveAnswer(event: IQuestionAnswer) {
        if (!event) { return; }
        const answerIndex = this.currentSurveyResult.answers.findIndex(a => a.questionIndex === this.currentQuestionIndex);
        if (answerIndex > -1) {
            this.currentSurveyResult.answers.splice(answerIndex, 1, event);
        } else {
            this.currentSurveyResult.answers.push(event);
        }
    }

    private setQuestion(index: number) {
        this.currentQuestion = this.survey.questions[index];
        this.currentQuestionIndex = index;
        this.currentChoice = this.currentSurveyResult.answers.find(a => a.questionIndex === this.currentQuestionIndex);
    }

}
