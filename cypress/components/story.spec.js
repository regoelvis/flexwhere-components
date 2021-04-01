import React from 'react';
import {mount} from '@cypress/react';
import Story from '../../src/components/customerstory/Story';
import '../../src/App.css';

import man from '../../src/assets/images/mask-group-44.png'
import logo from '../../src/assets/images/Topdesk.png'

describe('Unit Component test for the Story Component', () => {

  const data = {
    img: [man],
    logo: logo,
    title: "“The use of FlexWhere provides us with extra square meters of workspace”",
    company : "P. Persoon, Gemeente Deventer",
    moreText : "Read more customers stories"
  }


    it('Fully functional component with all data', () => {
        mount( 
          <Story data={data} />
        )
    });

    it('Fully functional component with title removed', () => {
        delete data.title;
        mount( 
          <Story data={data} />
        );
        cy.contains('“The use of FlexWhere provides us with extra square meters of workspace”').should('not.exist');

    });

    it('Fully functional component with company removed', () => {
        delete data.company;
        mount( 
          <Story data={data} />
        );
        cy.contains('P. Persoon, Gemeente Deventer').should('not.exist');
    });

    it('Fully functional component without more section', () => {
      delete data.moreText;
      mount( 
        <Story data={data} />
      );
      cy.get('.more').should('not.exist');
    });

    it('Fully functional component without image', () => {
      delete data.img;
      mount( 
        <Story data={data} />
      );
      cy.get('.more').should('not.exist');
    });


    it('Fully functional component with no data', () => {
      mount( 
        <Story />
      );
      cy.get('.story').should('not.exist');

    });

})