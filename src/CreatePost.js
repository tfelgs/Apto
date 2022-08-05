import { Button, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { axios } from "axios"

function CreatePost() {
    const navigate = useNavigate();
    const [post, setPost] = useState({
        title: "",
        description: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setPost(prev => {
            return ({
                ...prev,
                [name]: value,
            });
        });
    };

    const handleClick = (event) => {
        event.preventDefault();

        axios
            .post("/create", post)
            .then(res => console.log(res))
            .catch((err) => console.log(err));
    };

    return (
        <div style={{ width: "90%", margin: "auto auto", textAlign: "center" }}>
            <h1>Create a post</h1>
            <Form>
                <Form.Group>
                    <Form.Control
                        name="title"
                        value={post.title}
                        placeholder="Title"
                        style={{ marginbottom: "1rem" }}
                        onChange={handleChange}
                    />
                    <Form.Control
                        name="description"
                        value={post.description}
                        placeholder="Description"
                        style={{ marginbottom: "1rem" }}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button
                    style={{ width: "100%", marginBottom: "1rem" }}
                    variant="outline-success"
                    onClick={handleClick}
                >
                    Create Post
                </Button>
            </Form>
            <Button
                style={{ width: "100%" }}
                variant="outline-dark"
                onClick={() => navigate(-1)}>
                BACK
            </Button>
        </div>
    );
}

export default CreatePost;