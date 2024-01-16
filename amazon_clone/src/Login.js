import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Form, Container } from 'react-bootstrap'
import { auth } from './firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const signIn = e => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then(auth => {
            //if successfully signed in
            navigate('/')
        })
        .catch(error => alert(error.message))
  }
  
  const register = e => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
      .then(auth => {
            //if successfully registered
            if (auth) {
              navigate('/')
            }
        })
        .catch(error => alert(error.message))
  }
  
  return (
    <div className="bg-white p-4">
      <Form>
        <div className="d-flex align-items-center justify-content-center">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
            style={{ height: "auto", width: "100px" }}
            className="mb-3"
          />
        </div>
        <Container style={{ maxWidth: "500px" }} className="py-2 px-3 border border-secondary">
          <div className="mt-3">
            <h1>Sign-in</h1>
          </div>
          <Form.Group className="mb-3 mt-3">
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Enter email" 
              value={email} 
              onChange={e=>setEmail(e.target.value)}
            />
          </Form.Group>
        
          <Form.Group className="mb-4">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={e=>setPassword(e.target.value)}
            />
          </Form.Group>
          
          <div className="d-grid">
            <Button 
              variant="warning" 
              type="submit" 
              size="large" 
              onClick={signIn} 
            >
              Sign In
            </Button>
          </div>
          
          <div className="mb-3 mt-4">
            <small className="text-secondary">By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</small>
          </div>
          
          <div className="d-grid mb-4">
            <Button 
              variant="secondary" 
              type="submit" 
              size="large"
              onClick={register}
            >
              Create your Amazon Account
            </Button>
          </div>
        </Container>
      </Form>
    </div>
  )
}

export default Login