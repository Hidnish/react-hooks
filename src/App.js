import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";


const items = [
	{
		title: "What is React?",
		content: "React is a JS framework to build UI",
	},
	{
		title: "Why use React?",
		content: "React is hella lit",
	},
	{
		title: "How to use React?",
		content: "React is based on components",
	},
];

const options = [
	{
		label: "The color red",
		value: "red",
	},
	{
		label: "The color green",
		value: "green",
	},
	{
		label: "A shade of blue ",
		value: "blue",
	},
];


export default () => {
	const [selected, setSelected] = useState(options[0]);
	// const [showDropdown, setShowDropdown] = useState(true);

	return (
        <div>
			<Header />
			<Route path="/">
				<Accordion items={items} />
			</Route>
			<Route path="/list">
				<Search />
			</Route>
			<Route path="/dropdown">
				<Dropdown 
					label="Select a color"
					options={options}
					selected={selected}
					onSelectedChange={setSelected}
				/>
			</Route>
			<Route path="/translate">
				<Translate />
			</Route>
        </div>
    );
};



// DROPDOWN

// In case of value = null, this would case a problem with useEffecr inside the dropdown component (check there)

// <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>; 
// {
// 	showDropdown ? (
// 		<div>
// 			<Dropdown
// 				selected={selected}
// 				onSelectedChange={setSelected}
// 				options={options}
// 			/>
// 			<h2 style={{ color: selected.value }}>Some text</h2>
// 		</div>
// 	) : null;
// }
