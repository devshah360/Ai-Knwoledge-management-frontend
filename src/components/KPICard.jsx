function KPICard({ title, value }) {
  return (
    <div
      className="
        bg-white
        dark:bg-slate-800
        border
        border-slate-200
        dark:border-slate-700
        p-6
        rounded-xl
        shadow
        transition-colors
      "
    >
      <h3
        className="
          text-gray-500
          dark:text-gray-400
        "
      >
        {title}
      </h3>

      <p
        className="
          text-3xl
          font-bold
          mt-2
          text-slate-900
          dark:text-white
        "
      >
        {value}
      </p>
    </div>
  );
}

export default KPICard;