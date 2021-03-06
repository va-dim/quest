import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { IQuestionAnswer } from "../../../../backend/interfaces";

@Component({
    selector: "quest-singlechoice",
    templateUrl: "./singlechoice.component.html",
    styleUrls: ["./singlechoice.component.css"]
})
export class SinglechoiceComponent implements OnInit {
    @Output() onChoiceChange = new EventEmitter<number>();
    @Input() answers: string[];
    @Input() choice: IQuestionAnswer | null;
    private currentSelection: number;

    public ngOnInit() {
        if (this.choice) {
            this.currentSelection = this.choice.answerIndexes[0];
        }
    }
    public onBtnClick(event) {
        const indexOfAnswer = this.answers.findIndex(answer => answer === event);
        this.onChoiceChange.emit(indexOfAnswer);
    }
}
