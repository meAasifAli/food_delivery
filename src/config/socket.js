import { io } from "socket.io-client";
import { BASE_URI } from "./uri";

let socket = null;

export const initialiseSocket = (token) => {
    if (!socket) {
        socket = io(BASE_URI, {
            transports: ["websocket"],
            query: { token },
        });
    }
    return socket;
};
