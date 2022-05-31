import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { Logo } from '../logo'

const FooterContainer = styled.div`
  min-height: 20em;
  background-color: rgb(31 42 76)
    ${tw`flex flex-wrap min-w-full pt-1 bg-blue-900 pt-7`};
`

const AboutContainer = styled.div`
  ${tw`flex flex-col `}
`

export function Footer() {
  return (
    <FooterContainer>
      <AboutContainer>
        <Logo color="white" />
      </AboutContainer>
    </FooterContainer>
  )
}
