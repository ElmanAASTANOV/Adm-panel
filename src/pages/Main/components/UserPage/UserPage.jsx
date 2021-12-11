import Table from "components/Table";
import { Pagination } from 'antd';
import { getAll as getAllUsers } from 'api/Users';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const pageSize = 10;
const UserPage = () => {

    const [users, setUsers] = useState({})
    const [currentPage, setCurrentPage] = useState(1);
    console.log(users)
    useEffect(() => {
        getAllUsers({ page: 1, count: pageSize })
            .then(res => setUsers(res?.data || []))
            .catch(err => console.log(err))
    }, [])
    const columns = [{ title: "Name", key: "first_name" }, { title: "Surname", key: "last_name" }, { title: "Username", key: "username" }, { title: "Online", key: "is_active", render: (data) => <Link to="/">{data.is_active ? "online" : "offline"}</Link> }]
    return (
        <div className="user-page">
            <Table columns={columns} data={users.users} />
            <Pagination current={currentPage} onChange = {(page) => {
                setCurrentPage(page)
            }} total={users.total} defaultPageSize = {pageSize} showSizeChanger={false} />
        </div>
    )
}

export default UserPage;