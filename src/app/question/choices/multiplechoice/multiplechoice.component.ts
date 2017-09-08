import { Component, Input, Output, OnInit, OnDestroy, EventEmitter } from "@angular/core";
import { IQuestionAnswer } from "../../../../backend/interfaces";

interface IResultPair {
    key: number;
    value: boolean;
}

@Component({
    selector: "quest-multiplechoice",
    templateUrl: "./multiplechoice.component.html",
    styleUrls: ["./multiplechoice.component.css"]
})
export class MultiplechoiceComponent implements OnInit {
    @Output() onChoiceChange = new EventEmitter<Array<number>>();
    @Input() answers: string[];
    @Input() choice: IQuestionAnswer | null;

    private outputChoice: Array<IResultPair> = [];
    private currentSelection: number[] = [];
    public ngOnInit() {
        if (this.choice) {
            this.currentSelection = this.choice.answerIndexes;
            this.outputChoice = this.currentSelection.map(i => ({ key: i, value: true }));
        }
    }

    private onBtnChanged(event, value: string) {
        console.log("on button changed", event, value);
        const checked: boolean = event.checked;
        const indexOfAnswer = this.answers.findIndex(answer => answer === value);
        const choice = this.outputChoice.find(c => c.key === indexOfAnswer);

        if (choice) {
            choice.value = checked;
        } else {
            this.outputChoice.push({ key: indexOfAnswer, value: checked });
        }
        const resultChoice = this.outputChoice.filter(c => c.value).map(c => c.key);

        this.onChoiceChange.emit(resultChoice);

    }

}
