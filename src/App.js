import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Ratings from "./Components/Ratings";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <div className="container">
        <Header />
        <Main />
        <Ratings />
      </div>
      <Footer />
    </div>
  );
}

export default App;
