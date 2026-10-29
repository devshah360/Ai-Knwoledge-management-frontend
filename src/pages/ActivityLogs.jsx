import { useEffect, useState } from "react";
import api from "../services/api";

function ActivityLogs() {

  const [logs, setLogs] = useState([]);

  useEffect(() => {

    let ignore = false;

    const loadLogs = async () => {

      try {

        const response = await api.get("/activity/");

        if (!ignore) {
          setLogs(response.data || []);
        }

      } catch (error) {

        console.error(
          "Failed to load logs",
          error
        );

      }

    };

    loadLogs();

    return () => {
      ignore = true;
    };

  }, []);

  const handleDelete = async (id) => {

    if (!window.confirm("Delete this log?")) return;

    try {

      await api.delete(`/activity/${id}`);

      setLogs((prev) =>
        prev.filter((log) => log.id !== id)
      );

    } catch (error) {

      console.error(
        "Delete failed",
        error
      );

    }

  };
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
          Activity Logs
        </h1>

        <p
          className="
            mt-2

            text-slate-500
            dark:text-slate-400
          "
        >
          Track user activities and system events.
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

          overflow-hidden

          shadow-sm
        "
      >

        {

          logs.length === 0

            ?

            (

              <div
                className="
                  p-10

                  text-center

                  text-slate-500
                  dark:text-slate-400
                "
              >

                No activity logs found.

              </div>

            )

            :

            logs.map((log) => (

              <div

                key={log.id}

                className="
                  p-5

                  flex

                  justify-between

                  items-start

                  border-b

                  border-slate-200

                  dark:border-slate-700

                  last:border-b-0
                "

              >

                <div>

                  <p
                    className="
                      font-semibold

                      text-slate-900

                      dark:text-white
                    "
                  >

                    User ID : {log.user_id}

                  </p>

                  <p
                    className="
                      mt-1

                      text-slate-600

                      dark:text-slate-300
                    "
                  >

                    {log.action}

                  </p>

                </div>

                <div className="flex items-center gap-3">

                  <span

                    className="
                      text-sm

                      text-slate-500

                      dark:text-slate-400
                    "

                  >

                    {new Date(log.created_at).toLocaleString()}

                  </span>

                  <button

                    onClick={() => handleDelete(log.id)}

                    className="
                      px-3
                      py-1

                      bg-red-600

                      hover:bg-red-700

                      text-white

                      rounded-lg

                      text-sm

                      transition
                    "

                  >

                    Delete

                  </button>

                </div>

              </div>

            ))

        }

      </div>

    </div>

  );

}

export default ActivityLogs;