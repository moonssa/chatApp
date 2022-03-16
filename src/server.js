import express from "express";
import http from "http";
import SocketIO from "socket.io";

const app=express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");

app.use("/public", express.static(__dirname+ "/public"));
app.get("/", (req,res) => res.render("home"));

//const httpServer = http.createServer(app);

const httpServer=http.createServer(app);
const wsServer = SocketIO(httpServer);

const handleListen=()=>{
    console.log("listening on http://localhost:5000");
}

wsServer.on("connection", (socket) => {

    socket.on("enter_room",(roomName, nickName, done)=> {
        socket.join(roomName);
        socket["nickname"] = nickName;
        console.log(socket.rooms);
        console.log(roomName, nickName);
        done();
    });
});

httpServer.listen(5000, handleListen);