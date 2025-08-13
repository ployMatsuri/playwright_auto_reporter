# Playwright Test with Google Sheets Integration

โปรเจกต์นี้ใช้ [Playwright](https://playwright.dev/) รัน automated tests พร้อมอัปเดตสถานะ PASS/FAIL ของแต่ละ Test Case ลงใน Google Sheets อัตโนมัติ

## ขั้นตอนใช้งาน

### 1. Clone โปรเจกต์และติดตั้ง Dependencies

```bash
git clone https://github.com/ployMatsuri/playwright_auto_reporter.git
cd playwright_auto_reporter
npm install
npx playwright install
npm i googleapis
```

### 2. ดาวน์โหลดไฟล์ credentials.json
- ไฟล์ credentials.json สำหรับเชื่อม Google Sheets จะถูกเก็บไว้ในโฟเดอร์ ```src\tests\pages\```
- หากต้องการไฟล์สามารถติดต่อผ่านช่องทางส่วนตัว (ห้ามแชร์สาธารณะ)
- หรือสร้าง Service Account จาก [Google Cloud Console](https://console.cloud.google.com/) เพื่อดาวน์โหลดไฟล์ credentials.json ของตัวเอง

### 3. แชร์ Google Sheet ให้ Service Account
1. เปิด Google Sheet ที่ต้องการใช้เก็บผลลัพธ์
2. กดปุ่ม Share
3. ใส่อีเมลของ Service Account (อยู่ในไฟล์ credentials.json ที่ key "client_email")
4. ตั้งสิทธิ์เป็น Editor

### 4. ตั้งค่า Variables
ในไฟล์ ```googleSheetHelper.js``` ให้กำหนด
```
const SHEET_ID = 'YOUR_SHEET_ID'; // ID จาก URL ของ Google Sheet
const SHEET_NAME = 'Sheet1';      // ชื่อแท็บ (Tab) ใน Google Sheet
```
ตัวอย่างการหา SHEET_ID
```
https://docs.google.com/spreadsheets/d/THIS_IS_THE_SHEET_ID/edit#gid=0
```

### 5. รันเทส
```
npx playwright test
```
เมื่อรันเสร็จ สถานะของแต่ละ Test Case จะถูกอัปเดตใน Google Sheet อัตโนมัติ


