import React, { useState } from 'react';

const Accordion = ({ items }) => {

    // Not creating an Array -> activeIndex is current index
    // setActiveindex() -> sets new value to activeIndex and rerender 
    // one useState for each peace of state, not like classes (i.e. { state1: null, state2: '' })
    const [activeIndex, setActiveIndex] = useState(null); // --> null is just a placeholder

    const onTitleClick = index => {
        setActiveIndex(index);
    }

    const renderedItems = items.map((item, index) => {

        const active = index === activeIndex ? 'active' : '';

        return (
            // line13: React.Fragment --> just a containing JSX element used instead of <div></div>
            // line14: Arrow function is needed to avoid onTitleClick to trigger on list render
            <React.Fragment key={item.title}>
                <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );
    })

    return (
        <div className="ui styled accordion">
            {renderedItems}
        </div>
    );
}

export default Accordion;