import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import RoutesApp from "./routes";

function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={1500} />
      <RoutesApp />
    </div>
  );
}

export default App;
