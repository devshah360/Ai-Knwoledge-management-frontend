import {
  useEffect,
  useState
} from "react";

import AuditTable from
"../components/AuditTable";

import ActivityTimeline from
"../components/ActivityTimeline";

import {
  getAuditLogs
} from "../services/auditApi";

function AuditDashboard() {
  const [logs, setLogs] =
    useState([]);

  const [search, setSearch] =
    useState("");

  const [view, setView] =
    useState("table");

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const data =
          await getAuditLogs();

        setLogs(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchLogs();
  }, []);

  const filteredLogs =
    logs.filter((log) =>
      String(log.user_id)
        .includes(search)
    );

  return (
    <div className="p-6">
      <h1
        className="
          text-3xl
          font-bold
          mb-6
        "
      >
        Audit Dashboard
      </h1>

      <div
        className="
          flex
          gap-4
          mb-4
        "
      >
        <input
          type="text"
          placeholder="Search User ID..."
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
          className="
            border
            p-3
            rounded-lg
            flex-1
          "
        />

        <button
          onClick={() =>
            setView("table")
          }
          className="
            px-4
            py-2
            bg-blue-500
            text-white
            rounded
          "
        >
          Table
        </button>

        <button
          onClick={() =>
            setView(
              "timeline"
            )
          }
          className="
            px-4
            py-2
            bg-green-500
            text-white
            rounded
          "
        >
          Timeline
        </button>
      </div>

      {view === "table" ? (
        <AuditTable
          logs={
            filteredLogs
          }
        />
      ) : (
        <ActivityTimeline
          logs={
            filteredLogs
          }
        />
      )}
    </div>
  );
}

export default AuditDashboard;