// @flow
import { Form, Input, Button } from 'antd'
import * as R from 'ramda'
import React from 'react'
import styled from '@emotion/styled'

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
  person: Object,
  onChange: Function,
  onSubmit: Function
}

const FormAddPerson = (porps: Props) => {
  const { person, onChange, onSubmit } = porps

  return (
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

      <StyledButton type="primary" onClick={e => onSubmit(e)}>
        Submit
      </StyledButton>
    </Form>
  )
}

export default FormAddPerson
