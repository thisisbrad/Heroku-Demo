import "react";
import SearchBar from "./components/SearchBar";
import API from "./API";
import "./App.css";

function App() {
  const handleSearch = async (event) => {
    event.preventDefault();
    console.log("Search button clicked!", event.target.search.value);
    const response = await API.fetchImages(event.target.search.value);
    console.log("From Unsplash!", response);
  };

  return (
    <>
      <h1>Author Search</h1>
      <SearchBar onSubmit={handleSearch} />
    </>
  );
}

export default App;
