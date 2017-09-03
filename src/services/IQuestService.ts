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


export class SurveyResult {
    surveyId: string;
    answers?: Array<QuestionAnswer>;
}

export class QuestionAnswer {
    questionIndex: number;
    answerIndexes?: number[];
    answerFreetext?: string;
}

export interface IQuestServiceClient {
    getSurvey(id: string): _bluebird<ISurvey>;
    submitSurvey(surveyResult: SurveyResult);
}
