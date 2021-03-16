import React from 'react'
import {mount} from '@cypress/react'
import Service from '../../src/components/services/Services'
import '../../src/components/services/Services.css'
import '../../src/App.css'

describe('Test card component', () => {
    it('test', () => {
      mount( <Service /> )

    })
  })