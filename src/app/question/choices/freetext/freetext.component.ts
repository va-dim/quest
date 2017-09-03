import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { QuestionAnswer } from "../../../../services/IQuestService";

@Component({
    selector: "quest-freetext",
    templateUrl: "./freetext.component.html",
    styleUrls: ["./freetext.component.css"]
})
export class FreetextComponent implements OnInit {
    @Output() onChoiceChange = new EventEmitter<string>();
    @Input() choice: QuestionAnswer | null;

    private initialText = "";

    public ngOnInit() {
        if (this.choice) {
            this.initialText = this.choice.answerFreetext;
        }
    }
    onTextChanged(text) {
        this.onChoiceChange.emit(text);
    }
}
