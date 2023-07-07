import { useState, KeyboardEvent } from "react";

type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState("");

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      loadUser(userName);
    }
  };

  return (
    <div className="rounded-lg flex gap-3">
      <input
        onChange={e => setUserName(e.target.value)}
        onKeyDown={handleKeyDown}
        type="search"
        name="search"
        className="w-full p-3 rounded-lg text-black text-sm focus:outline-none focus:ring ring-slate-700"
        placeholder="Search GitHub username..."
      />

      <button
        onClick={() => loadUser(userName)}
        className="text-sm px-4 py-2 bg-slate-700 dark:bg-slate-950 rounded-lg hover:scale-105"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
