import './App.css';
import React, { useState, useEffect} from 'react';
import Content from './components/Content';
import { Link, Switch, Route } from 'react-router-dom';
import axios from'axios';
import categoriesJSON from './assets/categories.json'

const App = () =>  {
  const [allCategories, setAllCategories] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [locations, setLocations] = useState([]);
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    // axios.get("https://sbt-tech-exercise-content.s3-us-west-1.amazonaws.com/content3.json")
    //   .then(res => setAllCategories(res.data))
    // Had trouble with CORS and proxy in my package.json. Due to time constraints I decided to move the json file into the assets folder. 

    setAllCategories(categoriesJSON)
  }, [])

  useEffect(() => {
    setCharacters(allCategories.filter(category => category.tag == "character"))
    setLocations(allCategories.filter(category => category.tag == "location"))
    setQuotes(allCategories.filter(category => category.tag == "quote"))
  }, [allCategories])


  return (
    <div className="App">
      <div className="header">
          <Link to="/">
            <button className="header__button">Home</button>
          </Link>
          <Link to="/characters">
            <button className="header__button">Characters</button>
          </Link>
          <Link to="/locations">
            <button className="header__button">Locations</button>
          </Link>
          <Link to="/quotes">
            <button className="header__button">Quotes</button>
          </Link>
      </div>

      <div className="content">
        <Switch>
          <Route exact path="/" component={(props) => (
              <Content
                {...props}
                items={allCategories}
              />
            )} />
          <Route path="/characters" component={(props) => (
              <Content
                {...props}
                items={characters}
              />
            )}/>
          <Route path="/locations" component={(props) => (
              <Content
                {...props}
                items={locations}
              />
            )}/>
          <Route path="/quotes" component={(props) => (
              <Content
                {...props}
                items={quotes}
              />
            )}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
