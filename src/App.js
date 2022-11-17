import './App.css';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';

function App() {
  return (
    // BEM
    <div className="app">

    {/* Sidebar */}
    <Sidebar/>
    {/* Feed */}
    <Feed/> 
    {/* Widgets */}

    </div>
  );
}

export default App;
