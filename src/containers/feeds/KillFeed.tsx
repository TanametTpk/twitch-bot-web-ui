import React, { useEffect } from 'react'
import { notification } from 'antd';
import './assets/index.css';
import socket from '../../socket';

interface Props {
    
}

// ☠️
// 🗡️
// 🛡️
const KillFeed = (props: Props) => {
    useEffect(() => {
        socket.on("feed", (message: string) => {
            displayFeed(message)
        })
        
        return () => {
            socket.off("feed")
        }
    }, [])

    const displayFeed = (message: string) => {
        notification.open({
            key: Math.random().toString(),
            message,
            placement: "topLeft",
            duration: 1.5,
            style: {
                borderRadius: '6px',
                width: "100%"
            },
            closeIcon: () => {
                return <div />
            }
        });
    }

    return (
        <div />
    )
}

export default KillFeed
