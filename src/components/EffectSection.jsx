import { useCallback, useEffect, useState } from "react"
import Button from "./Button/Button"
import Modal from "./Modal/Modal"
import useInput from "../hooks/useInput"

export default function EffectSection() {
    const input = useInput()
    const [modal, setModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])

    const fetchUsers = useCallback(async() => {
        setLoading(true)
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const users = await response.json()
            setUsers(users)
        } catch (error) {
            console.error('Error fetching users:', error)
        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        fetchUsers()
    }, [fetchUsers])

    return (
        <section>
            <h3>Effects</h3>

            <Button BtnClick={() => setModal(true)} style={{marginBottom: '1rem'}}>Открыть информацию</Button>
            <Modal open={modal}>
                <h3>Hello from modal</h3>
                <p>We will now start getting familiar with probably the most important topic of this course, namely the React library. Let's start by making a simple React application as well as getting to know the core concepts of React.</p>
            <Button BtnClick={() => setModal(false)}>Close moda</Button>
            </Modal>

            {loading && <p>Loading ...</p>}
            
            {/* ДОБАВЛЕНО: отображение пользователей чтобы использовать переменную users */}
            {!loading && users.length > 0 && (
                <>
                    <input type="text" className="control" {...input}/>
                    <h6>{input.value}</h6>
                    <ul>
                        {users
                            .filter(user => user.name.toLowerCase().includes(input.value.toLowerCase()))
                            .map(user => (<li key={user.id}>{user.name}</li>
                            
                        ))}
                    </ul>
                </>
            )}
        </section>
    )
}