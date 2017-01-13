function sendReport(e) {
  var rs = '';

  var name = e.namedValues['お名前'];
  var email = e.namedValues['メールアドレス'];
  var attend = e.namedValues['参加？'];

  rs = "name: "+name+"\nemail: "+email+"\nattend: "+attend;

  MailApp.sendEmail("@gmail.com", "回答がありました", rs);
}
