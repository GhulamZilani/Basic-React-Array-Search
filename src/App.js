import { useState } from "react" 

let names = [
  "React",
  "Angular",
  "Mangooge",
  "HTML",
  "CSS",
  "Python",
  "Java",
  "JavaScript",
  "Redux",
  "SQL",
  "MongoogeDB",
  "DBMS",
]
function App() {
  const [searchValue, setSearchValue] = useState("")
  const [isSearch, setIsSearch] = useState(false);

  const searchHandler = (e) => {
    let targetVal = e.target.value;
    if(targetVal){
      setIsSearch(true);
      setSearchValue(targetVal)
    }
    else
    {
      setIsSearch(false);
      setSearchValue('')
    }
  }

  return (
    <div className="App">
      <h2>Search</h2>
      <input
        id="search-input"
        type="text"
        name="search"
        // value={searchValue}
        onChange={(e) => searchHandler(e)}
      />
      <h2>Results</h2>
      <ul>

        {isSearch && names
          .filter(name => name.includes(searchValue))
          .map(name => {
            return <li key={name}>{name} </li>
          })}
      </ul>
    </div>
  )
}

export default App
