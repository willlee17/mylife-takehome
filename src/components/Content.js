import React, { useState, useEffect} from 'react';

const Content = (props) => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("featured");


  useEffect(() => {
    setItems(props.items);
  }, []);

  useEffect(() => {
    setFilteredItems(
      items.filter((item) => item.content.toLowerCase().includes(search.toLowerCase()))
    );
  }, [search, items]);


  useEffect(() => {
    if (sortBy == "featured") {
      setFilteredItems(items.filter((item) => item.content.toLowerCase().includes(search.toLowerCase())));
    }  else if (sortBy == "a-z") {
      const sortedArr = filteredItems.sort((a,b) => a.content.localeCompare(b.content))
      setFilteredItems(sortedArr.slice())
    }  else if (sortBy == "z-a") {
      const sortedArr = filteredItems.sort((a,b) => b.content.localeCompare(a.content))
      setFilteredItems(sortedArr.slice())
    }
  }, [sortBy])

  return (
    <div>
      <div className="content__filter">
       <label for="search">Search By:</label>
        <input
          type="text"
          name="seatch" 
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <label for="items">Sort By:</label>
        <select name="items" id="items" value={sortBy} onChange={(e) => setSortBy(e.target.value)} >
          <option value="featured">Featured</option>
          <option value="a-z">A-Z</option>
          <option value="z-a">Z-A</option>
          </select>
      </div>

      <div className="content__container">
      {
        filteredItems.map(item => (
          <div className="content__item">
            {item.content}
          </div>
        ))
      }
      </div>
    </div>
  );
}

export default Content;
