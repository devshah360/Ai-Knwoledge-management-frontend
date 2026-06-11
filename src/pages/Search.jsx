import { useState } from "react";
import { searchDocuments } from "../services/searchApi";

function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const performSearch = async () => {
    if (!query.trim()) return;

    try {
      setLoading(true);

      const data = await searchDocuments(query);

      setResults(data);
    } catch (error) {
      console.error("Search failed:", error);
    } finally {
      setLoading(false);
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

      {loading && <p>Searching...</p>}

      {!loading && results.length === 0 && query && <p>No Results Found</p>}

      {results.map((result) => (
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
