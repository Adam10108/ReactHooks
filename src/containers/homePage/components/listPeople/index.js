// @flow
import * as R from 'ramda'
import React, { useContext } from 'react'
import styled from '@emotion/styled'

import { PeopleContext } from '../../../../core/hooks/context'

const StyledLabel = styled.span`
  font-size: 20px;
  font-weight: 800;
  color: black;
`
const StyledListBox = styled.div`
  height: 160px;
  overflow-y: scroll;
`

const StyledListItem = styled.div`
  font-size: 20px;
  text-transform: capitalize;
`

const ListPeople = () => {
  const peopleContext = useContext(PeopleContext)
  const { people } = peopleContext
  return (
    <>
      <StyledLabel>List Of People</StyledLabel>
      <StyledListBox>
        {people.map((p, i) => {
          return (
            <StyledListItem key={Math.random() * 1000}>
              {i + 1} : {R.path(['firstName'], p)} {R.path(['lastName'], p)}
            </StyledListItem>
          )
        })}
      </StyledListBox>
    </>
  )
}

export default ListPeople
