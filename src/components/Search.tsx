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
			<div className="relative">
				<div className="w-1/3 bg-(--bar-main) shadow-md rounded-[5px] p-[5px] sticky flex items-center">
					<div>{props.iconSearch}</div>
					<input 
						type="text" 
						id="search-input" 
						value={searchStr} 
						onChange={(e) => {setSearchStr(e.target.value)}} 
						className="flex-auto border-transparent focus:outline-none text-(--foreground)" 
						placeholder="Still in work :/ ..." />
					<div onClick={() => {setSearchStr("")}} hidden={searchStr === ""}>{props.btnClose}</div>
					<div>{props.btnTags}</div>
					<div>{props.btnFilter}</div>
					<div>{props.btnFolder}</div>
					<div>{props.btnMenu}</div>
				</div>
				{ searchResults.length > 0 && <SearchOutput results={searchResults} />}
			</div>
		</>
	)
}

export default Search;
