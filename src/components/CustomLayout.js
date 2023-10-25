import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../common/header';
import Footer from "../common/footer";
import Sidebar from '../common/sidebar';

function CustomLayout() {
    return (
        <div>
        {/* <Header /> */}
        {/* <div style={{ height: '30px' }}>kya hal hain</div> */}
        {/* <Sidebar/>
        <Outlet />
        <Footer /> */}

        <>
           
            {/* Header */}
            {/* <header className="bg-white shadow-lg">
                <div className="container mx-auto py-4 px-8 flex justify-between items-center">
                    <span className="text-xl font-semibold">Your Website</span>
                    <nav>
                        <a href="#" className="text-gray-600 hover:text-gray-900 mx-2">
                            Home
                        </a>
                        <a href="#" className="text-gray-600 hover:text-gray-900 mx-2">
                            About
                        </a>
                        <a href="#" className="text-gray-600 hover:text-gray-900 mx-2">
                            Services
                        </a>
                        <a href="#" className="text-gray-600 hover:text-gray-900 mx-2">
                            Contact
                        </a>
                    </nav>
                </div>
            </header> */}
            <Header />


            {/* Main Content */}
            <div className="container mx-auto flex flex-col lg:flex-row mt-8">
                {/* Sidebar */}
                <aside className="bg-gray-800 text-white w-full lg:w-1/5">
                    <div className="p-4">
                        <span className="text-2xl font-bold">Logo</span>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <a href="#" className="hover:text-gray-300">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-300">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-300">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-300">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </aside>
                {/* <Sidebar/> */}


                
                {/* Main Content Area */}
                <main className="w-full lg:w-4/5 p-8 overflow-y-scroll">
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4">Main Content</h2>
                        <p className="text-gray-800">
                            This is the main content area of your website. You can add your
                            content here.
                        </p>
                        <h2 className="text-2xl font-semibold mb-4">Main Content</h2>
                        <p className="text-gray-800">
                            This is the main content area of your website. You can add your
                            content here.
                        </p>
                        <h2 className="text-2xl font-semibold mb-4">Main Content</h2>
                        <p className="text-gray-800">
                            This is the main content area of your website. You can add your
                            content here.
                        </p>
                        <h2 className="text-2xl font-semibold mb-4">Main Content</h2>
                        <p className="text-gray-800">
                            This is the main content area of your website. You can add your
                            content here.
                        </p>
                        <h2 className="text-2xl font-semibold mb-4">Main Content</h2>
                        <p className="text-gray-800">
                            This is the main content area of your website. You can add your
                            content here.
                        </p>
                        <h2 className="text-2xl font-semibold mb-4">Main Content</h2>
                        <p className="text-gray-800">
                            This is the main content area of your website. You can add your
                            content here.
                        </p>
                        <h2 className="text-2xl font-semibold mb-4">Main Content</h2>
                        <p className="text-gray-800">
                            This is the main content area of your website. You can add your
                            content here.
                        </p>
                        <h2 className="text-2xl font-semibold mb-4">Main Content</h2>
                        <p className="text-gray-800">
                            This is the main content area of your website. You can add your
                            content here.
                        </p>
                        <h2 className="text-2xl font-semibold mb-4">Main Content</h2>
                        <p className="text-gray-800">
                            This is the main content area of your website. You can add your
                            content here.
                        </p>
                        <h2 className="text-2xl font-semibold mb-4">Main Content</h2>
                        <p className="text-gray-800">
                            This is the main content area of your website. You can add your
                            content here.
                        </p>

                        <h2 className="text-2xl font-semibold mb-4">Main Content</h2>
                        <p className="text-gray-800">
                            This is the main content area of your website. You can add your
                            content here.
                        </p>
                        <h2 className="text-2xl font-semibold mb-4">Main Content</h2>
                        <p className="text-gray-800">
                            This is the main content area of your website. You can add your
                            content here.
                        </p>
                        <h2 className="text-2xl font-semibold mb-4">Main Content</h2>
                        <p className="text-gray-800">
                            This is the main content area of your website. You can add your
                            content here.
                        </p>
                        <h2 className="text-2xl font-semibold mb-4">Main Content</h2>
                        <p className="text-gray-800">
                            This is the main content area of your website. You can add your
                            content here.
                        </p>
                        

                    </div>
                </main>
            </div>

            
            {/* Footer */}
            {/* <footer className="bg-gray-800 text-white text-center py-4 mt-8">
                <div className="container mx-auto">
                    © 2023 Your Website. All rights reserved.
                </div>
            </footer> */}
            <Footer className=" text-center py-4 mt-8"/>
        </>

    </div>
    );
}

export default CustomLayout;


