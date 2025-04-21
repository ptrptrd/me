import React, { useEffect, useState } from "react";
// import { pagefind } from "/public/pagefind/pagefind.js";"

function Search(props){
	const [searchStr, setSearchStr] = useState("");

	const onSearchStrChanged = async(searchStr) => {
		console.log(searchStr);

		// const pagefind = import("/pagefind/pagefind.js?url");
		// const pagefind = import(/*webpackIgnore: true*/ '/pagefind/pagefind.js');
		const search = await window.pagefind.debouncedSearch(searchStr);
		
		if (search !== null){
			console.log(search);

			if (search.results.length != 0) {
				console.log(await search.results[0].data())
				console.log(await search.results[1].data())
			}
		}
	}

	useEffect(() => {
		onSearchStrChanged(searchStr);
	}, [searchStr])

	return (
		<>
			<div>{props.iconSearch}</div>
			<input type="text" id="search-input" value={searchStr} onChange={(e) => {setSearchStr(e.target.value)}} className="flex-auto border-transparent focus:outline-none text-(--foreground)" placeholder="Still in work :/ ..." />
			<div onClick={() => {console.log("Test")}} hidden={searchStr === ""}>{props.buttonClose}</div>
		</>
	)
}

export default Search;
