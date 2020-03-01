// @flow
import * as R from 'ramda'
import React from 'react'
import styled from '@emotion/styled'

const StyledLabel = styled.span`
  font-size: 20px;
  font-weight: 800;
  color: black;
`
const StyledListItem = styled.div`
  font-size: 20px;
  text-transform: capitalize;
`

type Props = {
  people: []
}

const ListPeople = (porps: Props) => {
  const { people } = porps
  return (
    <>
      <StyledLabel>List Of People</StyledLabel>
      <div>
        {people.map((p, i) => {
          return (
            <StyledListItem key={Math.random() * 1000}>
              {i + 1} : {R.path(['firstName'], p)} {R.path(['lastName'], p)}
            </StyledListItem>
          )
        })}
      </div>
    </>
  )
}

export default ListPeople
