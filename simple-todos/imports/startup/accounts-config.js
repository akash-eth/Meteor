import {Accounts} from "meteor/accounts-base";

Accounts.ui.config({
    passwordSignupFields: "USER_NAME_ONLY",
});