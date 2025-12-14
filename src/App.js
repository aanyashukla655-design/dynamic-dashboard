import { DashboardProvider } from "./context/DashboardContext";
import Dashboard from "./components/Dashboard";
import "./styles.css";

function App() {
  return (
    <DashboardProvider>
      <Dashboard />
    </DashboardProvider>
  );
}

export default App;
