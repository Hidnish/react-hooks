import React from 'react';
import Accordion from './components/Accordion';

const items = [
    {
        title: 'What is React?',
        content: 'React is a JS framework to build UI'
    },
    {
        title: 'Why use React?',
        content: 'React is hella lit'
    },
    {
        title: 'How to use React?',
        content: 'React is based on components'
    },
]

export default () => {
    return (
        <div>
            <Accordion items={items}/>
        </div>
    );
}