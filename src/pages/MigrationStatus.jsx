import { useEffect, useState } from "react";
import api from "../services/api";

function MigrationStatus() {
  const [status, setStatus] = useState("");

  const checkStatus = async () => {
    try {
      const response = await api.get("/status/task123");

      setStatus(response.data.status);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    checkStatus();

    const interval = setInterval(() => {
      checkStatus();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="font-bold">Migration Status</h2>

      <p className="mt-3">{status}</p>
    </div>
  );
}

export default MigrationStatus;