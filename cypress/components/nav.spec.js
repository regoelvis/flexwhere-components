import React from 'react'
import {mount} from '@cypress/react'
import Nav from '../../src/components/navbar/Nav-mobile'
import '../../src/components/navbar/Navbar.css'
import '../../src/App.css'

describe('Test Navbar component', () => {
    it('test', () => {
      mount( <Nav /> )
    })
  })