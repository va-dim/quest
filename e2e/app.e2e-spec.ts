import { AppPage } from "./app.po";
import { browser } from "protractor";

describe("quest App", () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
        browser.driver.manage().window().setSize(1280, 1024);
    });

    it("should display title", () => {
        page.navigateTo();
        expect(page.getQuestionarieTitle()).toEqual("Superhero questionarie");
    });

    it("should display description", () => {
        page.navigateTo();
        expect(page.getDescription()).toEqual("Welcome hero! Help us to create an ultimate classificaton of superheros in Frankfurt area.");
    });

    it("should navigate to first question", () => {
        page.clickOnStartButton();
        browser.waitForAngular();
        expect(page.getQuestion()).toEqual("1. What color of pants do you prefer");
    });

    it("should show mandatory", () => {
        page.clickOnNextButton()
            .then(() => {
                expect(page.getMandatoryLabel()).toBeDefined();
            });
    });

    it("should pass to next page when input is there", () => {
        page.clickOnRadioButton(0)
            .then(() => {
                page.clickOnNextButton();
                expect(page.getQuestion()).toEqual("2. Can you fly?");
            });

    });

    it("shoud select a checkbox", () => {
        page.clickOnRadioButton(1)
            .then(() => page.clickOnNextButton())
            .then(() => browser.sleep(1000))
            .then(() => page.clickOnCheckBox(0))
            .then(() => browser.sleep(1000))
            .then(() => {
                expect(page.getCheckbox(0).getAttribute("class")).toMatch("mat-checkbox-checked");
            });
    });

    it("shoud type in freetext", () => {
        page.clickOnNextButton()
            .then(() => page.typeToFreetext("test"))
            .then(() => browser.sleep(1000))
            .then(() => {
                expect(page.getFreetext().getAttribute("value")).toEqual("test");
            });
    });

    it("shoud end questionarie successfully", () => {
        page.clickOnNextButton()
            .then(() => {
                expect(page.getDescription()).toEqual("Thank you for you participation hero! You just saved the world, yet again.");
            });
    });

    it("result to match clicks", () => {
        // better grep from console
        expect(page.getSurveyResult()).toEqual("{\"surveyId\":\"mocksurvey\",\"answers\":[{\"questionIndex\":0,\"answerIndexes\":[0]},{\"questionIndex\":1,\"answerIndexes\":[1]},{\"questionIndex\":2,\"answerIndexes\":[0]},{\"questionIndex\":3,\"answerFreetext\":\"test\"}]}");
    });

});
