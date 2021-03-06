import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


export default function Login() {
const [error, setError] = useState(null);
const [loading, setLoading] = useState(false);
const emailRef = useRef();
const passwordRef = useRef();
const history = useHistory();

  const { login } = useAuth();

     async function handleSubmit(e) {
         e.preventDefault();
         try{
             setError("");
             setLoading("true");
         await login(emailRef.current.value, passwordRef.current.value);
         history.push("/");
         } catch(error){
             setError("Failed to sign in");
         }

         setLoading(false)
     }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Log In</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" required ref={emailRef}/>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" required ref={passwordRef}/>
                        </Form.Group>
                        <Button disabled={loading} className="w-100" type="submit">Login</Button>
                        <div className="w-100 text-center nt-2">
                            <Link to="/forgot-password">Forgot Password?</Link>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center nt-2">
                Need an account? <Link to="/signup">Sign Up</Link>
            </div>
        </>
    )
}

