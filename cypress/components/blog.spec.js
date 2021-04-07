import React from 'react';
import {mount} from '@cypress/react'
import '../../src/App.css'

import Blog from '../../src/components/blog/Blog';
import image from '../../src/assets/images/Outlook.png';
import sjoerd from '../../src/assets/images/sjoerd-blog.png';

describe("Test for Blog component", () => {

    const data = {
        img: image,
        title: "newsInsights.blog",
        description: 'newsInsights.lorem',
        date: "newsInsights.date",
        author: "newsInsights.sjoerd",
        authorImg: sjoerd
    }

    it('Test will all valid data', () => {
        mount(<Blog data={data} />);
        cy.contains('newsInsights.lorem')
        cy.contains('newsInsights.blog')
        cy.contains('newsInsights.date')
        cy.contains('newsInsights.sjoerd')
        cy.get('img')

    })

    it('Will mount with data as undefined', () => {
        mount(<Blog data={undefined}/>)
        cy.contains('newsInsights.lorem').should('not.exist')
        cy.contains('newsInsights.blog').should('not.exist')
        cy.contains('newsInsights.date').should('not.exist')
        cy.contains('newsInsights.sjoerd').should('not.exist')
    })

    it('Test will all invalid data', () => {
        mount(<Blog />);
    })
})