// import './App.css';
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
      
      <div className="flex flex-col bg-teal-50 ">
        {
          levelFilter === "" && roleFilter === "" && langFilter.length === 0 && toolFilter.length === 0
            ? null :

            <div className="flex py-5 px-2 mx-5 my-8 justify-between shadow-md rounded bg-white md:mx-20 md:px-8 transition-all duration-300">
              <div class="flex flex-wrap gap-2">
                {
                  levelFilter && (
                    <div className='bg-teal-50 text-teal-600 flex justify-center items-center pl-2 rounded-md ml-3 font-semibold' >
                      <span className='mr-2'>{levelFilter} </span>
                      <button className='cursor-pointer bg-cyan-800 text-cyan-100 text-lg p-2 rounded-r-lg hover:bg-teal-600'><img src='./images/icon-remove.svg' alt="" onClick={() => setLevelFilter("")} /> </button>
                    </div>
                  )
                }
                {
                  roleFilter && (
                    <div className='bg-teal-50 text-teal-600 flex justify-center items-center pl-2 rounded-md ml-3 font-semibold' >
                      <span className='mr-2'>{roleFilter} </span>
                      <button className='cursor-pointer bg-cyan-800 text-cyan-100 text-lg p-2 rounded-r-lg hover:bg-teal-600'><img src='./images/icon-remove.svg' alt="" onClick={() => setRoleFilter("")} /> </button>
                    </div>
                  )
                }
                {
                  langFilter.length > 0 && langFilter.map(lang => (
                    <div className='bg-teal-50 text-teal-600 flex justify-center items-center pl-2 rounded-md ml-3 font-semibold' >
                      <span className='mr-2'>{lang} </span>
                      <button className='cursor-pointer bg-cyan-800 text-cyan-100 text-lg p-2 rounded-r-lg hover:bg-teal-600'><img src='./images/icon-remove.svg' alt="" onClick={() => setlangFilter(langFilter.filter(l => l !== lang))} /> </button>
                    </div>
                  ))
                }
                {
                  toolFilter.length > 0 && toolFilter.map(tool => (
                    <div className='bg-teal-50 text-teal-600 flex justify-center items-center pl-2 rounded-md ml-3 font-semibold' >
                      <span className='mr-2'>{tool} </span>
                      <button className='cursor-pointer bg-cyan-800 text-cyan-100 text-lg p-2 rounded-r-lg hover:bg-teal-600'><img src='./images/icon-remove.svg' alt="" onClick={() => setToolFilter(toolFilter.filter(t => t !== tool))} /> </button>
                    </div>
                  ))
                }
              </div>

              <button className='text-slate-700 font-semibold hover:text-teal-500 hover:underline' onClick={() => clearFilters()} >Clear</button>

            </div>
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
