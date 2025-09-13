import path from 'path';
const { google } = require('googleapis');

async function getSheetClient() {
  const keyPath = path.resolve(__dirname, 'credentials.json');
const auth = new google.auth.GoogleAuth({
  keyFile: keyPath,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});
  return google.sheets({ version: 'v4', auth: await auth.getClient() });
}
export async function getTestCaseMapping(sheetId, sheetName) {
  const sheets = await getSheetClient();
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: sheetId,
    range: `${sheetName}!A:C`, // A=TestCaseID, B=Description, C=Status
  });

  const rows = res.data.values;
  if (!rows || rows.length === 0) throw new Error('No data found in sheet');

  const mapping = {};
  rows.forEach((row, index) => {
    const tcId = row[0];
    if (tcId) {
      mapping[tcId] = `${sheetName}!H${index + 1}`;
    }
  });

  return mapping;
}

export async function updateTestStatus(sheetId, range, status) {
  const sheets = await getSheetClient();
  await sheets.spreadsheets.values.update({
    spreadsheetId: sheetId,
    range,
    valueInputOption: 'RAW',
    requestBody: {
      values: [[status]],
    },
  });
  console.log(`Updated ${range} → ${status}`);
}

module.exports = { getTestCaseMapping, updateTestStatus };
