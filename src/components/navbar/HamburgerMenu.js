import React from 'react';

export default function HamburgerMenu(props){
    
    function getHamburgerMenu(){
        if(props.menuVisible){
            return (
                <svg className="m2" width="1rem" height="1rem">
                    <rect className="border-rounded menu-close left" width="1rem" height="0.1rem" y="0.6rem" x="-0.55rem" />
                    <rect className="border-rounded menu-close right" width="1rem" height="0.1rem" x="0.125rem" />
                </svg>
                );
        }
        else{
            return (
                <svg width="2rem" height="2rem">
                    <rect className="border-rounded" width="2rem" height="0.2rem" y="0" />
                    <rect className="border-rounded" width="1.5rem" height="0.2rem" y="0.75rem" />
                    <rect className="border-rounded" width="2rem" height="0.2rem" y="1.5rem" />
                </svg>
                );
        }
    }
    return (getHamburgerMenu());
}