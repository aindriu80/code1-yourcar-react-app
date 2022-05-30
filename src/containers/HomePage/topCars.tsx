import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { Car } from '../../components/car'
import { ICar } from '../../typings/car'
import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import { useMediaQuery } from 'react-responsive'
import { SCREENS } from '../../components/responsive'

const TopCarsContainer = styled.div`
  ${tw`flex flex-col items-center justify-center w-full max-w-screen-lg pl-4 pr-4 mb-10 md:pl-0 md:pr-0`};
`
const Title = styled.h2`
  ${tw`text-3xl font-black text-black lg:text-4xl`}
`

const CarsContainer = styled.div`
  ${tw`flex flex-wrap justify-center w-full mt-7 md:mt-10`}
`

export function TopCars() {
  const [current, setCurrent] = useState(0)
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm })
  const testCar: ICar = {
    name: 'Audi S3 Car',
    milage: '10k',
    thumbnailSrc:
      'https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg',
    dailyPrice: 70,
    monthlyPrice: 1600,
    gearType: 'Auto',
    gas: 'Petrol',
  }

  const testCar2: ICar = {
    name: 'HONDA cITY 5 Seater Car',
    milage: '20k',
    thumbnailSrc:
      'https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg',
    dailyPrice: 50,
    monthlyPrice: 1500,
    gearType: 'Auto',
    gas: 'Petrol',
  }

  const cars = [
    <Car {...testCar2} />,
    <Car {...testCar} />,
    <Car {...testCar2} />,
    <Car {...testCar} />,
    <Car {...testCar2} />,
  ]

  const numberOfDots = isMobile ? cars.length : Math.ceil(cars.length / 3)

  return (
    <TopCarsContainer>
      <Title>Explore Our Top Deals</Title>
      <CarsContainer>
        <Carousel
          value={current}
          onChange={setCurrent}
          slides={cars}
          plugins={[
            'clickToChange',
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 3,
              },
            },
          ]}
          breakpoints={{
            640: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1,
                  },
                },
              ],
            },
            900: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2,
                  },
                },
              ],
            },
          }}
        />
        <Dots
          value={current}
          onChange={setCurrent}
          number={numberOfDots}></Dots>
      </CarsContainer>
    </TopCarsContainer>
  )
}
