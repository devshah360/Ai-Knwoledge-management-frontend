import { useState, useEffect } from "react";

import KpiCard from "../components/KPICard";

import {
  getDashboardData,
  getSearchAnalytics,
  getUploadAnalytics,
} from "../services/dashboardApi";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

function Dashboard() {
  const [stats, setStats] = useState({});

  const [searchData, setSearchData] = useState([]);

  const [uploadData, setUploadData] = useState([]);

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const dashboardStats =
          await getDashboardData();

        const searchAnalytics =
          await getSearchAnalytics();

        const uploadAnalytics =
          await getUploadAnalytics();

        setStats(dashboardStats);

        setSearchData(searchAnalytics);

        setUploadData(uploadAnalytics);

      } catch (error) {
        console.error(error);
      }
    };

    loadDashboard();

  }, []);

  return (

    <div>

      <h1
        className="
          text-3xl
          font-bold
          mb-8

          text-slate-900
          dark:text-white
        "
      >
        Dashboard
      </h1>


      {/* KPI Cards */}

      <div
        className="
          grid

          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-4

          gap-6

          mb-8
        "
      >

        <KpiCard
          title="Documents"
          value={stats.total_documents || 0}
        />

        <KpiCard
          title="Users"
          value={stats.total_users || 0}
        />

        <KpiCard
          title="Queries"
          value={stats.total_queries || 0}
        />

        <KpiCard
          title="AI Chats"
          value={stats.total_ai_chats || 0}
        />

      </div>



      {/* Charts */}

      <div
        className="
          grid

          grid-cols-1
          xl:grid-cols-2

          gap-6
        "
      >


        {/* Search Analytics */}

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

          <h2
            className="
              text-xl

              font-bold

              mb-6

              text-slate-900

              dark:text-white
            "
          >
            Search Analytics
          </h2>


          <ResponsiveContainer
            width="100%"
            height={300}
          >

            <LineChart data={searchData}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="date" />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"

                dataKey="count"

                stroke="#2563eb"

                strokeWidth={3}

                dot={{ r: 4 }}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>




        {/* Upload Analytics */}

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

          <h2
            className="
              text-xl

              font-bold

              mb-6

              text-slate-900

              dark:text-white
            "
          >
            Document Upload Analytics
          </h2>

          <ResponsiveContainer
            width="100%"
            height={300}
          >

            <BarChart data={uploadData}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="date" />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="count"

                fill="#2563eb"

                radius={[8, 8, 0, 0]}
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>

  );
}

export default Dashboard;