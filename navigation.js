// self executing function here
(function() {
  // document.getElementById("sites-chrome-sidebar-left").innerHTML='<object type="text/html" data="navigation.html" ></object>';
   // your page initialization code here
   // the DOM will be available here
  var due = new Date();
  due.setFullYear(2015, 4, 15);
  var event_date = new Date();
  event_date.setFullYear(2015, 11, 13);
  var date = new Date();

  var days = 1000 * 60 * 60 * 24;
  var dueDays_paper = Math.floor((due.getTime()-date.getTime())/days);
  var dueDays_event = Math.floor((event_date.getTime()-date.getTime())/days);

  if (dueDays_paper >=0) {
    document.getElementById("countdown_paper_dig").innerHTML = dueDays_paper;
    if (dueDays_paper <=1) {
      document.getElementById("countdown_paper_text").innerHTML = "day until";
    }
  }

  if (dueDays_event >=0) {
    document.getElementById("countdown_event_dig").innerHTML = dueDays_event;
    if (dueDays_event <=1) {
      document.getElementById("countdown_event_text").innerHTML = "day until";
    }
  }
})();