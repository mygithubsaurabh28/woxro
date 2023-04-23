import Hiring from './Components/Hiring';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Background from './Components/Background';
import Services from './Components/Services';
import Chat from './Components/Chat';
import './App.css'

function App() {
  return (
    <div className='App'>
      <Hiring/>
      <Header/>
      <Navbar/>
      <Background/>
      <Services/>
      <Chat/>
    </div>
  );
}

export default App;
