function Loader() {

  return (

    <div
      className="
        fixed
        inset-0
        bg-black/20
        flex
        items-center
        justify-center
      "
    >

      <div
        className="
          w-12
          h-12
          border-4
          border-blue-600
          rounded-full
          animate-spin
        "
      />

    </div>

  );
}

export default Loader;