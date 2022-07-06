import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import Header from "./components/Header";
import Movies from "./components/Movies";
import Movie from "./components/Movie";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header>
          <Routes>
            <Route path="/" element={<Outlet />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movie" element={<Movie />} />
          </Routes>
        </Header>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
