
import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ChatAssistant from "../chat/ChatAssistant";
import { HomeBackground } from "../ui/background/HomeBackground";
import { PageBackground } from "../ui/background/PageBackground";

interface LayoutProps {
  children: ReactNode;
  isHomePage?: boolean;
}

const Layout = ({ children, isHomePage = false }: LayoutProps) => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col relative">
      {isHomePage ? <HomeBackground /> : <PageBackground />}
      <Navbar />
      <main className="flex-1 pt-20 relative z-0">
        {children}
      </main>
      <Footer />
      <ChatAssistant />
    </div>
  );
};

export default Layout;
