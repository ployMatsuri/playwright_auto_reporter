# Playwright Test with Google Sheets Integration

This project uses [Playwright](https://playwright.dev/)
 to run automated tests and automatically update the PASS/FAIL status of each test case in Google Sheets.

## How to Use

### 1. Clone the Project and Install Dependencies

```bash
git clone https://github.com/ployMatsuri/playwright_auto_reporter.git
cd playwright_auto_reporter
npm install
npx playwright install
npm i googleapis
```

### 2. Download the ```credentials.json``` File
- The ```credentials.json``` file for connecting to Google Sheets should be placed in the folder: ```src\tests\pages\```
- To get the file, you can contact me directly (do not share it publicly).
- Alternatively, you can create your own Service Account from [Google Cloud Console](https://console.cloud.google.com/) and download your own ```credentials.json``` file.

### 3. Share the Google Sheet with the Service Account
1. Open the Google Sheet you want to use for storing test results.
2. Click the Share button.
3. Enter the Service Account email (found in the ```credentials.json``` file under the key ```"client_email"```).
4. Set the permission to Editor.

### 4. Configure Variables
In the ```googleSheetHelper.js``` file, set the following values:
```
const SHEET_ID = 'YOUR_SHEET_ID'; // ID จาก URL ของ Google Sheet
const SHEET_NAME = 'Sheet1';      // ชื่อแท็บ (Tab) ใน Google Sheet
```
Example of where to find the SHEET_ID
```
https://docs.google.com/spreadsheets/d/THIS_IS_THE_SHEET_ID/edit#gid=0
```

### 5. Run the Tests
```
npx playwright test
```
Once the tests are completed, the status of each test case will be automatically updated in the connected Google Sheet.

#### Credit: [Automate Playwright Test Reports to Google Sheets]([https://playwright.dev/](https://youtu.be/wBf4vx03Tw4?si=HOImF2cYIR1hadW8))

#### Example Results: [SwagLabs](https://github.com/user-attachments/assets/116b39e1-054e-4e19-b951-b114d2ffb2d0)


