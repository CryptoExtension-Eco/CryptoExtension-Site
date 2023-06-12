import { HomePages, DashboardPages, DownloadPages } from './Components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DownToUp } from './Components/Widget';
import Login from './Components/Login';
import { API, MobileApp, Blockchain, Crypto } from './Components/Ecosystem';
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
        <Route exact path="/" element={<DownToUp/>}/>
      </Routes>
      <Routes>
        <Route exact path="/login" element={<Login/>}/>
      </Routes>
      <Routes>
        <Route exact path="/api" element={<API/>}/>
      </Routes>
      <Routes>
        <Route exact path="/mobileapp" element={<MobileApp/>}/>
      </Routes>
      <Routes>
        <Route exact path="/blockchain" element={<Blockchain/>}/>
      </Routes>
      <Routes>
        <Route exact path="/crypto" element={<Crypto/>}/>
      </Routes>
     </BrowserRouter>
    </>
  ); 

}

export default App;
