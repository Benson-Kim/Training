import './App.css';
import User from './User';
import Data from './data.json'

import { useState, useEffect } from 'react';

function App() {

  const [levelFilter, setLevelFilter] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [langFilter, setlangFilter] = useState([]);
  const [toolFilter, setToolFilter] = useState([]);

  const [filtereddata, setFilteredData] = useState([])

  useEffect(() => {
    let data = [...Data];

    if (levelFilter)
      data = data.filter(skill => skill.level === levelFilter)

    if (roleFilter)
      data = data.filter(skill => skill.role === roleFilter)

    if (langFilter.length > 0)
      data = data.filter(skill => langFilter.every(lang => skill.languages.includes(lang)))

    if (toolFilter.length > 0) 
      data = data.filter(skill => toolFilter.every(tool => skill.tools.includes(tool)))
    
    setFilteredData(data)

  }, [levelFilter, roleFilter, langFilter, toolFilter])

  const clearFilters = () => {
    setLevelFilter("")
    setRoleFilter("")
    setlangFilter("")
    setToolFilter("")
  }

  return (
    <>
      <header>
        <img src="./bg-header-desktop.svg" alt="" />
      </header>
      <div className="dc_flex">

        {
          levelFilter === "" && roleFilter === "" && langFilter.length === 0 && toolFilter.length === 0
            ? null :
            <div className="clear-container">
              <div class="clear">
                {
                  levelFilter && (
                    <div className='filter-btn' >
                      <span>{levelFilter} </span>
                      filterbtn()
                      <button><img src='./images/icon-remove.svg' alt="" onClick={() => setLevelFilter("")} /> </button>
                    </div>
                  )
                }
                {
                  roleFilter && (
                    <div className='filter-btn' >
                      <span>{roleFilter} </span>
                      <button><img src='./images/icon-remove.svg' alt="" onClick={() => setRoleFilter("")} /> </button>
                    </div>
                  )
                }
                {
                  langFilter.length > 0 && langFilter.map(lang => (
                    <div className='filter-btn' >
                      <span>{lang} </span>
                      <button><img src='./images/icon-remove.svg' alt="" onClick={() => setlangFilter(langFilter.filter(l => l !== lang))} /> </button>
                    </div>
                  ))
                }
                {
                  toolFilter.length > 0 && toolFilter.map(tool => (
                    <div className='filter-btn' >
                      <span>{tool} </span>
                      <button><img src='./images/icon-remove.svg' alt="" onClick={() => setToolFilter(toolFilter.filter(t => t !== tool))} /> </button>
                    </div>
                  ))
                }
              </div>
              <div class="clearbtn">
                <button onClick={() => clearFilters()} >Clear</button>
              </div>

            </div>
        }

        <div className=''>
          {filtereddata.map((userdata) => (
            <div className="dr_flex container" key={userdata.id}>
              <User userdata={userdata}
                setLevelFilter={setLevelFilter}
                setRoleFilter={setRoleFilter}
                setlangFilter={setlangFilter}
                setToolFilter={setToolFilter}
                langFilter={langFilter}
                toolFilter={toolFilter}
              />
            </div>

          ))}
        </div>
      </div>
    </>
  );
}

export default App;
