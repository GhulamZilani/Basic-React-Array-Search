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

  const search = (e) => {
    let targetVal = e.target.value
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
        value={searchValue}
        onChange={search}
      />
      <h2>Results</h2>
      <ul>

        {isSearch && names
          .filter(name => name.match(new RegExp(searchValue, "i")))
          .map(name => {
            return <li key={name}>{name} </li>
          })}
      </ul>
    </div>
  )
}

export default App
