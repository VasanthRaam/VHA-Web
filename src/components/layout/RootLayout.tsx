import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollRestoration } from "react-router-dom";

export function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-primary-500/30">
      <ScrollRestoration />
      <Navbar />
      <main className="flex-1 relative">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
