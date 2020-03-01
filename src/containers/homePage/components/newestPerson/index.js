// @flow
import * as R from 'ramda'
import React, { useEffect } from 'react'
import styled from '@emotion/styled'

const StyledLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledText = styled.span`
  font-size: 30px;
  font-weight: 800;
  color: black;
`

type Props = {
  lastPeople: Object
}

const NewestPerson = (props: Props) => {
  const { lastPeople } = props

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
    </StyledLayout>
  )
}

export default NewestPerson
