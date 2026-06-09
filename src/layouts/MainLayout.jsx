import Sidebar from "../components/Sidebar";

function MainLayout({ children }) {
  return (<>
    
    <div className="flex bg-slate-100 min-h-screen">

      <Sidebar />
      

      <div className="flex-1 p-8 overflow-auto">
        {children}
      </div>

      
    
    </div>
    </>
  );
}

export default MainLayout;