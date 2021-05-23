import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./commonComponent/navbar"; 
import Nav from "./commonComponent/nav"
import Slider from  "./commonComponent/slider" 
import Products from "./pages/landingPage/products/products"
import Footer from  "./commonComponent/footer" 
// import Routing from  "./routing/routing" 


function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Nav />
      <Slider />
      <Products />
      {/* <Routing /> */}
      <Footer />
    </div>
  );
}

export default App;
