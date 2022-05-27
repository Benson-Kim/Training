import React from 'react'
import './Home.css'

const users = [
    { name: "John Doe", id: 1 },
    { name: "Jane Doe", id: 2 },
    { name: "Billy Doe", id: 3 }
];

export default function Home() {
    
    const userList = users.map(user => user.name)
    
    return (
        <div className='usernames'>
            <h3>User names</h3>
            <ul>
                
                
                <li>{userList}</li>
            </ul>
        </div>
    )
}