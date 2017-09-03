import { ServiceClientMock } from "./service-client-mock";
import { IQuestServiceClient, SurveyResult } from "./IQuestService";

export class ApplicationClient {
    private static serviceClient: IQuestServiceClient;

    public static setContext(serviceClient: IQuestServiceClient) {
        this.serviceClient = serviceClient;
    }

    public static getSurvey(id: string) {
        return this.serviceClient.getSurvey(id);
    }

    public static submitSurvey(surveyResult: SurveyResult) {
        return this.serviceClient.submitSurvey(surveyResult);
    }
}
