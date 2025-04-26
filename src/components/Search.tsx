import { useEffect, useState } from "react";
import SearchOutput from "./SearchOutput";

function Search(props){
	const [searchStr, setSearchStr] = useState("");
	const [searchResults, setSearchResults] = useState([]);

	const onSearchStrChanged = async(searchStr) => {
		const search = await window.pagefind.debouncedSearch(searchStr);
		
		if (search !== null){
			const allResults = await Promise.all(
				search.results.slice(0, search.results.length - 1).map(r => r.data()));
			setSearchResults(allResults);
		}
	}

	useEffect(() => {
		onSearchStrChanged(searchStr);
	}, [searchStr])

	return (
		<>
			<div>{props.iconSearch}</div>
			<input type="text" id="search-input" value={searchStr} onChange={(e) => {setSearchStr(e.target.value)}} className="flex-auto border-transparent focus:outline-none text-(--foreground)" placeholder="Still in work :/ ..." />
			<div onClick={() => {setSearchStr("")}} hidden={searchStr === ""}>{props.buttonClose}</div>
			<SearchOutput results={searchResults} />
		</>
	)
}

export default Search;
