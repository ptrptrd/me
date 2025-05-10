import { useEffect, useState } from "react";
import SearchOutput from "./SearchOutput";
import { clsx } from "clsx";

function Search(props){
	const [searchStr, setSearchStr] = useState("");
	const [searchResults, setSearchResults] = useState([]);

	const onSearchStrChanged = async(searchStr) => {
		const search = await window.pagefind.debouncedSearch(searchStr);
		
		if (search !== null){
			const allResults = await Promise.all(
				search.results.slice(0, search.results.length).map(r => r.data()));
			setSearchResults(allResults);
		}
	}

	useEffect(() => {
		onSearchStrChanged(searchStr);
	}, [searchStr])

	return (
		<>
		<div className="w-full h-full">
			<div className="relative w-full h-full">
				<div className={clsx(
					"w-full h-full",
					"bg-(--bar-main)", 
					"shadow-md",
					"rounded-[5px] p-[5px]", 
					"sticky flex items-center"
				)}>
					<div className="flex-none">{props.iconSearch}</div>
					<input 
						type="text" 
						id="search-input" 
						value={searchStr} 
						onChange={(e) => {setSearchStr(e.target.value)}} 
						className="w-[90px] flex-auto border-transparent focus:outline-none text-(--foreground)" 
						placeholder="Still in work :/ ..." />
					<div onClick={() => {setSearchStr("")}} hidden={searchStr === ""}>{props.btnClose}</div>
					<div className="flex-none">{props.btnTags}</div>
					<div className="flex-none">{props.btnFilter}</div>
					<div className="flex-none">{props.btnFolder}</div>
					<div className="flex-none">{props.btnMenu}</div>
				</div>
				{ searchResults.length > 0 && <SearchOutput results={searchResults} />}
			</div>
			</div>
		</>
	)
}

export default Search;
