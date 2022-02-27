import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
	const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
		const onBodyClick = e => {
            // Check if the element that was clicked on is inside out REF (ref) component  
            // .contains() -> used to check if one DOM element contains another DOM element
            if (ref.current.contains(e.target)) {
                return;
            }
            setOpen(false);
        }
        // addEventListener gets called first, before React events
        document.body.addEventListener("click", onBodyClick, true); // -> true = {capture: true}

		// Cleanup function called right before next time this function is called
		// Also called when we're about to stop showing the component, perfect :D
		return () => {
			document.body.removeEventListener('click', onBodyClick, true);
		}
    }, []);

	const renderedOptions = options.map((option) => {
		if (option.value === selected.value) {
			return null;
		}

		return (
			<div
				key={option.value}
				className="item"
				onClick={() => {onSelectedChange(option)}}
			>
				{option.label}
			</div>
		);
	});

	return (
		<div ref={ref} className="ui form">
			<div className="field">
				<label className="label">{label}</label>
				<div
					onClick={() => {setOpen(!open)}}
					className={`ui selection dropdown ${open ? "visible active" : ""}`}
				>
					<i className="dropdown icon"></i>
					<div className="text">{selected.label}</div>
					<div className={`menu ${open ? "visible transition" : ""}`}>
						{renderedOptions}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dropdown;

// event objects created by the browser travels upstream from a child to the parents ('bubbling up' in the DOM structure)
// i.e. onClick in 'renderedOptions' func triggers onClick inside the 'return()', because it is inside it


