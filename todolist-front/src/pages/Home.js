import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

const Home = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        loadTodos();
    }, []);
    const loadTodos = async () => {
        const result = await axios.get("http://localhost:8080/todos");
        setTodos(result.data);
    };
    const deleteTodo = () => {};
    return (
        <div className="container">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>タイトル</th>
                        <th>締切</th>
                        <th>アクション</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo) => (
                        <tr key={todo.id}>
                            <td>{todo.title}</td>
                            <td>{todo.deadline.replace("T", " ")}</td>
                            <td>
                                <Link
                                    className="btn btn-primary mx-2"
                                    to={`/viewtodo/${todo.id}`}
                                >
                                    View
                                </Link>
                                <Link
                                    className="btn btn-outline-primary mx-2"
                                    to={`/edittodo/${todo.id}`}
                                >
                                    Edit
                                </Link>
                                <button
                                    className="btn btn-danger mx-2"
                                    onClick={() => deleteTodo(todo.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default Home;
