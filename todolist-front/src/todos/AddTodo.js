import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddTodo = () => {
    let navigate = useNavigate();
    const [todo, setTodo] = useState({
        title: "",
        content: "",
        deadline: "",
    });

    const onInputChange = (e) => {
        setTodo({ ...todo, [e.target.name]: e.target.value });
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/todo", todo);
        navigate("/");
    };
    const { title, content, deadline } = todo;
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Register Todo</h2>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="Title" className="form-label">
                                Title
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter your title"
                                name="title"
                                value={title}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Content" className="form-label">
                                Content
                            </label>
                            <textarea
                                type={"text"}
                                className="form-control"
                                placeholder="Enter your content"
                                name="content"
                                value={content}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Deadline" className="form-label">
                                Deadline
                            </label>
                            <input
                                type={"datetime-local"}
                                className="form-control"
                                placeholder="Enter your deadline"
                                name="deadline"
                                value={deadline}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-outline-primary"
                        >
                            Submit
                        </button>
                        <Link className="btn btn-outline-danger mx-2" to="/">
                            Cancel
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddTodo;
