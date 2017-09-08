import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";
import { ApplicationClient } from "./backend/applicationclient";
import { ServiceClientMock } from "./backend/serviceclient.mock";

if (environment.production) {
    ApplicationClient.setContext(new ServiceClientMock()); // in this case real service could be injected
    enableProdMode();
} else {
    ApplicationClient.setContext(new ServiceClientMock());

}

platformBrowserDynamic().bootstrapModule(AppModule);
