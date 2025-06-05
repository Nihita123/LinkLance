import React from "react";
import Navbar from "@/components/Navbar";
import Home from "@/pages/Home";

function App() {
  return (
    <div>
      <Navbar />
      <main className="pt-24">
        <Home />
      </main>
    </div>
  );
}

export default App;
