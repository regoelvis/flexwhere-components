import React from 'react';
import './Filter.css'

function Filter(props){
    return (
        <div className="filter-container">
            <div className="filter">
                <div>
                    <span className="font-weight-high">Filter by:</span>
                </div>
                <div>
                    <div className="conditions">
                        {/* filter conditions */}
                        {
                            props?.categories
                            .map(cat => 
                            <div>
                                <input type="checkbox"></input>
                                <label>{cat}</label>
                            </div> )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Filter;