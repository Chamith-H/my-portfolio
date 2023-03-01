import Footer from "./Components/Layouts/Footer/Footer";
import Header from "./Components/Layouts/Header/Header";
import MainRoutes from "./Components/Routings/MainRoutes";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <MainRoutes></MainRoutes>
      <Footer></Footer>
    </div>
  );
}

export default App;
