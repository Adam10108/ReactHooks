// @flow
import * as R from 'ramda'
import React, { useEffect, useContext } from 'react'
import styled from '@emotion/styled'

import { PeopleContext } from '../../../../core/hooks/context'

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledText = styled.span`
  font-size: 30px;
  font-weight: 800;
  color: black;
`

const NewestPerson = () => {
  const peopleContext = useContext(PeopleContext)
  const { people } = peopleContext
  const lastPeople = people[peopleContext.people.length - 1]
  const countPeople = people.length

  useEffect(() => {
    const newestPersonName = `Newest Person : ${R.path(
      ['firstName'],
      lastPeople
    )}
        ${R.path(['lastName'], lastPeople)}`
    document.title = newestPersonName
    document.getElementById('newestPerson').innerHTML = newestPersonName
    // eslint-disable-next-line no-console
    console.log('useEffect')
    return () => {
      // eslint-disable-next-line no-console
      console.log('Unmounted')
    }
  }, [lastPeople])

  return (
    <StyledLayout>
      <StyledText id="newestPerson" />
      <StyledText>Count : {countPeople}</StyledText>
    </StyledLayout>
  )
}

export default NewestPerson
