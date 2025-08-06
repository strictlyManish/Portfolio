import Nav from "./components/Nav";
import Mainroutes from "./routes/Mainroutes";

function App() {
  return (
    <div className="bg-gray-800 scroll-mb-0 scroll-ml-0">
      <Nav/>
      <Mainroutes/>
    </div>
  )
}

export default App