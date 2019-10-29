function process_chat(){
    user_msg = document.getElementById("user_chat_box").value
    
    document.getElementById("user_chat_box").value = "";
    
    var user_msg = {
      "sender": "user",
      "msg": user_msg,
      "time": get_message_timestamp()
    };
    
    update_chat_display(user_msg)

    var fake_response_msg = {
      "sender": "bot",
      "msg": "I dont know what to do.",
      "time": get_message_timestamp()
    };
    
    update_chat_display(fake_response_msg)
}

function get_message_timestamp(){
  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  return time
}

function update_chat_display(msg){
  
  var bubble = document.createElement("div");
  var timestamp = document.createElement("div");
  var message_wrap = document.createElement("div");
  timestamp.classList.add('bubble_timestamp');
  timestamp.innerText = msg["time"];
  message_wrap.classList.add('bubble_message');
  message_wrap.innerText = msg["msg"];

  bubble.classList.add('chat_bubble');
  if (msg["sender"] == "user"){
    bubble.classList.add('user_bubble');
  } else {
    bubble.classList.add('bot_bubble');
  }
  bubble.appendChild(message_wrap);
  bubble.appendChild(timestamp);
  
  document.getElementById("chat_display").appendChild(bubble);  
  window.scrollTo(0,document.body.scrollHeight);
}


// Execute a function when the user releases a key on the keyboard
document.getElementById("user_chat_box").addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    process_chat();
  }
});



document.getElementById("refresh_page").addEventListener("click", function(){
  console.log("Reloading page...")
  location.reload();
}); 