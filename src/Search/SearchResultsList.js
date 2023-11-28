import "./SearchResultList.css"
import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({ results }) => {
  if(results==='')
  return
  return (
    
    <div className="results-list">
      {results.map((result, id) => {
        return <SearchResult result={result.name} key={result.id} />;
      })}
    </div>
  );
};