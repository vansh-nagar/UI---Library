import { AppSidebar } from "@/components/mine/dashboard/app-sidebar";
import Navbar from "@/components/mine/landing-page/navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <Navbar />
      {children}
    </SidebarProvider>
  );
};

export default Layout;
