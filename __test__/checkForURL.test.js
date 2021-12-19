import { checkForURL } from "../src/client/js/textChecker";

describe("Testing the URL validation ", () => {
    test("Testing the checkForURL() function", () => {
        expect(checkForURL).toBeDefined();
    });

    test("checkForURL return true if the url is valid", () => {
        expect(checkForURL("https://github.com/microsoft/vscode/issues/136599")).toBeTruthy();
    });

    test("checkForURL return true if the url is invalid", () => {
        expect(checkForURL("text")).toBeFalsy();
    });
});