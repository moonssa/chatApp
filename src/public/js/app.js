const socket=io();
let roomName, nickName;

const welcome = document.getElementById("welcome");
const loginForm = document.getElementById("login-form");
const msgroom = document.getElementById("msgroom");

msgroom.hidden = true;
function showRoom() {
    welcome.hidden = true;
    msgroom.hidden = false;
    console.log("app excuted");
}
function handleLoginSubmit(event) {
    event.preventDefault();
    const inputNickname = loginForm.querySelector("#nickname");
    const inputRoomname = loginForm.querySelector("#roomname");
    roomName = inputRoomname.value;
    nickName = inputNickname.value;
   
    socket.emit("enter_room", roomName, nickName, showRoom);
    inputRoomname.value="";
    inputNickname.value="";
}

loginForm.addEventListener("submit", handleLoginSubmit);