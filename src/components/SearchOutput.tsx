function SearchOutput({ results }) {

	return (
		<div id="search-output">
			<ul className="w-full h-full">
				{
					results.map((result) => {
						console.log(result)
						return <li key={result.url}>{result.url}</li>
					})
				}
			</ul>
		</div>
	)
}

export default SearchOutput
