import axios from 'axios';
import './UserList.css'
import icon from './icon.jpg'
import React , {useEffect,useState}from 'react'
const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')

        .then(response =>{console.log(response.data)
            setUsers(response.data)
        })

        .catch(error => {
            console.log(error)
        })
    }, [setUsers])
    return (
        <ul className='container'>
            <img  className='icon'src={icon} alt="user icon"/>
            <h1 className='title'>List of users</h1>
            {users.map(user => (
            <div className='users'>
                <p key={user.id}> Name : {user.name}</p>
                <p> UserName : {user.username}</p>
                <p>Email: {user.email}</p>
                
            </div>
            ))}
        </ul>
    )
}

export default UserList
