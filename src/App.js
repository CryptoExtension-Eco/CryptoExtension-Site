import { HomePages, DashboardPages, DownloadPages } from './Components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChatBot, DownToUp } from './Components/Widget';
import Login from './Components/Login';
import './scss/App.scss'

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePages/>}/>
      </Routes>
      <Routes>
        <Route exact path="/" element={<DashboardPages/>}/>
      </Routes>
      <Routes>
        <Route exact path="/" element={<DownloadPages/>}/>
      </Routes>
      <Routes>
        <Route exact path="/" element={<ChatBot/>}/>
      </Routes>
      <Routes>
        <Route exact path="/" element={<DownToUp/>}/>
      </Routes>
      <Routes>
        <Route exact path="/login" element={<Login/>}/>
      </Routes>
     </BrowserRouter>
    </>
  ); 

}

export default App;
