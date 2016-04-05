(function (window) {  
  "use strict"; 
    
  function HangoutDemo() {  
    console.log("Starting..."); 
    gapi.hangout.onApiReady.add(this.onApiReady.bind(this));
  } 
    
  HangoutDemo.prototype.onApiReady = function (event) { 
    if (event.isApiReady === true) {  
      console.log("API Ready!"); 
      console.log(gapi.hangout.getHangoutUrl());
      var hangout_url = gapi.hangout.getHangoutUrl();

      var http = new XMLHttpRequest();
      // var url = "https://shrouded-stream-84278.herokuapp.com/api/hangouts";
      var url = "https://josh-dev.herokuapp.com/api/hangouts"
      var params = "url=" + hangout_url;
      http.open("POST", url, true);

      http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      http.send(params);
      console.log(url)
    } 
  };  
    
  var hangoutDemo = new HangoutDemo();  
}(window));

