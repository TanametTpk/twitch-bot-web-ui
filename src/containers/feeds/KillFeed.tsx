import React, { useEffect } from 'react'
import { notification } from 'antd';
import './assets/index.css';
import socket from '../../socket';
import { NotificationPlacement } from 'antd/lib/notification';

interface Props {
    
}

// ☠️
// 🗡️
// 🛡️
const KillFeed = (props: Props) => {
    useEffect(() => {
        socket.on("feed:message", (message: string, placement: string, duration: number) => {
            displayFeed(message, placement as NotificationPlacement, duration)
        })
        
        return () => {
            socket.off("feed:message")
        }
    }, [])

    const displayFeed = (message: string, placement: NotificationPlacement , duration: number) => {
        notification.open({
            key: Math.random().toString(),
            message,
            placement,
            duration,
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
