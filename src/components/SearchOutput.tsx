import DOMPurify from 'dompurify';
import { Icon } from "@iconify/react";
import './searchoutput.css';

function SearchOutput({ results }) {

	return (
		<div 
			id="search-output" 
			className="w-full max-h-[500px] bg-(--input-main) overflow-y-auto p-[5px] ">
			<ul>
				{
					results.map((result) => {
						console.log(result)
						const subresults = result.sub_results
						return (
							<li key={result.url} className="text-(--input-main-foreground) py-[5px]">
								<div className="flex items-center border-t-3 py-[15px]">
									<Icon icon="mdi:file-outline" fontSize="30px" className="mx-[5px]"/>
									<h1><a href={result.url}>{result.url}</a></h1>
								</div>
								{ subresults.map((subresult) => {
									return (
										<div key={subresult.url} className="pl-[30px] mb-[10px]">
											<div className="flex items-center">
												<Icon icon="mdi:arrow-top-right" fontSize="20px" className="mx-[5px]"/>
												<h2><a href={subresult.url}>{subresult.url}</a></h2>
											</div>
											<div className="content text-base" dangerouslySetInnerHTML={
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
