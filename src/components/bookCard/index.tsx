import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { Button } from '../button'
import { Marginer } from '../marginer'

const CardContainer = styled.div`
  min-height: 4.3em;
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`flex items-center justify-center pt-1 pb-1 pl-2 pr-2 bg-white rounded-md  md:pt-2 md:pb-2 md:pl-9 md:pr-9`};
`
const ItemContainer = styled.div`
  ${tw`flex`};
`
const Icon = styled.span`
  ${tw`mr-1 text-xs text-red-500 fill-current md:text-base md:mr-3`}
`

const Name = styled.span`
  ${tw`text-xs text-gray-600 md:text-sm`}
`

const LineSeperator = styled.span`
  width: 2px;
  height: 45%;
  ${tw`ml-2 mr-2 bg-gray-300 md:mr-5 md:ml-5`}
`

export function BookCard() {
  return (
    <CardContainer>
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name>Pick Up Date</Name>
      </ItemContainer>
      <LineSeperator />
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name>Return Date</Name>
      </ItemContainer>
      <Marginer direction="horizontal" margin="2em" />
      <Button text="Book Your Ride" />
    </CardContainer>
  )
}
