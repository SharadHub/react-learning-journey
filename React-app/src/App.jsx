import "./App.css"
import Compo from "./component/example1/Compo";

function App() {
  return (
    <div>
      <h1 className="text-blue-400">Hello</h1>
      {/* <a href="" src = {}></a> */}
      <Compo user="Thomas Shelby" email="bishalbista737@gmail.com" age={22}/>
    </div>
  );
}

export default App;