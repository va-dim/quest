import { browser, by, element } from "protractor";

export class AppPage {
    navigateTo() {
        return browser.get("/");
    }
    getQuestionarieTitle() {
        // return element(by.css("quest-root .title")).getText();
        return element(by.xpath("//div[@class=\"title\"]")).getText();
    }
    getDescription() {
        // return element(by.css("quest-root .title")).getText();
        return element(by.xpath("//div[@class=\"survey\"]/md-card/h3")).getText();
    }

    clickOnStartButton() {
        element(by.id("startButton")).click();
    }

    clickOnNextButton() {
        return element(by.id("nextButton")).click();
    }

    clickOnPrevButton() {
        return element(by.id("prevButton")).click();
    }

    getQuestion() {
        return element(by.css("#questionContainer > div > md-toolbar-row")).getText();
    }

    getMandatoryLabel() {
        return element(by.css(".mandatory")).getText();
    }

    clickOnRadioButton(index: number) {
        return element(by.id(`radio_${index}`)).click();
    }

    clickOnCheckBox(index: number) {
        return element(by.css(`#checkbox_${index} .mat-checkbox-inner-container`)).click();
    }

    getCheckbox(index: number) {
        return element(by.id(`checkbox_${index}`));
    }

    typeToFreetext(text: string) {
        return element(by.id(`freetext`)).sendKeys(text);
    }

    getFreetext() {
        return element(by.id(`freetext`));
    }
    getSurveyResult() {
        return element(by.id(`surveyResult`)).getText();
    }
}
