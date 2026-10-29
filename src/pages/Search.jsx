import { useState } from "react";
import { searchDocuments } from "../services/searchApi";

function Search() {
  const [query, setQuery] = useState("");

  const [results, setResults] = useState([]);

  const [loading, setLoading] = useState(false);

  const [hasSearched, setHasSearched] =
    useState(false);

  const performSearch = async () => {
    if (!query.trim()) return;

    try {
      setLoading(true);

      setHasSearched(true);

      const data =
        await searchDocuments(query);

      setResults(data);
    } catch (error) {
      console.error(error);

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
        mb-8

        text-slate-900
        dark:text-white
      "
      >
        Enterprise Search
      </h1>

      <div className="flex gap-3 mb-8">

        <input
          type="text"

          value={query}

          onChange={(e) =>
            setQuery(e.target.value)
          }

          onKeyDown={handleKeyDown}

          placeholder="Search documents..."

          className="
          flex-1

          px-5
          py-3

          rounded-2xl

          border

          border-slate-300

          bg-white

          text-slate-900

          outline-none

          focus:ring-2
          focus:ring-blue-500

          dark:bg-slate-900
          dark:text-white
          dark:border-slate-700

          transition-all
        "
        />

        <button

          onClick={performSearch}

          className="
          px-6

          rounded-2xl

          bg-blue-600

          hover:bg-blue-700

          text-white

          font-medium

          transition
        "
        >
          Search
        </button>

      </div>

      {!hasSearched && (

        <div
          className="
          text-center

          mt-20

          text-slate-500

          dark:text-slate-400
        "
        >
          Enter a search term and press Search
        </div>

      )}

      {loading && (

        <div
          className="
          text-center

          text-slate-500

          dark:text-slate-400
        "
        >
          Searching...
        </div>

      )}

      {!loading &&
        hasSearched &&
        results.length === 0 && (

          <div
            className="
            text-center

            text-slate-500

            dark:text-slate-400
          "
          >
            No Results Found
          </div>

        )}

      {!loading &&
        hasSearched &&
        results.map((result) => (

          <div

            key={result.id}

            className="
            bg-white

            dark:bg-slate-900

            border

            border-slate-200

            dark:border-slate-700

            rounded-2xl

            shadow-sm

            p-6

            mb-5

            transition-all
          "

          >

            <h2

              className="
              text-xl

              font-bold

              text-slate-900

              dark:text-white
            "

            >

              {result.title}

            </h2>

            <div

              className="
              mt-3

              text-slate-600

              dark:text-slate-300
            "

              dangerouslySetInnerHTML={{
                __html: result.snippet,
              }}

            />

            <div

              className="
              mt-4

              text-sm

              font-medium

              text-blue-600

              dark:text-blue-400
            "

            >

              Score : {result.score}

            </div>

          </div>

        ))}

    </div>
  );
}

export default Search;