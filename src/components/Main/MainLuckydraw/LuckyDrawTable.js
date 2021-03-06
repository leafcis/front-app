import React, { useState } from 'react'
import socketio from 'socket.io-client'
import LuckyDrawItem from './LuckyDrawItem'
import { DEV_SERVER, PROD_SERVER } from 'config/config.json'
import './LuckyDrawTable.scss'

const server = process.env.NODE_ENV === 'production' ? PROD_SERVER : DEV_SERVER

const LuckyDrawTable = () => {
  const [data, setData] = useState(Array(10).fill({}))
  const socket = socketio.connect(
    server,
    {
      event: 1 - 10,
    },
    {
      extraHeaders: {
        'x-access-token': sessionStorage.getItem('adminToken'),
      },
    }
  )
  socket.on('winner', (data) => {
    console.log(data)
    setData(data)
  })

  return (
    <div className="table">
      <div className="table__flist">
        <div />
        <div>
          <span>학교</span>
        </div>
        <div>
          <span>학년</span>
        </div>
        <div>
          <span>반</span>
        </div>
        <div>
          <span>번호</span>
        </div>
      </div>
      {data.map((data, ix) => {
        return <LuckyDrawItem ix={ix} schoolName={data.schoolName} grade={data.grade} class={data.class} number={data.number} key={ix} />
      })}
    </div>
  )
}

export default LuckyDrawTable
