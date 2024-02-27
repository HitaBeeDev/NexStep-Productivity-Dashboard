import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import HomePage from "./HomePage";
import ToDoListPage from "./ToDoListSection/ToDoListPage";
import TimeTrackerPage from "./TimeTracker/TimeTrackerPage";
import HabitTrackerPageV2 from "./HabitSection/HabitTrackerPageV2";

function Container() {
  const [isOpen, setIsOpen] = useState(true);

  const sidebarWidth = isOpen ? "lg:w-48" : "lg:w-12";
  const contentMargin = isOpen
    ? "ml-10 mr-10 lg:ml-32"
    : "ml-10 mr-10 lg:ml-20";

  return (
    <div className="h-screen flex overflow-hidden">
      <div
        className={`fixed lg:static ${sidebarWidth} transition-width duration-300`}
      >
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div
        className={`flex-grow flex justify-center duration-300 ${contentMargin}`}
      >
        <Routes>
          <Route path="/" element={<HomePage isOpen={isOpen} />} />
          <Route path="/dashboard" element={<HomePage isOpen={isOpen} />} />
          <Route path="/habit-tracker" element={<HabitTrackerPageV2 />} />
          <Route path="/ToDo-List" element={<ToDoListPage />} />
          <Route path="/Time-Tracker" element={<TimeTrackerPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default Container;
