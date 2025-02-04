import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { BASE_URI } from "../config/uri";


export const SocketContext = createContext(null);


const SocketProvider = ({ children, token }) => {
    const [socket, setSocket] = useState(null)

    useEffect(() => {
        if (token) {
            const newSocket = io(BASE_URI, {
                transports: ["websocket"],
                query: { token },
                reconnection: true
            });
            if (newSocket) {
                setSocket(newSocket)
            }
        }

        return () => {
            if (socket) {
                socket.disconnect()
            }
        }
    }, [token])

    return (
        <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
    )
}


export default SocketProvider

export const useSocket = () => useContext(SocketContext)