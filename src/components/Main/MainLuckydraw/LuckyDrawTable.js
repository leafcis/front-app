import React, { useState, useEffect } from 'react'
import socketio from 'socket.io-client'
import LuckyDrawItem from './LuckyDrawItem'
import { DEV_SERVER, PROD_SERVER } from 'config/config.json'
import { getWinnerList } from 'utils/apis'

import './LuckyDrawTable.scss'

const server = process.env.NODE_ENV === 'production' ? PROD_SERVER : DEV_SERVER

const LuckyDrawTable = () => {
  const [data, setData] = useState(Array(10).fill({}))
  const [curWinner, setCurWinner] = useState(0)
  const socket = socketio(server)

  useEffect(() => {
    getWinnerList().then((data) => {
      setData([...data])
    })

    socket.on('winner', (info) => {
      setCurWinner(info.lucky_flag)
      setData((prev) => [
        ...prev.slice(0, info.lucky_flag - 1),
        {
          school_name: info.school_name,
          grade: info.grade,
          class: info.class,
          number: info.number,
          student_name: info.student_name,
        },
        ...prev.slice(info.lucky_flag),
      ])
    })

    return () => socket.disconnect()
  }, [])

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
        return (
          <LuckyDrawItem
            curWinner={curWinner}
            ix={ix}
            schoolName={data.school_name}
            grade={data.grade}
            class={data.class}
            number={data.number}
            key={ix}
          />
        )
      })}
    </div>
  )
}

export default LuckyDrawTable
