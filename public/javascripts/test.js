var socket = io();
console.log('socket', socket);
console.log('testjs loaded');

$('.send-btn').on('click', function(e) {
  var userMessageEle = $('#userInput');
  var message = userMessageEle.val();
  console.log('message', message);
  sendChatMessage(message);
  appendMessageToChatTextArea(message);
  userMessageEle.val('');
});


function sendChatMessage(msg) {
  socket.emit('user input', msg);
}

function appendMessageToChatTextArea(message) {

  var messageHTML = `<p>${message}</p>`;

  $('.chat-text-area-block').append(messageHTML);

}

socket.on('broadcast msg', function(msg) {
  console.log('broadcasted msg', msg);
});