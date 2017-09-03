export class RestResponse {
    statusCode: number;
    responseData: string;
}

export class RestClient {

    // public get(action: string, requestHeaders: Array<KeyValuePair<string, string>>, requestParams: Array<KeyValuePair<string, string>>): _bluebird<RestResponse> {

    //     return this.execute("GET", action, requestHeaders, requestParams, null);
    // }

    // public put(action: string, requestHeaders: Array<KeyValuePair<string, string>>, requestParams: Array<KeyValuePair<string, string>>): _bluebird<RestResponse> {

    //     return this.execute("PUT", action, requestHeaders, requestParams, null);
    // }

    // public execute() {
    //     const request = new XMLHttpRequest();

    //     request.addEventListener("load", (event: Event) => {

    //         const result = new RestResponse();

    //         result.responseData = request.responseText;
    //         result.responseHeader = this.parseHeaderString(request.getAllResponseHeaders());
    //         result.statusCode = request.status;

    //         resolve(result);
    //     });

    //     request.addEventListener("error", (event: ErrorEvent) => {

    //         reject(new RestClientError("The request was aborted due to an error. url: " + completeAction + ", status: " + request.status + ", statustext: " + request.statusText));
    //     });
    // }



}
