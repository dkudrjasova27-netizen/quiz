// Google Apps Script for the quiz Google Sheet.
// Paste into Extensions > Apps Script in the Sheet, then Deploy > New deployment > Web app
// (Execute as: Me, Who has access: Anyone). Copy the web app URL into SHEET_URL in index.html.
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Laiks", "Vārds", "E-pasts", "Instagram", "Rezultāts", "Atbilde (kas mainītos)", "Atbildes 1-8", "Punkti"]);
  }
  var p = e.parameter || {};
  sheet.appendRow([new Date(), p.name || "", p.email || "", p.instagram || "", p.result || "", p.answer || "", p.answers || "", p.scores || ""]);
  return ContentService.createTextOutput("ok");
}
