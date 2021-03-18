import React from 'react';
import {mount} from '@cypress/react'
import Story from '../../src/components/customerstory/Story';
import '../../src/App.css'

describe('Unit Component test for the Story Component', () => {
    it('Fully functional component with all data', () => {
        mount( 
          <Story title="“The use of FlexWhere provides us with extra square meters of workspace”" company="P. Persoon, Gemeente Deventer" moreText="Read more customers stories" />
        )
    });

    it('Fully functional component with title removed', () => {
        mount( 
          <Story company="P. Persoon, Gemeente Deventer" moreText="Read more customers stories" />
        )
    });

    it('Fully functional component with no data', () => {
        mount( 
          <Story />
        )
    });

    it('Fully functional component with company removed', () => {
        mount( 
          <Story moreText="Read more customers stories" />
        )
    })

})