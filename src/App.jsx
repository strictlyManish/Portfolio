import Nav from "./components/Nav";
import Mainroutes from "./routes/Mainroutes";

function App() {
  return (
    <div className="bg-gray-800 overflow-x-hidden min-h-screen scroll-smooth">
      <Nav />
      <Mainroutes />
    </div>
  );
}

export default App;
