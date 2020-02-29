// @flow
import { Row, Col } from 'antd'
import React, { useState } from 'react'
import styled from '@emotion/styled'

const HomePage = () => {
  const [people, setPeople] = useState([
    { firstName: 'Jame', lastName: 'Dean' },
    { firstName: 'Rocky', lastName: 'Babo' }
  ])

  const [person, setPerson] = useState({})

  return (
    <div>
      <div>Learn React Hooks</div>
    </div>
  )
}
export default HomePage
