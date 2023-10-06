import React from 'react';
import Header from '../pages/Shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer';
import { useContext } from 'react';
import { ThemeContext } from '../provider/ThemeProvider';
import bgImage from './../assets/addProject.jpg'
const Main = () => {
      const { theme, toggleTheme } = useContext(ThemeContext);
      return (
            <div className={`flex bg-gradient-to-b from-[#000328] to-[#00458e]   text-white   flex-col min-h-screen ${theme === 'light' ? 'light' : 'dark'}`} >

                  <Header theme={theme} toggleTheme={toggleTheme} />
                  <Outlet />
                  <Footer />
            </div>
      );
};

export default Main;