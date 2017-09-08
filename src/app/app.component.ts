import { Component } from "@angular/core";
import { ApplicationClient } from "../backend/applicationclient";
import { IQuestion, ISurvey, ISurveyResult } from "../backend/interfaces";
import { ServiceClientMock } from "../backend/serviceclient.mock";
@Component({
    selector: "quest-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent {
    private survey: ISurvey;
    private state = "start";
    private surveyResult: string;
    constructor() {
        ApplicationClient.getSurvey("123")
            .then((result: ISurvey) => {
                this.survey = result;
                console.log(`Succesfully retrieved survey: "${result ? result.title : ""}"`);
            })
            .catch(error => console.error(`Error: ${error}`));
    }

    onStartClick() {
        this.state = "survey";
    }

    onSurveyEnd(survey: ISurveyResult) {
        console.log("survey end: ", survey);
        this.surveyResult = JSON.stringify(survey);
        ApplicationClient.submitSurvey(survey)
            .then(result => {
                if (result) {
                    console.log("Survey saved succesfully");
                    this.state = "end";
                }
            });
    }
}
