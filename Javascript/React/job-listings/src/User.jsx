import React from "react"

// const User = ({ userdata, setFilters, filters }) => {
const User = ({ userdata, setLevelFilter, setRoleFilter, langFilter, setlangFilter, toolFilter, setToolFilter }) => {

    const {
        logo, company, featured, position,
        postedAt, contract, location, role,
        level, languages, tools
    } = userdata

    return (
        <>
            <div className='dr_flex'>
                <div className="userimg">
                    <img src={logo} alt="" />
                </div>
                <div className="dc_flex user-details">
                    <div className="top">
                        <span>{company} </span>
                        {userdata.new && <button className='new'>new !</button>}
                        {featured && <button className='featured'>featured!</button>}
                    </div>
                    <span className="position">{position} </span>
                    <span className='extras' > {postedAt} . {contract} . {location}   </span>

                </div>
            </div>
            <div className='dr_flex' >
                {role && <span className="skill" onClick={() => setRoleFilter(role)} > {role} </span>}
                {level && <span className="skill" onClick={() => setLevelFilter(level)}> {level} </span>}

                {
                    languages !== '' ?
                        languages.map((language, index) => (
                            <span className="skill" key={index}
                                onClick={() => {
                                    if (!langFilter.includes(language)) {
                                        setlangFilter(prev => [...prev, language])
                                    }
                                }}>
                                {language}
                            </span>
                        ))
                        : ''
                }

                {
                    tools !== '' ?
                        tools.map((tool, index) => (
                            <span className="skill" key={index}
                                onClick={() => {
                                    if (!toolFilter.includes(tool)) {
                                        setToolFilter(prev => [...prev, tool])
                                    }
                                }}
                            >
                                {tool}
                            </span>
                        ))
                        : ''
                }
            </div>

        </>

    )
}

export default User