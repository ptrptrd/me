import DOMPurify from 'dompurify';

function SearchOutput({ results }) {

	return (
		<div 
			id="search-output" 
			className="w-full max-h-[500px] bg-(--panel-main) overflow-y-auto">
			<ul>
				{
					results.map((result) => {
						console.log(result)
						const subresults = result.sub_results
						return (
							<li key={result.url} className="text-(--panel-main-foreground)">
								<hr />
								{result.url}
								{ subresults.map((subresult) => {
									return (
										<div key={subresult.url}>
											<h2>{subresult.url}</h2>
											<div className="content" dangerouslySetInnerHTML={
												{__html: DOMPurify.sanitize(subresult.excerpt)}
											}/>
										</div>
									)
								})}
							</li>
						)
					})
				}
			</ul>
		</div>
	)
}

export default SearchOutput
