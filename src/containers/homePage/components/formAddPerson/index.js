// @flow
import { Form, Input, Button } from 'antd'
import React from 'react'

type Props = {
  onSubmit: Function
}

const FormAddPerson = (porps: Props) => {
  const { onSubmit } = porps

  return (
    <Form name="addPerson" onFinish={onSubmit}>
      <Form.Item
        name="firstName"
        rules={[{ required: true, message: 'Please input your First Name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="lastName"
        rules={[{ required: true, message: 'Please input your Last Name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default FormAddPerson
