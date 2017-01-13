function initSheet() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var names = ["taguchi", "fkoji", "dotinstall"];

  sheet.clear();
  for (var i = 1; i <= 20; i++) {
    sheet.getRange(i, 1).setValue(names[Math.floor(Math.random() * names.length)]);
    sheet.getRange(i, 2).setValue(Math.floor(Math.random() * 101));

  }

}
