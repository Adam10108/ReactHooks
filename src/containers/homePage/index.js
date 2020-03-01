// @flow
import { Row, Col } from 'antd'
import React, { useReducer } from 'react'
import styled from '@emotion/styled'

import { FormAddPerson, ListPeople, NewestPerson } from './components'
import { PeopleContext } from '../../core/hooks/context'
import { peopleReducer } from '../../core/hooks/reducer'
import { ADD_PERSON } from '../../core/hooks/types'

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
  flex-direction: column;
  align-items: center;
`

const StyledText = styled.span`
  font-size: 40px;
  font-weight: 800;
  color: white;
`

const HomePage = () => {
  const initialState = {
    people: [
      { firstName: 'Jame', lastName: 'Dean' },
      { firstName: 'Rocky', lastName: 'Babo' }
    ]
  }

  const [state, dispatch] = useReducer(peopleReducer, initialState)

  const addPerson = person => {
    dispatch({
      type: ADD_PERSON,
      payload: person
    })
  }

  return (
    <PeopleContext.Provider
      value={{
        people: state.people,
        addPerson
      }}
    >
      <StyledContent>
        <StyledHeader>
          <StyledText>Learn React Hooks</StyledText>
          <StyledText>(useState , useEffect)</StyledText>
        </StyledHeader>
        <Row>
          <Col span={12}>
            <FormAddPerson />
          </Col>
          <Col span={12}>
            <ListPeople />
          </Col>
        </Row>
        <NewestPerson />
        <Row />
      </StyledContent>
    </PeopleContext.Provider>
  )
}
export default HomePage
