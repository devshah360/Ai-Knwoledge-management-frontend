import { useEffect, useState } from "react";
import {
  generateWorkflowGraph,
  getWorkflowGraphUrl,
} from "../services/workflowApi";

function Workflow() {
  const [graphUrl, setGraphUrl] = useState("");

  const loadGraph = async () => {
    try {
      await generateWorkflowGraph();

      setGraphUrl(
        `${getWorkflowGraphUrl()}?t=${Date.now()}`
      );
    } catch (error) {
      console.error(
        "Failed to generate workflow graph",
        error
      );
    }
  };

  useEffect(() => {
    const fetchGraph = async () => {
      try {
        await generateWorkflowGraph();

        setGraphUrl(
          `${getWorkflowGraphUrl()}?t=${Date.now()}`
        );
      } catch (error) {
        console.error(
          "Failed to generate workflow graph",
          error
        );
      }
    };

    fetchGraph();
  }, []);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">
          Workflow Visualization
        </h1>

        <button
          onClick={loadGraph}
          className="
            px-4
            py-2
            bg-blue-600
            text-white
            rounded-lg
          "
        >
          Refresh Graph
        </button>
      </div>

      <div
        className="
          bg-white
          rounded-xl
          shadow
          p-4
        "
      >
        {graphUrl && (
          <img
            src={graphUrl}
            alt="Workflow Graph"
            className="w-full"
          />
        )}
      </div>
    </div>
  );
}

export default Workflow;