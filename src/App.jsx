import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Body from "./components/Body";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <div className="content-container">
          <SideBar />
          <Body />
        </div>
      </div>
    </div>
  );
}

export default App;
