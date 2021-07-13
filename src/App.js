import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import SideBar from './Components/SideBar';
import Content from './Components/Content';
function App() {
  return (
    <div>
        <Header />
        <SideBar/>
        <Content/>
        <Footer/>
    </div>
  );
}

export default App;
