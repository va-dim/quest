import { IQuestServiceClient, ISurvey, ISurveyResult } from "./interfaces";
import _bluebird from "bluebird";

export class ServiceClientMock implements IQuestServiceClient {

    private static mocksurvey = {
        id: "mocksurvey",
        title: "Superhero questionarie",
        description: "Welcome hero! Help us to create an ultimate classificaton of superheros in Frankfurt area.",
        questions: [
            {
                type: "singlechoice",
                question: "What color of pants do you prefer",
                mandatory: true,
                answers: [
                    "red",
                    "blue",
                    "green"
                ]
            },
            {
                type: "singlechoice",
                question: "Can you fly?",
                mandatory: true,
                answers: [
                    "yes",
                    "no"
                ]
            },
            {
                type: "multiplechoice",
                question: "What abilities you have?",
                mandatory: false,
                answers: [
                    "I can fly",
                    "I transform",
                    "I am stretchy",
                    "I am green"
                ]
            },
            {
                type: "freetext",
                question: "What is your message to humanity?",
                mandatory: false,
                answers: [
                    "yes",
                    "no"
                ]
            }
        ]
    };


    public getSurvey(id: string): _bluebird<ISurvey> {
        return _bluebird.resolve(ServiceClientMock.mocksurvey); // return promise as the real service client would
    }

    public submitSurvey(surveyResult: ISurveyResult) {
        console.log(`Submitted survey result: ${JSON.stringify(surveyResult)}`);
        return _bluebird.resolve(true);
    }

}
