import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { SCREENS } from '../../components/responsive'

import JeepImg from '../../assets/images/jeep.png'

const AboutUsContainer = styled.div`
  ${tw`flex flex-wrap items-center w-full pt-4 pb-4 pr-4 bg-white 2xl:justify-center pl-7 md:pl-0 md:pr-0`}
`

const CarContainer = styled.div`
  width: auto;
  height: 15em;
  margin-left: -50px;

  img {
    width: auto;
    height: 100%;
  }

  @media (min-width: ${SCREENS.md}) {
    height: 28em;
  }

  @media (min-width: ${SCREENS.lg}) {
    height: 30em;
  }

  @media (min-width: ${SCREENS['2xl']}) {
    height: 35em;
    margin-left: 0;
  }
`

const InfoContainer = styled.div`
  ${tw`flex flex-col md:w-1/2 md:ml-6 2xl:ml-16`}
`

const Title = styled.h1`
  ${tw`text-2xl font-extrabold text-black md:text-5xl md:font-black md:leading-normal`}
`
const InfoText = styled.p`
  ${tw`mt-4 text-sm font-normal text-gray-500 md:max-w-2xl md:text-base`}
`

export function AboutUs() {
  return (
    <AboutUsContainer>
      <CarContainer>
        <img src={JeepImg} />
      </CarContainer>
      <InfoContainer>
        <Title>Feel The Best Experience With Our Rental Deals</Title>
        <InfoText>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
          doloribus rerum aut ex cum, consequuntur, soluta recusandae
          consequatur illum praesentium asperiores. Necessitatibus illo
          dignissimos doloremque enim delectus, blanditiis nemo repellat!
          Reprehenderit quasi beatae numquam dignissimos suscipit minima! Enim
          iure exercitationem quibusdam amet repellendus quo quasi accusantium
          dicta qui, dolorem tempore quam, possimus ut quidem. Dolorum
          repellendus qui esse ipsam eum! Corrupti laboriosam error, dicta
          quidem quasi, unde non distinctio tenetur beatae, inventore excepturi.
          Ratione iste, quas odit, dolore quam voluptates ullam magnam
          repellendus ad veniam exercitationem inventore, error asperiores nemo.
          Omnis nihil aliquid praesentium tenetur nisi fugiat tempora odit eius
          voluptas nemo perferendis recusandae maxime impedit adipisci, aliquam
          totam deleniti necessitatibus eveniet qui maiores earum? Sunt quis
          expedita voluptatem quaerat.
        </InfoText>
      </InfoContainer>
    </AboutUsContainer>
  )
}
