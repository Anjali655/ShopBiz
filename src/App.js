import './App.css';
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from "./common/header";
import Sidebar from './common/sidebar';
import Footer from './common/footer';
// import Routes from "./routes"

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              <Outlet />
            </div>
          </main>

        </div>
      </div>
      
      <Footer />
    </>
  );
}

export default App;
