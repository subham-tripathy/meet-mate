"use client"

import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

function page() {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        // Listen for messages from the server
        socket.on('chat message', (msg) => {
            setMessages(prevMessages => [...prevMessages, msg]);
        });

        return () => {
            // Clean up socket connection when component unmounts
            socket.disconnect();
        };
    }, []);

    const sendMessage = () => {
        // Emit a message to the server
        socket.emit('chat message', inputValue);

        // Clear input field
        setInputValue('');
    };

    return (
        <div>
            <ul>
                {messages.map((message, index) => (
                    <li key={index}>{message}</li>
                ))}
            </ul>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className='text-black'
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
}

export default page;
