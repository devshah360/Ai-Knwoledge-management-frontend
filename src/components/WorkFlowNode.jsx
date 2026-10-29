function WorkflowNode({ data }) {
  return (
    <div
      className="
        bg-white
        border
        rounded-xl
        p-4
        shadow
        min-w-[180px]
      "
    >
      <h3 className="font-bold">
        {data.label}
      </h3>

      <p
        className="
          text-xs
          text-gray-500
          mt-2
        "
      >
        {data.status}
      </p>
    </div>
  );
}

export default WorkflowNode;