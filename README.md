# tampermonkey-protonmail-clear-inbox

## Description
A Tampermonkey script that will  delete all messages in ProtonMail's inbox, one page at a time.

Modified from: https://webapps.stackexchange.com/a/163035

## Requirements
- Firefox: https://www.mozilla.org/en-US/firefox/new/
- Tampermonkey: https://www.tampermonkey.net/
- ProtonMail: https://protonmail.com/

## Warning
Please make sure you clear the Inbox of any messages you would like to keep first, otherwise you'll be sorting through the trash. If the script gets stuck, refresh the page. You may also try increasing the INTERVAL in the script.

## Instructions
1. Install Firefox
2. Install Tampermonkey browser extension for Firefox
3. In Firefox, in your Extensions toolbar, click 'Tampermonkey' -> 'Dashboard'
4. Click and drag 'ProtonMail - Clear Inbox.user.js' into the Tampermonkey Dashboard
5. Click the 'Install' button to install the script into the Tampermonkey browser extension
6. Open 'https://mail.protonmail.com/u/0/inbox' to access your ProtonMail inbox
7. Enable the 'ProtonMail - Clear Inbox' script
8. Allow the script to run until your inbox is cleared
9. Disable the 'ProtonMail - Clear Inbox' script to ensure wanted emails are not accidentally deleted.
