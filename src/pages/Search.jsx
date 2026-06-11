import { useState } from "react";
import { searchDocuments } from "../services/searchApi";

function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const performSearch = async () => {
    if (!query.trim()) return;

    try {
      setLoading(true);
      setHasSearched(true);

      const data = await searchDocuments(query);

      setResults(data);
    } catch (error) {
      console.error("Search failed:", error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      performSearch();
    }
  };

  return (
    <div>
      <h1
        className="
          text-3xl
          font-bold
          mb-6
        "
      >
        Enterprise Search
      </h1>

      <div
        className="
          flex
          gap-3
          mb-6
        "
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search documents..."
          className="
            flex-1
            border
            p-3
            rounded-lg
          "
        />

        <button
          onClick={performSearch}
          className="
            bg-blue-600
            text-white
            px-6
            rounded-lg
          "
        >
          Search
        </button>
      </div>

      {!hasSearched && (
        <div className="text-center text-gray-500 mt-20">
          Enter a search term and press Search
        </div>
      )}

      {loading && (
        <div className="text-center">
          Searching...
        </div>
      )}

      {!loading &&
        hasSearched &&
        results.length === 0 && (
          <p>No Results Found</p>
        )}

      {!loading &&
        hasSearched &&
        results.map((result) => (
          <div
            key={result.id}
            className="
              bg-white
              shadow
              rounded-xl
              p-5
              mb-4
            "
          >
            <h2
              className="
                text-lg
                font-bold
              "
            >
              {result.title}
            </h2>

            <p
              className="
                mt-2
                text-gray-600
              "
              dangerouslySetInnerHTML={{
                __html: result.snippet,
              }}
            />

            <div
              className="
                mt-3
                text-sm
                text-blue-600
              "
            >
              Score: {result.score}
            </div>
          </div>
        ))}
    </div>
  );
}

export default Search;