import React from 'react'
import { Button, notification } from 'antd';
import './assets/index.css';

interface Props {
    
}

// ☠️
// 🗡️
// 🛡️
const KillFeed = (props: Props) => {
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
        <div>
            <Button onClick={() => displayFeed("A 🛡️🗡️ B")} >click me</Button>
        </div>
    )
}

export default KillFeed
