// @flow
import { Row, Col } from 'antd'
import * as R from 'ramda'
import React, { useState } from 'react'
import styled from '@emotion/styled'

import { FormAddPerson, ListPeople } from './components'

const StyledContent = styled.div`
  height: 100vh;
  padding: 20px;
`

const StyledHeader = styled.div`
  padding: 20px 0px;
  margin: 0px 0px 20px 0px;
  background-image: linear-gradient(
    to right top,
    #051937,
    #004d7a,
    #008793,
    #00bf72,
    #a8eb12
  );

  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledText = styled.span`
  font-size: 40px;
  font-weight: 800;
  color: white;
`

const HomePage = () => {
  const [people, setPeople] = useState([
    { firstName: 'Jame', lastName: 'Dean' },
    { firstName: 'Rocky', lastName: 'Babo' }
  ])

  const [person, setPerson] = useState({ firstName: '', lastName: '' })

  const onChange = e => {
    setPerson({ ...person, [e.target.name]: e.target.value })
  }

  const onSubmit = async e => {
    e.preventDefault()
    if (
      R.isEmpty(R.path(['firstName'], person)) ||
      R.isEmpty(R.path(['lastName'], person))
    )
      return

    const newPerson = {
      firstName: R.path(['firstName'], person),
      lastName: R.path(['lastName'], person)
    }
    setPeople([...people, newPerson])
  }

  return (
    <StyledContent>
      <StyledHeader>
        <StyledText>Learn React Hooks</StyledText>
      </StyledHeader>
      <Row>
        <Col span={12}>
          <FormAddPerson
            person={person}
            onChange={onChange}
            onSubmit={onSubmit}
          />
        </Col>
        <Col span={12}>
          <ListPeople people={people} />
        </Col>
      </Row>
    </StyledContent>
  )
}
export default HomePage
