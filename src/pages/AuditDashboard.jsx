import { useEffect, useState } from "react";

import AuditTable from "../components/AuditTable";
import ActivityTimeline from "../components/ActivityTimeline";

import {
  getAuditLogs,
} from "../services/auditApi";

function AuditDashboard() {

  const [logs, setLogs] = useState([]);

  const [search, setSearch] = useState("");

  const [view, setView] = useState("table");

  useEffect(() => {

    (async () => {

      try {

        const data = await getAuditLogs();

        setLogs(data);

      }

      catch (error) {

        console.error(error);

      }

    })();

  }, []);



  const filteredLogs = logs.filter((log) =>

    String(log.user_id)

      .toLowerCase()

      .includes(search.toLowerCase())

  );



  return (

    <div>

      <div className="mb-8">

        <h1

          className="

            text-3xl

            font-bold

            text-slate-900

            dark:text-white

          "

        >

          Audit Dashboard

        </h1>



        <p

          className="

            mt-2

            text-slate-500

            dark:text-slate-400

          "

        >

          Track user activities and audit logs.

        </p>

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

          mb-6

        "

      >

        <div

          className="

            flex

            flex-col

            md:flex-row

            gap-4

          "

        >

          <input

            type="text"

            placeholder="Search User ID..."

            value={search}

            onChange={(e) =>

              setSearch(e.target.value)

            }

            className="

              flex-1

              px-4

              py-3

              rounded-xl



              border

              border-slate-300



              bg-white

              text-slate-900



              dark:bg-slate-800

              dark:border-slate-700

              dark:text-white



              outline-none

              focus:ring-2

              focus:ring-blue-500

            "

          />



          <button

            onClick={() =>

              setView("table")

            }

            className={`

              px-5

              py-3

              rounded-xl

              font-medium

              transition-all



              ${

                view === "table"

                  ?

                  "bg-blue-600 text-white"

                  :

                  `

                  bg-slate-100

                  text-slate-700



                  dark:bg-slate-800

                  dark:text-slate-300

                  `

              }

            `}

          >

            Table

          </button>



          <button

            onClick={() =>

              setView("timeline")

            }

            className={`

              px-5

              py-3

              rounded-xl

              font-medium

              transition-all



              ${

                view === "timeline"

                  ?

                  "bg-green-600 text-white"

                  :

                  `

                  bg-slate-100

                  text-slate-700



                  dark:bg-slate-800

                  dark:text-slate-300

                  `

              }

            `}

          >

            Timeline

          </button>

        </div>

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

          view === "table"

            ?

            <AuditTable

              logs={filteredLogs}

            />

            :

            <ActivityTimeline

              logs={filteredLogs}

            />

        }

      </div>

    </div>

  );

}

export default AuditDashboard;