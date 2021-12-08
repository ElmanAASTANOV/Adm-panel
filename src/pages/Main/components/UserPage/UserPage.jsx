import Table from "components/Table";
import { getAll as getAllUsers } from 'api/Users';
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
const UserPage = () => {
    const [users, setUsers] = useState([])
    console.log(users)
    useEffect(() => {
        getAllUsers({page: 1, count:4})
            .then(res => setUsers(res?.data?.users || []))
            .catch(err => console.log(err))
    }, [])
    const columns = [{ title: "Name", key: "first_name" }, { title: "Surname", key: "last_name" }, { title: "Username", key: "username"},{ title: "Online", key: "is_active", render: (data)=> <Link to="/">{data.is_active ? "online" : "offline" }</Link> }]
    return (
        <div className="user-page">
            <Table columns={columns} data={users} />
        </div>
    )
}

export default UserPage;