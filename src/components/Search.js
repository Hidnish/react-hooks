import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
	const [term, setTerm] = useState("react");
    // avoids fetching more data when typing the same query again
	const [debouncedTerm, setDebouncedTerm] = useState(term);
	const [results, setResults] = useState([]);

    // alternative to lifecicle methods used in Class
	useEffect(() => {
		const timerId = setTimeout(() => {
			setDebouncedTerm(term);
		}, 750);

        // useEffect can only return a function --> first thing called on state change
		return () => {
			clearTimeout(timerId);
		};
	}, [term]);

	useEffect(() => {
		const search = async () => {
			const { data } = await axios.get(
				"https://en.wikipedia.org/w/api.php",
				{
					params: {
						action: "query",
						list: "search",
						origin: "*",
						format: "json",
						srsearch: debouncedTerm,
					},
				}
			);
			setResults(data.query.search);
		};
        search();
        // [] ->  initial / nothing -> rerender / [data, data2] -> run if data (or data2) has changed since last render
	}, [debouncedTerm]);


	const renderedResults = results.map((result) => {
		return (
			<div key={result.pageid} className="item">
				<div className="right floated content">
					<a
						href={`https://en.wikipedia.org?curid=${result.pageid}`}
						className="ui button"
					>
						Go
					</a>
				</div>
				<div className="content">
					<div className="header">{result.title}</div>
					<div
						dangerouslySetInnerHTML={{ __html: result.snippet }}
					>
					</div>
				</div>
			</div>
		);
	});

	return (
		<div>
			<div className="ui form">
				<div className="field">
					<label>Enter Search Term</label>
					<input
						value={term}
						onChange={(e) => setTerm(e.target.value)}
						className="input"
					/>
				</div>
			</div>
			<div className="ui celled list">{renderedResults}</div>
		</div>
	);
};

export default Search;
