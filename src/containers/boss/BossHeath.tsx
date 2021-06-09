import React, { useEffect, useState } from 'react'
import { Progress } from 'antd'
import bossImage from './assets/fire-boss.svg'
import socket from '../../socket'

interface Props {

}

interface BossInfo {
    hp: number
    max_hp: number
    level: number
}

const BossHeath = (props: Props) => {
    const [boss, setBoss] = useState<BossInfo | undefined>();

    useEffect(() => {
        socket.on("boss:update", (info: BossInfo) => {
            setBoss(info)
        })

        socket.on("boss:eliminated", () => {
            setBoss(undefined)
        })

        return () => {
            socket.off("boss:update")
            socket.off("boss:eliminated")
        }
    }, [])

    return (
        <>
            {
                boss && <div
                    style={{
                        width: '25vw'
                    }}
                >
                    <img
                        style={{
                            width: '100%'
                        }}
                        src={bossImage}
                    />
                    <Progress
                        percent={70}
                        size="small"
                        status="exception"
                        showInfo={false}
                    />
                </div>
            }
        </>
    )
}

export default BossHeath
