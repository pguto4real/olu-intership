import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Explore from "./pages/Explore";
import Author from "./pages/Author";
import ItemDetails from "./pages/ItemDetails";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { DataContext } from "./Helper/Context";
import { useState } from "react";
import Test from "./pages/Test";

function App() {
  const [newItems, setNewItems] = useState([]);
  const [exploreData, setExploreData] = useState([]);
  const [authorData, setAuthorData] = useState([]);
  const [isAauthorLoading, setIsAauthorLoading] = useState(true);
  const [itemData, setItemData] = useState(true);
  const [ isItemLoading, setIsIsItemLoading] = useState(true);

  return (
    <Router>
      <DataContext.Provider
        value={{
          itemData, setItemData, isItemLoading, setIsIsItemLoading,
          newItems,
          setNewItems,
          exploreData,
          setExploreData,
          authorData,
          setAuthorData,
          isAauthorLoading,
          setIsAauthorLoading,
        }}
      >
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test-animation" element={<Test />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/author/:id" element={<Author />} />
          <Route path="/item-details/:id" element={<ItemDetails />} />
        </Routes>
        <Footer />
      </DataContext.Provider>
    </Router>
  );
}

export default App;

