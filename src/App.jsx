import {BrowserRouter , Routes, Route} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/dashboard';
import Upload from './pages/upload';
import Chat from './pages/chat';
import History from './pages/history';
import Settings from './pages/settings';

function App() {
  return (
    <BrowserRouter>
        <MainLayout>
                <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/upload" element={<Upload />} />
                        <Route path="/chat" element={<Chat />} />
                        <Route path="/history" element={<History />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/chat/:chatId" element ={<Chat />}/>
                </Routes>
        </MainLayout>
    </BrowserRouter>
  );
}

export default App;
