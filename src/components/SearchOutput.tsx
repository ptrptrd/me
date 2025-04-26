function SearchOutput({ results }) {

	return (
		<div 
			id="search-output" 
			className="w-full max-h-[100px] bg-(--panel-main) overflow-y-auto">
			<ul>
				{
					results.map((result) => {
						console.log(result)
						return <li key={result.url} className="text-(--panel-main-foreground)">{result.url}</li>
					})
				}
			</ul>
		</div>
	)
}

export default SearchOutput
