import React from 'react'
import {mount} from '@cypress/react'
import Feature from '../../src/components/feature/Feature'
import '../../src/components/feature/Feature.css'
import '../../src/App.css'

import desk from '../../src/assets/images/ICON_Desk booking_2.svg'
import image from '../../src/assets/images/Picture.png'

describe('Tests for Feature component', () => {
    const data = {
        img: image,
        title: 'Feature 1 with a loooooooong text',
        featureImg: desk,
        featureName: 'Desk Booking',
        description: 'booking man',
        more: true
    }

    it('Test will all valid data', () => {
        mount(<Feature type="row" img={data.img} title={data.title} featureImg={data.featureImg} featureName={data.featureName}
         description={data.description} more={data.more} />);
    })

    it('Will all undefined/null')

    it('Test will all invalid data', () => {
        mount(<Feature />);
    })
})