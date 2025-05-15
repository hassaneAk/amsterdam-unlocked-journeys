
import * as React from 'https://esm.sh/react@18';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Index from "./pages/Index";
import Maps from "./pages/Maps";
import Quiz from "./pages/Quiz";
import TopLists from "./pages/TopLists";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Create a client
const queryClient = new QueryClient();

// Define the App component as a function that returns JSX
const App = () => {
  return React.createElement(
    QueryClientProvider,
    { client: queryClient },
    React.createElement(
      TooltipProvider,
      null,
      React.createElement(Toaster, null),
      React.createElement(Sonner, null),
      React.createElement(
        BrowserRouter,
        null,
        React.createElement(
          'div',
          { className: "flex flex-col min-h-screen" },
          React.createElement(Navbar, null),
          React.createElement(
            'main',
            { className: "flex-grow" },
            React.createElement(
              Routes,
              null,
              React.createElement(Route, { path: "/", element: React.createElement(Index, null) }),
              React.createElement(Route, { path: "/maps", element: React.createElement(Maps, null) }),
              React.createElement(Route, { path: "/quiz", element: React.createElement(Quiz, null) }),
              React.createElement(Route, { path: "/top-lists", element: React.createElement(TopLists, null) }),
              React.createElement(Route, { path: "/about", element: React.createElement(About, null) }),
              React.createElement(Route, { path: "/contact", element: React.createElement(Contact, null) }),
              React.createElement(Route, { path: "*", element: React.createElement(NotFound, null) })
            )
          ),
          React.createElement(Footer, null)
        )
      )
    )
  );
};

export default App;
