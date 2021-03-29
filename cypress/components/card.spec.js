import React from 'react'
import {mount} from '@cypress/react'
import Service from '../../src/components/services/Service'
import '../../src/components/services/Services.css'
import '../../src/App.css'

import desk from '../../src/assets/images/ICON_Desk booking_2.svg'

describe('Test card component', () => {
  const data = {
    img: desk,
    title: "Software",
    description: "hello world what is this world"
  }

    it('Test the service with all valid data', () => {
      mount( <Service img={data.img} title={data.title} description={data.description} /> );
      cy.contains('Software');
      cy.contains('hello world');
    });

    it('Test the service with no image', () => {
      mount( <Service title={data.title} description={data.description} /> );
      cy.get('<img>').should('not.exist');
    });

    it('Test the service with no title', () => {
      mount( <Service img={data.img} description={data.description} /> );
      cy.contains('Software').should('not.exist');
    });

    it('Test the service with no description', () => {
      mount( <Service img={data.img} title={data.title} /> );
      cy.contains('hello world what is this world').should('not.exist');
    });

    it('Test the service with undefined as props', () => {
      mount( <Service img={undefined} title={undefined} description={undefined} /> )
    });

    it('Test the service with null as props', () => {
      mount( <Service img={null} title={null} description={null} /> )
    });

    it('Test the service with no data', () => {
      mount( <Service /> )
    });
  })