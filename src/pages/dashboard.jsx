function Dashboard() {
  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-5">

        <div className="bg-white p-6 rounded-xl shadow">
          <h3>Total Documents</h3>
          <p className="text-3xl font-bold">
            128
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3>Total Users</h3>
          <p className="text-3xl font-bold">
            35
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3>Total Searches</h3>
          <p className="text-3xl font-bold">
            4520
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3>Queries Today</h3>
          <p className="text-3xl font-bold">
            245
          </p>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;