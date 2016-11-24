  function login() {
    // Submit on enter key, dis-allowing blank messages
//    if (event.keyCode === 13 && inputBox.value) {
//      // Retrieve the context from the previous server response
//      var context;
//      var latestResponse = Api.getResponsePayload();
//      if (latestResponse) {
//        context = latestResponse.context;
//      }

      // Send the user message
      //alert("in login");
      var username = document.getElementById("email").value;
      var password = document.getElementById("password").value;
      Api.sendLoginRequest(username, password, '/api/message/login', function(res, err) {
//      	alert("err: "+err);
//      	alert("res: "+res);
      	if (!err){
      		if (res == "Successfully authenticated") {
      			window.location = '../conversation.html';
      		}
      	}
      });

      // Clear input box for further messages
//      inputBox.value = '';
//      Common.fireEvent(inputBox, 'input');
    //}
  }