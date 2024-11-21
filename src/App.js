import "./App.css";
import Chart_1 from "./Components/Chart_1";
import Filter from "./Components/Filter";
import Header from "./Components/Header";
import SideNavBar from "./Components/SideNavBar";
import Table from "./Components/Table";
import TrackedFrequency from "./Components/TrackedFrequency";



function App() {
  return (
    <div className="flex h-screen bg-gray-900">
      <SideNavBar />

      {/* Main Content Section */}
      <div className="w-[95%] h-screen overflow-y-auto">
        <Header />
        <Filter />
        <Chart_1 />
        < Table/>
        <TrackedFrequency />
      </div>
    </div>
  );
}

export default App;