// @flow
import { Form, Input, Button } from 'antd'
import * as R from 'ramda'
import React, { useState } from 'react'
import styled from '@emotion/styled'

const StyledContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const StyledFooter = styled(StyledContent)`
  justify-content: flex-end;
`

const StyledInputBox = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledLabel = styled.span`
  font-size: 20px;
  font-weight: 800;
  color: black;
`

const StyledInput = styled(Input)`
  width: 500px;
  color: black;

  font-size: 20px;
  border-radius: 10px;
`
const StyledButton = styled(Button)`
  font-weight: 500;
  border-radius: 7px;
  margin: 15px 0px;

  &:hover {
    background-image: linear-gradient(
      to right top,
      #051937,
      #004d7a,
      #008793,
      #00bf72,
      #a8eb12
    );
  }
`

type Props = {
  addPerson: Function
}

const FormAddPerson = (porps: Props) => {
  const { addPerson } = porps

  const [person, setPerson] = useState({ firstName: '', lastName: '' })

  const onChange = e => {
    setPerson({ ...person, [e.target.name]: e.target.value })
  }

  const onSubmit = e => {
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
    addPerson(newPerson)
    setPerson({ firstName: '', lastName: '' })
  }

  return (
    <StyledContent>
      <Form>
        <StyledInputBox>
          <StyledLabel>First Name</StyledLabel>
          <StyledInput
            name="firstName"
            value={R.path(['firstName'], person)}
            onChange={e => onChange(e)}
            onPressEnter={onSubmit}
          />
        </StyledInputBox>

        <StyledInputBox>
          <StyledLabel>Last Name</StyledLabel>
          <StyledInput
            name="lastName"
            value={R.path(['lastName'], person)}
            onChange={e => onChange(e)}
            onPressEnter={onSubmit}
          />
        </StyledInputBox>
        <StyledFooter>
          <StyledButton type="primary" onClick={e => onSubmit(e)}>
            Submit
          </StyledButton>
        </StyledFooter>
      </Form>
    </StyledContent>
  )
}

export default FormAddPerson
