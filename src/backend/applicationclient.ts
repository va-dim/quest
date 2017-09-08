import { ServiceClientMock } from "./serviceclient.mock";
import { IQuestServiceClient, ISurveyResult } from "./interfaces";

export class ApplicationClient {
    private static serviceClient: IQuestServiceClient;

    public static setContext(serviceClient: IQuestServiceClient) {
        this.serviceClient = serviceClient;
    }

    public static getSurvey(id: string) {
        return this.serviceClient.getSurvey(id);
    }

    public static submitSurvey(surveyResult: ISurveyResult) {
        return this.serviceClient.submitSurvey(surveyResult);
    }
}
