import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
	const [translated, setTranslated] = useState('');
    const [debouncedText, setDebouncedText] = useState(text);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text);
        }, 750);

        return () => {
            clearTimeout(timerId);
        }
    }, [text]);

	// REMEMBER inside useEffect you can't use directly async-await
	useEffect(() => {

		const doTranslation = async () => {
            if (debouncedText === '') {
                return;
            }

			const { data } = await axios.post(
				"https://translation.googleapis.com/language/translate/v2",
                // {} -> no info sent along in the body of the request
				{},
				{
					params: {
						q: debouncedText,
						target: language.value,
						key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
					},
				}
			);

            setTranslated(data.data.translations[0].translatedText);
		};

        // Invoked every time we change text, language and first invoke the component
        doTranslation();

	}, [language, debouncedText]);

	return (
        <div>
            <h1 className="ui header">{translated}</h1>
        </div>
    );
};

export default Convert;
