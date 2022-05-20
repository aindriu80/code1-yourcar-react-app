import { useState } from 'react'
import styled from 'styled-components'
import './App.css'
import tw from 'twin.macro'
import './App.css'
import { HomePage } from './containers/HomePage/'

const AppContainer = styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-col
  `};
`

function App() {
  return (
    <AppContainer>
      <HomePage />
    </AppContainer>
  )
}

export default App
