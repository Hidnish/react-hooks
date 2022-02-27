import React from "react";

const Link = ({ className, href, children }) => {

    // Change URL without full page refresh
    const onClick = event => {
        if (event.metaKey || event.ctrlKey) {
            return;
        }

        event.preventDefault();

        // updates page url without content change (page refresh)
        window.history.pushState({}, '', href);

        // tell route components that the url has changed 
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };

	return (
		<a onClick={onClick} className={className} href={href}>
			{children}
		</a>
	);
};

export default Link;
