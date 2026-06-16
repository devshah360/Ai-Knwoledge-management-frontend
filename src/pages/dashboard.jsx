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

        console.log(
          "Dashboard Stats:",
          dashboardStats
        );

        console.log(
          "Search Analytics:",
          searchAnalytics
        );

        console.log(
          "Upload Analytics:",
          uploadAnalytics
        );
      } catch (error) {
        console.error(
          "Dashboard load error:",
          error
        );
      }
    };

    loadDashboard();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-5 mb-8">
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

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="font-bold mb-4">
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
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="font-bold mb-4">
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
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;