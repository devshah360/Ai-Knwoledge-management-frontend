function Header() {
  return (
    <div
      className="
        flex
        justify-between
        items-center

        px-8
        py-5

        rounded-2xl

        bg-white
        dark:bg-slate-900

        border
        border-slate-200
        dark:border-slate-700

        shadow-sm

        transition-all
        duration-300
      "
    >

      <div>
        <h1
          className="
            text-2xl
            font-bold

            text-slate-900
            dark:text-white
          "
        >
          Knowledge Management
        </h1>

        <p
          className="
            mt-1

            text-sm

            text-slate-500
            dark:text-slate-400
          "
        >
          AI Powered Enterprise Knowledge System
        </p>
      </div>

    </div>
  );
}

export default Header;