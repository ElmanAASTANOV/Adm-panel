import { get as getUser, update as updateUser } from 'api/Users';
import { Input } from 'components/Input';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Button } from 'components/Button';

const UserPage = () => {
    const [user, setUser] = useState({ loading: false })
    const { id } = useParams();
    useEffect(() => {
        setUser(old => ({ ...old, loading: true }));
        getUser({ id })
            .then(res => setUser(old => ({ ...old, ...(res?.data || {}), loading: false })))
            .catch(err => { console.log(err); setUser(old => ({ ...old, loading: false })) })

    }, [id])
    return (
        <div className="user-page">
            <Input value={user['first_name']} onChange={text => setUser(old => ({ ...old, first_name: text }))} />
            <Input value={user['last_name']} onChange={text => setUser(old => ({ ...old, last_name: text }))} />
            <Input value={user['username']} onChange={text => setUser(old => ({ ...old, username: text }))} />
            <Button onClick = {()=>{
                const {first_name, last_name, username} = user;
               updateUser({id, user: {first_name, last_name, username, roles: [1,2]}}).then().catch()
            }}>Save</Button>
        </div>
    )
}

export default UserPage;