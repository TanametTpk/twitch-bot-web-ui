import { useEffect, useState } from 'react'
import { Progress } from 'antd'
import socket from '../../socket'
import './assets/index.css'

interface Props {

}

interface BossInfo {
    hp: number
    max_hp: number
    level: number
    image: string
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
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <div
                className={"boss " + (boss ? "" : "hide")}
                style={{
                    height: '95vh',
                    width: "100vw",
                }}
            >
                <img
                    style={{
                        width: '100%'
                    }}
                    src={boss?.image}
                />
                <Progress
                    percent={(boss?.hp || 1) / (boss?.max_hp || 1) * 100}
                    strokeWidth={30}
                    status="exception"
                    showInfo={false}
                />
            </div>
        </div>
    )
}

export default BossHeath
