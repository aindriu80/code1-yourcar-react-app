import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { Button } from '../button'
import { Marginer } from '../marginer'

import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

const CardContainer = styled.div`
  min-height: 4.3em;
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`flex items-center justify-center pt-1 pb-1 pl-2 pr-2 bg-white rounded-md md:pt-2 md:pb-2 md:pl-9 md:pr-9`};
`
const ItemContainer = styled.div`
  ${tw`relative flex`};
`
const Icon = styled.span`
  ${tw`mr-1 text-xs text-red-500 fill-current md:text-base md:mr-3`}
`

const Name = styled.span`
  ${tw`text-xs text-gray-600 cursor-pointer md:text-sm`}
`

const LineSeperator = styled.span`
  width: 2px;
  height: 45%;
  ${tw`ml-2 mr-2 bg-gray-300 md:mr-5 md:ml-5`}
`

const DateCalendar = styled(Calendar)`
  position: absolute;
  max-width: none;
  top: 3.5em;
  left: -2em;
`

export function BookCard() {
  const [startDate, setStartDate] = useState<Date>(new Date())
  const [isStartCalendarOpen, setStartCalendarOpen] = useState(false)

  console.log(startDate)

  const toggleOpenStartDateCalendar = () => {
    setStartCalendarOpen(!isStartCalendarOpen)
  }

  return (
    <CardContainer>
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleOpenStartDateCalendar}>Pick Up Date</Name>
        {isStartCalendarOpen && (
          <DateCalendar value={startDate} onChange={setStartDate as any} />
        )}
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
