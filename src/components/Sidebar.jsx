import { Link } from "react-router-dom";

function Sidebar() {
        return (
                <div className="w-64 h-screen bg-slate-900 text-white p-5">
                        <h1 className="text-xl font-bold mb-10">AI Knowledge Management</h1>
                        <div className="flex flex-col gap-5">
                                <Link to="/" >Dashboard </Link>
                                <Link to="/upload">Upload</Link>
                                <Link to="/chat">Chat</Link>
                                <Link to="history">History</Link>
                                <Link to="/settings">Settings</Link>
                        </div>
                </div>
        );
}

export default Sidebar;