import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { Logo } from '../logo'

const FooterContainer = styled.div`
  // min-height: 30em;
  background-color: #1d2124;
  ${tw`flex flex-col items-center justify-center min-w-full pt-10 md:pt-16`};
`
const InnerContainer = styled.div`
  ${tw`flex flex-wrap w-full h-full max-w-screen-2xl`};
`

const AboutContainer = styled.div`
  ${tw`flex flex-col `}
`

const AboutText = styled.p`
  ${tw`max-w-xs mt-2 text-sm font-light font-normal leading-5 text-white`}
`

const SectionContainer = styled.div`
  ${tw`flex flex-col w-full pl-10 pr-10 mr-2 md:w-auto md:mr-16 md:pl-3 md:pr-3 mt-7 md:mt-0`};
`

const LinksList = styled.ul`
  ${tw`flex flex-col list-none outline-none `}
`

const ListItem = styled.li`
  ${tw`mb-3 `};

  & > a {
    ${tw`text-sm text-white transition-all hover:text-gray-200`};
  }
`

const HeaderTitle = styled.h3`
  ${tw`mb-3 text-base font-bold text-white `}
`

export function Footer() {
  return (
    <FooterContainer>
      <InnerContainer>
        <AboutContainer>
          <Logo color="white" bgColor="dark" />
          <AboutText>
            Yourcar is a car renting and selling company located in many
            countries across the world which has high quality cars and top rated
            service.
          </AboutText>
        </AboutContainer>
        <SectionContainer>
          <HeaderTitle>Our Links</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="#">Home</a>
            </ListItem>
            <ListItem>
              <a href="#">About Us</a>
            </ListItem>
            <ListItem>
              <a href="#">Services</a>
            </ListItem>
            <ListItem>
              <a href="#">Models</a>
            </ListItem>
            <ListItem>
              <a href="#">Blog</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Other Links</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="#">FAQ</a>
            </ListItem>
            <ListItem>
              <a href="#">Contact Us</a>
            </ListItem>
            <ListItem>
              <a href="#">Support</a>
            </ListItem>
            <ListItem>
              <a href="#">Privacy Policy</a>
            </ListItem>
            <ListItem>
              <a href="#">Terms &amp; Conditions</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
      </InnerContainer>
    </FooterContainer>
  )
}
