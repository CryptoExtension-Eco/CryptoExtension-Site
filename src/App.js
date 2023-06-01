import { HomePages, DashboardPages, DownloadPages } from './Components';
import { ChatBot, DownToUp } from './Components/Widget';
import './scss/App.scss'

function App() {
  return (
    <>
      <HomePages/>
      <DashboardPages/>
      <DownloadPages/>
      <ChatBot/>
      <DownToUp/>
    </>
  );
}

export default App;
