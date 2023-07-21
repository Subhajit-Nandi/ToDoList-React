import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddTodo = ({ addTodo }) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
        }
        else {
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }

    return (
        <div className='container py-3'>
            <h3 className='text-center'>Add A ToDo</h3>
            <Form onSubmit={submit}>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Todo Title</Form.Label>
                    <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="desc">
                    <Form.Label>Todo Description</Form.Label>
                    <Form.Control type="text" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="abcd...." />
                </Form.Group>
                <Button className="btn btn-success btn-sm" variant="primary" type="submit">
                    Add Todo
                </Button>
            </Form>
        </div>
    )
}

export default AddTodo
