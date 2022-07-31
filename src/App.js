import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Navbar/Header';
import Banner from './Pages/Home/Banner/Banner';
import Products from './Pages/Products/Products';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Products></Products>
    </div>
  );
}

export default App;
