// ==UserScript==
// @name         ProtonMail - Clear Inbox
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  This script will delete all messages in the inbox, one page at a time. Please make sure you clear the Inbox of any messages you would like to keep first. Enable the script, refresh ProtonMail inbox, wait for all messages in inbox to be deleted (if stuck, refresh), DISABLE script when done deleting.
// @author       Cody Prior
// @match        https://mail.protonmail.com/u/0/inbox
// @icon         https://www.google.com/s2/favicons?sz=64&domain=protonmail.com
// @grant        none
// ==/UserScript==
// Modified from: https://webapps.stackexchange.com/a/163035

(function() {
    'use strict';
    const INTERVAL = 2000;
    function ClearInbox() {
        document.querySelector("#idSelectAll").click();
        document.querySelector("button[data-testid='toolbar:movetotrash']").click();
        document.querySelector("button[data-testid='toolbar:next-page']").click();
    }
    setInterval(ClearInbox, INTERVAL);
})();