import { useEffect, useState } from "react";
import api from "../services/api";

function ActivityLogs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const loadLogs = async () => {
      try {
        const response = await api.get("/admin/logs");
        setLogs(response.data);
      } catch (error) {
        console.error("Failed to load logs", error);
      }
    };

    loadLogs();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">
        Activity Logs
      </h1>

      <div className="bg-white rounded-lg shadow">
        {logs.map((log, index) => (
          <div
            key={index}
            className="p-4 border-b flex justify-between"
          >
            <div>
              <p className="font-semibold">
                {log.user}
              </p>

              <p className="text-gray-600">
                {log.action}
              </p>
            </div>

            <span className="text-sm text-gray-500">
              {log.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityLogs;