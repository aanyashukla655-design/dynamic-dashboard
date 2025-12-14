import Category from "./Category";
import SearchBar from "./SearchBar";
import { useDashboard } from "../context/DashboardContext";

const Dashboard = () => {
  const { categories } = useDashboard();

  return (
    <div className="container">
      <h1>Dynamic Dashboard</h1>
      <SearchBar />
      {categories.map(category => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Dashboard;
