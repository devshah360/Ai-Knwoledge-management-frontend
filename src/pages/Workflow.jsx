import { useEffect, useState } from "react";

import {
  generateWorkflowGraph,
  getWorkflowGraphUrl,
} from "../services/workflowApi";

function Workflow() {

  const [graphUrl, setGraphUrl] = useState("");



  const refreshGraph = async () => {

    try {

      await generateWorkflowGraph();

      const url =

        `${getWorkflowGraphUrl()}?t=${Date.now()}`;

      setGraphUrl(url);

    }

    catch (error) {

      console.error(

        "Failed to generate workflow graph",

        error

      );

    }

  };



  useEffect(() => {

    const loadGraph = async () => {

      try {

        await generateWorkflowGraph();

        const url =

          `${getWorkflowGraphUrl()}?t=${Date.now()}`;

        setGraphUrl(url);

      }

      catch (error) {

        console.error(

          "Failed to generate workflow graph",

          error

        );

      }

    };

    loadGraph();

  }, []);



  return (

    <div>

      <div

        className="

          flex

          justify-between

          items-center

          flex-wrap

          gap-4

          mb-8

        "

      >

        <div>

          <h1

            className="

              text-3xl

              font-bold

              text-slate-900

              dark:text-white

            "

          >

            Workflow Visualization

          </h1>



          <p

            className="

              mt-2

              text-slate-500

              dark:text-slate-400

            "

          >

            Visual representation of the AI processing workflow.

          </p>

        </div>



        <button

          onClick={refreshGraph}

          className="

            px-6

            py-3

            rounded-xl

            bg-blue-600

            hover:bg-blue-700

            text-white

            transition

          "

        >

          Refresh Graph

        </button>

      </div>



      <div

        className="

          bg-white

          dark:bg-slate-900

          border

          border-slate-200

          dark:border-slate-700

          rounded-2xl

          shadow-sm

          p-6

        "

      >

        {

          graphUrl

          ?

          (

            <img

              src={graphUrl}

              alt="Workflow Graph"

              className="

                w-full

                rounded-xl

              "

            />

          )

          :

          (

            <div

              className="

                h-72

                flex

                items-center

                justify-center

                text-slate-500

                dark:text-slate-400

              "

            >

              Loading workflow graph...

            </div>

          )

        }

      </div>

    </div>

  );

}

export default Workflow;