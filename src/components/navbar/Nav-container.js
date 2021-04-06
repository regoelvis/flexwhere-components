import React, {useState, useEffect} from 'react';

import Nav from './Nav-mobile';

function NavContainer(props){

    const [menuVisible, setMenuVisibility] = useState(false);

    const [location, setLocation] = useState('NL');
    const [locationVisible, setLocationVisible] = useState(false);
    
    const [featuresVisible, setFeaturesVisible] = useState(false);
    const [featureChevron, setFeatureChevronType] = useState('chevron-bottom');

    //handlers for changing the Feature chevron direction
    const changeFeatureChevron = () => {
        setFeatureChevronType((prevValue) => {
            setFeaturesVisible(!featuresVisible);
            if(prevValue ==='chevron-bottom')
                return 'chevron-top';
            return 'chevron-bottom';
        })
    };

    const [locationChevron, setLocationChevronType] = useState('chevron-bottom');
    const changeLocationChevron = () => {
        setLocationChevronType((prevValue) => {
            setLocationVisible(!locationVisible);
            if(prevValue ==='chevron-bottom')
                return 'chevron-top';
            return 'chevron-bottom';
        })
    };

    /**
     * Effect hook to take care of the window width changes
     * The nav depends on the window width to render
     */
    const [windowWidth,setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        window.onresize = ()=> {
            setWindowWidth(window.innerWidth);
        } 
    },[windowWidth])

    /**
     * All the event handlers for navigation component
     */
    const handlers = {
        setLocation: setLocation,
        changeFeatureChevron: changeFeatureChevron,
        setMenuVisibility: setMenuVisibility,
        setLocationVisible: setLocationVisible,
        changeLocationChevron: changeLocationChevron,
        pageHandler: props.pageHandler,
        languageHandler: props.languageHandler
    }

    /**
     * All the data props for navigation component
     */
    const data = {
        location: location,
        windowWidth: windowWidth,
        menuVisible: menuVisible,
        featureChevron: featureChevron,
        featuresVisible: featuresVisible,
        locationChevron: locationChevron,
        locationVisible: locationVisible,
    }

    return (
        <Nav data={data} handlers={handlers} />
    );
}

export default NavContainer;