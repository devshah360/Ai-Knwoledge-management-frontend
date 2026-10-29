import { useEffect, useState } from "react";

import StatusCard from "../components/StatusCard";

import {
  getSystemHealth,
  getMetrics,
  getResources,
} from "../services/monitorApi";

function SystemMonitoring() {

  const [health, setHealth] = useState({});

  const [metrics, setMetrics] = useState({});

  const [resources, setResources] = useState({});



  const refreshData = async () => {

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

    }

    catch (error) {

      console.error(
        "Monitoring Error:",
        error
      );

    }

  };



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

      }

      catch (error) {

        console.error(
          "Monitoring Error:",
          error
        );

      }

    };



    fetchData();



    const interval = setInterval(

      refreshData,

      10000

    );



    return () => clearInterval(interval);

  }, []);



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

          System Monitoring

        </h1>



        <p

          className="

            mt-2

            text-slate-500

            dark:text-slate-400

          "

        >

          Monitor services, metrics and server resources.

        </p>

      </div>



      {/* HEALTH */}

      <div

        className="

          grid

          grid-cols-1

          md:grid-cols-2

          lg:grid-cols-4

          gap-5

          mb-8

        "

      >

        <StatusCard

          title="Elasticsearch"

          status={

            health?.elasticsearch ?? "Loading"

          }

        />



        <StatusCard

          title="Redis"

          status={

            health?.redis ?? "Loading"

          }

        />



        <StatusCard

          title="MongoDB"

          status={

            health?.mongodb ?? "Loading"

          }

        />



        <StatusCard

          title="Celery"

          status={

            health?.celery ?? "Loading"

          }

        />

      </div>



      {/* METRICS */}

      <div

        className="

          grid

          grid-cols-1

          md:grid-cols-3

          gap-5

          mb-8

        "

      >

        <div

          className="

            bg-white

            dark:bg-slate-900



            border

            border-slate-200

            dark:border-slate-700



            rounded-2xl

            p-6



            shadow-sm

          "

        >

          <h3

            className="

              text-slate-500

              dark:text-slate-400

            "

          >

            Indexed Documents

          </h3>



          <p

            className="

              text-4xl

              font-bold

              mt-4



              text-slate-900

              dark:text-white

            "

          >

            {metrics.documents ?? 0}

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

            p-6



            shadow-sm

          "

        >

          <h3

            className="

              text-slate-500

              dark:text-slate-400

            "

          >

            Conversations

          </h3>



          <p

            className="

              text-4xl

              font-bold

              mt-4



              text-slate-900

              dark:text-white

            "

          >

            {metrics.conversations ?? 0}

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

            p-6



            shadow-sm

          "

        >

          <h3

            className="

              text-slate-500

              dark:text-slate-400

            "

          >

            Queue Size

          </h3>



          <p

            className="

              text-4xl

              font-bold

              mt-4



              text-slate-900

              dark:text-white

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

          gap-5

        "

      >

        <div

          className="

            bg-white

            dark:bg-slate-900



            border

            border-slate-200

            dark:border-slate-700



            rounded-2xl

            p-6



            shadow-sm

          "

        >

          <h3

            className="

              text-slate-500

              dark:text-slate-400

            "

          >

            CPU Usage

          </h3>



          <p

            className="

              text-5xl

              font-bold

              mt-5



              text-slate-900

              dark:text-white

            "

          >

            {resources.cpu ?? 0}%

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

            p-6



            shadow-sm

          "

        >

          <h3

            className="

              text-slate-500

              dark:text-slate-400

            "

          >

            Memory Usage

          </h3>



          <p

            className="

              text-5xl

              font-bold

              mt-5



              text-slate-900

              dark:text-white

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