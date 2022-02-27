import { useState, useEffect } from 'react';

// children = component inside component passed as prop
const Route = ({ path, children }) => {
    // this is only here to get the Route to update
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    useEffect(() => {
        // onLocationChange defined as a separate variable because:
        // if we stop showing the Route component on the screen we want to clean up the event listener
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        }
        window.addEventListener('popstate', onLocationChange);

        return () => {
            window.removeEventListener('popstate', onLocationChange);
        }
    }, [])

    return currentPath === path ? children : null;
}

export default Route;