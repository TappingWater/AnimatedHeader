"use client";

import { motion, useCycle } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import MenuToggle from "./MobileMenu";

const Header = () => {
  const links = ["Home", "Products", "About"];
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [active, toggleActive] = useState('Home');

  // Tailwind styling
  const headerStyling = "fixed h-[120px] w-[100%] bg-blue-600 flex";
  const logoDivStyling = "flex-1 flex items-center pl-[20px]";
  const tabDivStyling =
    "hidden md:flex flex-1 flex-row flex space-x-[40px] mt-[70px] justify-end mr-[20px]";
  const mobileTabDivStyling =
    "flex sm:flex-1 justify-end mr-[20px] items-center md:hidden";
  const desktopTabStyling =
    "bg-black h-[25px] w-[100px] rounded-sm text-center text-white hover:cursor-pointer";
  const mobileTabStyling =
    "bg-black h-[25px] w-[80%] rounded-sm text-white hover:cursor-pointer z-100 pl-2";
  const logoStyling = "w-[50px] h-[50px] bg-black";
  const sideBarStyling =
    "fixed w-[30%] ml-[70%] h-[100vh] mt-[120px] flex flex-col items-center space-y-[20px] pt-4 bg-blue-300 md:hidden";

  // Variants for sidebar
  const sidebar = {
    open: { 
      x: '0%',        
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 40,
        staggerChildren: 0.07,
        delayChildren: 0.15    
      },
    },
    closed: {   
      x: '100%',     
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,   
        damping: 40,  
        staggerChildren: 0.05,
        staggerDirection: -1,
        bounce:  0
      },
    },
  };

  // Variants for mobile tabs
  const mobileTabVariants = {
    open: {
      y: 0,   
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,   
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  // Render menu tabs
  const renderMenuTabs = (useMobileStyling: boolean) => {
    return (
      <>
        {links.map((link) => (
          <Link href={link==="Home"?"":`/${link.toLowerCase()}`}>
            <motion.div
              whileHover={{ scale: 1.2, opacity: 0.8 }}
              whileTap={{ scale: 0.8, opacity: 0.8 }}
              transition={{ duration: 0.15 }}
              className={useMobileStyling ? mobileTabStyling : desktopTabStyling}
              variants={useMobileStyling ? mobileTabVariants : {}}
              key={link}
            >
              {link}
            </motion.div>
          </Link>
        ))}
      </>
    );
  };

  // Render sidebar
  const renderSideBar = () => {
    return (
      <motion.div variants={sidebar} className={sideBarStyling}>
        {renderMenuTabs(true)}
      </motion.div>
    );
  };

  return (
    <motion.div initial={false} animate={isOpen ? "open" : "closed"}>
      <header className={headerStyling}>
        <div className={logoDivStyling}>
          <motion.div
            animate={{
              scale: [1, 1.2, 1.2, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
            transition={{ repeat: Infinity, duration: 2 }}
            className={logoStyling}
          ></motion.div>
        </div>
        <div className={tabDivStyling}>{renderMenuTabs(false)}</div>
        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          className={mobileTabDivStyling}
        >
          <MenuToggle toggle={() => toggleOpen()} />
        </motion.div>
      </header>
      {renderSideBar()}
    </motion.div>
  );
};

export default Header;
