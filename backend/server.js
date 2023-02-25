let express = require('express');
let app = express();

let http = require('http');
let server = http.Server(app);

let socketIO = require('socket.io');
let io = socketIO(server);

const port = process.env.PORT || 3000;

let rooms=[];

io.on('connection', (socket) => {

    console.clear();
    console.log("Connected");

    // socket.on('message', (data) => {
    //     io.in(data.room).emit('new message', {user: data.user, message: data.message});
    // });


    socket.on('create-room', (data) => {
        let object ={"roomId":data.roomId,"Admin":data.adminId,"Users":{}};
        rooms[data.roomId]=object;
        socket.emit('room-created',data);
    });

    socket.on('join', (data) => {

        let sendData={"status":null,"message":null,"name":null};


        console.log(rooms[data.roomId]);
        console.log(data.roomId)

        if(rooms[data.roomId]!=undefined)
        {
        
        rooms[data.roomId].Users[data.id]={"userName":data.name,"id":data.id};
 

        socket.join(data.roomId);
        
        sendData.name=data.name;
        sendData.status=true;
        sendData.message="Room Joined Sucessfully";

        let adminId=rooms[data.roomId].Admin;

        console.log(rooms[data.roomId].Users)
        
        socket.broadcast.to(adminId).emit('userJoined',{"users":rooms[data.roomId].Users});

        }
        else
        {
            sendData.status=false;
            sendData.message="No Room With This Id Exist!..\nPlease Try Again!...";

        }

        socket.emit("joinedRoom",sendData);


    });
    
    
});

server.listen(port, () => {
    console.log(`started on port: ${port}`);
});
