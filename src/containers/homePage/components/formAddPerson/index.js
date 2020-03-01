// @flow
import { Form, Input, Button } from 'antd'
import * as R from 'ramda'
import React from 'react'
import styled from '@emotion/styled'

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

type Props = {
  person: Object,
  onChange: Function,
  onSubmit: Function
}

const FormAddPerson = (porps: Props) => {
  const { person, onChange, onSubmit } = porps
  return (
    <>
      <Form>
        <StyledLabel>First Name</StyledLabel>
        <Form.Item
          name="firstName"
          rules={[{ required: true, message: 'Please input your First Name!' }]}
        >
          <StyledInput
            name="firstName"
            value={R.path(['firstName'], person)}
            onChange={onChange}
            onPressEnter={e => onSubmit(e)}
          />
        </Form.Item>

        <StyledLabel>Last Name</StyledLabel>
        <Form.Item
          name="lastName"
          rules={[{ required: true, message: 'Please input your Last Name!' }]}
        >
          <StyledInput
            name="lastName"
            value={R.path(['lastName'], person)}
            onChange={onChange}
            onPressEnter={e => onSubmit(e)}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" onClick={e => onSubmit(e)}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default FormAddPerson
