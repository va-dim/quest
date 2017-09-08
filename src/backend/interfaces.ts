import _bluebird from "bluebird";

export enum QuestionType {
    singlechoice = "singlechoice",
    multiplechoice = "multiplechoice",
    freetext = "freetext"
}

export interface ISurvey {
    id?: string;
    title?: string;
    questionsTotal?: number;
    questions?: Array<IQuestion>;
}

export interface IQuestion {
    id?: string;
    question?: string;
    type?: QuestionType;
    mandatory?: boolean;
    answers?: Array<string>;
}


export interface ISurveyResult {
    surveyId: string;
    answers?: Array<IQuestionAnswer>;
}

export interface IQuestionAnswer {
    questionIndex: number;
    answerIndexes?: number[];
    answerFreetext?: string;
}

export interface IQuestServiceClient {
    getSurvey(id: string): _bluebird<ISurvey>;
    submitSurvey(surveyResult: ISurveyResult);
}
