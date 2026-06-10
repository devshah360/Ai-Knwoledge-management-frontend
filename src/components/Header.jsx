import { Search } from "lucide-react";

function Header() {

  return (

    <div
      className="
        flex
        justify-between
        items-center
        bg-white
        px-6
        py-4
        shadow
      "
    >

      <h1>
        Knowledge Management
      </h1>

      <div
        className="
          flex
          items-center
          border
          rounded-lg
          px-3
          py-2
          w-96
        "
      >

        <Search size={18} />

        <input
          placeholder="Search..."
          className="
            ml-2
            outline-none
            w-full
          "
        />

      </div>

    </div>

  );
}

export default Header;