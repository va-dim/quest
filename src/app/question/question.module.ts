import { NgModule } from "@angular/core";
import { QuestionComponent } from "./question.component";
import { FreetextComponent } from "./choices/freetext/freetext.component";
import { SinglechoiceComponent } from "./choices/singlechoice/singlechoice.component";
import { MultiplechoiceComponent } from "./choices/multiplechoice/multiplechoice.component";
import { BrowserAnimationsModule, NoopAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "@angular/material";

@NgModule({
    declarations: [
        FreetextComponent, QuestionComponent, SinglechoiceComponent, MultiplechoiceComponent
    ],
    imports: [BrowserAnimationsModule, BrowserModule, FormsModule, MaterialModule
    ],
    exports: [FreetextComponent, QuestionComponent, SinglechoiceComponent, MultiplechoiceComponent]
})
export class QuestionModule { }
