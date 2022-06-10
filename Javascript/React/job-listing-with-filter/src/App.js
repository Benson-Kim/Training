import User from './Components/User';
import Data from './data.json'

import { useState, useEffect } from 'react';
import FilterContainer from './Components/FilterContainer';

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
      
      <div className="flex flex-col bg-teal-50 ">
        {
          levelFilter === "" && roleFilter === "" && langFilter.length === 0 && toolFilter.length === 0
            ? null :

            <FilterContainer
              setLevelFilter={setLevelFilter}
              setRoleFilter={setRoleFilter}
              setlangFilter={setlangFilter}
              setToolFilter={setToolFilter}
              clearFilters={clearFilters}
              levelFilter={levelFilter}
              roleFilter={roleFilter}
              langFilter={langFilter}
              toolFilter={toolFilter} />
        }

        <div className=''>
          {filtereddata.map((userdata) => (
            <div className="" key={userdata.id}>
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
