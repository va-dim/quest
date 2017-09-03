import { BrowserAnimationsModule, NoopAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";

import { QuestionModule } from "./question/question.module";
import { QuestionComponent } from "./question/question.component";
import { SlideshowComponent } from "./slideshow/slideshow.component";
import { FreetextComponent } from "./question/choices/freetext/freetext.component";
import { SinglechoiceComponent } from "./question/choices/singlechoice/singlechoice.component";
import { MultiplechoiceComponent } from "./question/choices/multiplechoice/multiplechoice.component";
// import { MdButtonModule, MdCheckboxModule, Md } from "@angular/material";
import { MaterialModule } from "@angular/material";
@NgModule({
    declarations: [
        AppComponent, SlideshowComponent
    ],
    imports: [
        NoopAnimationsModule, BrowserAnimationsModule, BrowserModule, FormsModule, MaterialModule, QuestionModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
