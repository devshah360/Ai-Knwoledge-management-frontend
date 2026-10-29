function KPICard({ title, value }) {
  return (
    <div
      className="
        bg-white
        dark:bg-slate-900

        border
        border-slate-200
        dark:border-slate-700

        rounded-2xl

        p-6

        shadow-sm
        hover:shadow-lg

        transition-all
        duration-300
      "
    >

      <p
        className="
          text-sm

          text-slate-500
          dark:text-slate-400

          uppercase
          tracking-wide
        "
      >
        {title}
      </p>

      <h2
        className="
          text-4xl

          font-bold

          mt-3

          text-slate-900
          dark:text-white
        "
      >
        {value}
      </h2>

    </div>
  );
}

export default KPICard;