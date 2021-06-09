import { Progress } from 'antd'
import React from 'react'
import boss from './assets/fire-boss.svg'

interface Props {

}

const BossHeath = (props: Props) => {
    return (
        <div
            style={{
                width: '25vw'
            }}
        >
            <img
                style={{
                    width: '100%'
                }}
                src={boss}
            />
            <Progress
                percent={70}
                size="small"
                status="exception"
                showInfo={false}
            />
        </div>
    )
}

export default BossHeath
