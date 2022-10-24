import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
    <Header />
    {notes.map((e) => {
        return (<Note 
        key={e.key} 
        head={e.title} 
        cont={e.content} />
    );})}
    <Footer />
    </div>
);
}

export default App;
