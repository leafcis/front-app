import React, { useState } from 'react'
import loginIcon from 'assets/images/login-icon.png'
import './login.scss'

const Login = () => {
  const [school, setSchool] = useState('학교')
  const [inputs, setInputs] = useState({
    grade: '',
    sclass: '',
    number: '',
    name: '',
  })

  const { grade, sclass, number, name } = inputs

  const selectOnChange = (e) => {
    setSchool(e.target.value)
  }

  const onChange = (e) => {
    const { value, name } = e.target
    setInputs({
      ...inputs,
      [name]: value,
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    alert(school) //test
    setInputs({
      grade: '',
      sclass: '',
      number: '',
      name: '',
    })
  }

  return (
    <div className={'loginSection'}>
      <div>
        <p className={'loginTitle'}>
          <a>로그인</a> 정보를 입력하세요
        </p>
      </div>
      <form onSubmit={onSubmit}>
        <div className={'divSelect'}>
          <div className={'schoolSelect'}>
            <select defaultValue={'default'} name="schoolSelect" onChange={selectOnChange}>
              <option value="default" disabled>학교</option>
              <option value="deaduk">대덕SW마이스터고</option>
              <option value="deagu">대구SW마이스터고</option>
              <option value="gwangju"> 광주SW마이스터고</option>
            </select>
          </div>
          <div>
            <input name="grade" type="text" value={grade} onChange={onChange} placeholder="학년" />
            <input name="sclass" type="text" value={sclass} onChange={onChange} placeholder="반" />
            <input name="number" type="text" value={number} onChange={onChange} placeholder="번호" />
            <input name="name" type="text" value={name} onChange={onChange} placeholder="이름" />
          </div>
        </div>
        <div className={'submitArea'}>
          <button className={'loginButton'}>
            <img src={loginIcon} alt="loginIcon" />
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login
