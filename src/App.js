import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

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

const options = [
    {
        label: 'The color red',
        value: 'Red',
    },
    {
        label: 'The color green',
        value: 'Green',
    },
    {
        label: 'A shade of blue ',
        value: 'Blue',
    }
]

export default () => {
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);

    // In case of value = null, this would case a problem with useEffecr inside the dropdown component (check there)
    return (
        <div>
            <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
            { showDropdown ? (
                <Dropdown 
                    selected={selected} 
                    onSelectedChange={setSelected} 
                    options={options}
                />
            ) : null }
        </div>
    );
}