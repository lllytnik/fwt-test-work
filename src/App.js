import { BrowserRouter } from "react-router-dom";
import './App.css';
import Desctop from './page/desctop/Desctop';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Desctop />
      </div>
    </BrowserRouter>

  );
}
export default App;