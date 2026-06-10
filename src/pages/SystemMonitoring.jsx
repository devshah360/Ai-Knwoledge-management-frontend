import {
  useEffect,
  useState
} from "react";

import StatusCard from "../components/StatusCard";

import {
  getSystemHealth,
  getMetrics,
  getResources
} from "../services/monitorApi";

function SystemMonitoring() {
  const [health, setHealth] =
    useState({});

  const [metrics, setMetrics] =
    useState({});

  const [resources, setResources] =
    useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const healthData =
          await getSystemHealth();

        const metricData =
          await getMetrics();

        const resourceData =
          await getResources();

        setHealth(healthData);
        setMetrics(metricData);
        setResources(resourceData);
      } catch (error) {
        console.error(
          "Monitoring Error:",
          error
        );
      }
    };

    fetchData();

    const interval =
      setInterval(
        fetchData,
        10000
      );

    return () =>
      clearInterval(interval);
  }, []);

  return (
    <div className="p-6">
      <h1
        className="
          text-3xl
          font-bold
          mb-6
        "
      >
        System Monitoring
      </h1>

      {/* HEALTH */}
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          gap-4
          mb-8
        "
      >
        <StatusCard
          title="Elasticsearch"
          status={
            health.elasticsearch
          }
        />

        <StatusCard
          title="Redis"
          status={
            health.redis
          }
        />

        <StatusCard
          title="MongoDB"
          status={
            health.mongodb
          }
        />

        <StatusCard
          title="Celery"
          status={
            health.celery
          }
        />
      </div>

      {/* METRICS */}
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-4
          mb-8
        "
      >
        <div
          className="
            bg-white
            p-6
            rounded-xl
            shadow
          "
        >
          <h3 className="font-medium">
            Indexed Documents
          </h3>

          <p
            className="
              text-3xl
              font-bold
              mt-3
            "
          >
            {metrics.documents ?? 0}
          </p>
        </div>

        <div
          className="
            bg-white
            p-6
            rounded-xl
            shadow
          "
        >
          <h3 className="font-medium">
            Conversations
          </h3>

          <p
            className="
              text-3xl
              font-bold
              mt-3
            "
          >
            {metrics.conversations ?? 0}
          </p>
        </div>

        <div
          className="
            bg-white
            p-6
            rounded-xl
            shadow
          "
        >
          <h3 className="font-medium">
            Queue Size
          </h3>

          <p
            className="
              text-3xl
              font-bold
              mt-3
            "
          >
            {metrics.queue_size ?? 0}
          </p>
        </div>
      </div>

      {/* RESOURCES */}
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-4
        "
      >
        <div
          className="
            bg-white
            p-6
            rounded-xl
            shadow
          "
        >
          <h3 className="font-medium">
            CPU Usage
          </h3>

          <p
            className="
              text-4xl
              font-bold
              mt-4
            "
          >
            {resources.cpu ?? 0}%
          </p>
        </div>

        <div
          className="
            bg-white
            p-6
            rounded-xl
            shadow
          "
        >
          <h3 className="font-medium">
            Memory Usage
          </h3>

          <p
            className="
              text-4xl
              font-bold
              mt-4
            "
          >
            {resources.memory ?? 0}%
          </p>
        </div>
      </div>
    </div>
  );
}

export default SystemMonitoring;