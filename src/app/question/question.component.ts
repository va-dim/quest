import { Component, Input, Output, OnInit, EventEmitter } from "@angular/core";
import { trigger, state, transition, style, animate } from "@angular/animations";
import { ApplicationClient } from "../../backend/applicationclient";
import { IQuestion, ISurvey, IQuestionAnswer } from "../../backend/interfaces";
@Component({

    selector: "quest-question",
    templateUrl: "./question.component.html",
    styleUrls: ["./question.component.css"],

    animations: [

        trigger("animTriggerIn", [
            state("inFromRight", style({
                transform: "translateX(0)",
                opacity: 1
            })),
            state("inFromLeft", style({
                transform: "translateX(0)",
                opacity: 1
            })),
            transition("void => inFromRight", [
                style({ transform: "translateX(100%)", opacity: 0 }),
                animate("200ms ease-in")
            ]),
            transition("void => inFromLeft", [
                style({ transform: "translateX(-100%)", opacity: 0 }),
                animate("200ms ease-in")
            ]),
        ])
    ],
    host: { "[@animTriggerIn]": "animIn" }
})
export class QuestionComponent implements OnInit {
    private static direction = "right";
    @Input() question: IQuestion | null;
    @Input() inputChoice: IQuestionAnswer | null;
    @Input() questionIndex: number;

    @Output() nextClicked = new EventEmitter<IQuestionAnswer>();
    @Output() prevClicked = new EventEmitter<IQuestionAnswer>();

    private animIn: string;
    private outputChoice: IQuestionAnswer;
    private mandatory: boolean;

    public ngOnInit() {
        console.log("choice in question: ", this.inputChoice);
        if (this.inputChoice) {
            this.outputChoice = this.inputChoice;
        }
        this.animIn = QuestionComponent.direction === "right" ? "inFromRight" : "inFromLeft";
    }

    private onPrevClick() {
        QuestionComponent.direction = "left";

        if (!this.question.mandatory || this.outputChoice) {
            this.prevClicked.emit(this.outputChoice);
        } else {
            this.mandatory = true;
        }
    }
    private onNextClick() {
        QuestionComponent.direction = "right";
        if (!this.question.mandatory || this.outputChoice) {
            this.nextClicked.emit(this.outputChoice);
        } else {
            this.mandatory = true;
        }
    }

    private onFreetextChange(event) {
        this.outputChoice = { questionIndex: this.questionIndex, answerFreetext: event };
    }
    private onSingleChoiceChange(event) {
        this.outputChoice = { questionIndex: this.questionIndex, answerIndexes: [event] };
    }
    private onMultipleChoiceChange(event) {
        this.outputChoice = { questionIndex: this.questionIndex, answerIndexes: event };
    }
}
