import {Alert, Box, Button, Container, Link, TextField, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {createUser} from "../firebase";
import {useNavigate} from "react-router-dom";
import {isLoggedIn, startSession} from "../session";
import { getDatabase, set, ref } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "../firebase.js";
export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [error, setError] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [age , setAge] = useState("");
  const auth = getAuth();
  const user = auth.currentUser;
  // redirect the user if he's already logged in
  useEffect(() => {
    if (isLoggedIn()) {
      navigate("/user");
    }
  }, [navigate]);

  const onSubmit = async (event) => {
    event.preventDefault();

    // validate the inputs
    if (!email || !password ) {
      setError("Please fill out all the fields.");
      return;
    }
    

    // clear the errors
    setError("");

    try {
      let registerResponse = await createUser(email, password);
      const db = getDatabase();
      set(ref(db, 'users/'+username), {
        name : name,
        country : country,
        phoneNumber : phoneNumber,
        email : email,  
        username : username, 
      });
      startSession(registerResponse.user);
      navigate("/user");
    } catch (error) {
      console.error(error.message);
      setError(error.message);
    }
  }

  return (
    <Container maxWidth="xs" sx={{mt: 15}}>
      <Typography variant="h5" component="h1" gutterBottom textAlign="center">
        Register
      </Typography>
      {error && <Alert severity="error" sx={{my: 2}}>{error}</Alert>}
      <Box component="form" onSubmit={onSubmit}>
      <TextField
          label="Name"
          variant="outlined"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{mt: 1}}
          fullWidth
        />
        <TextField
          label="Username"
          variant="outlined"
          autoComplete="user-username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          sx={{mt: 1}}
          fullWidth
        />
        <TextField
          label="Email"
          variant="outlined"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{mt: 1}}
          fullWidth
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{mt: 1}}
          fullWidth
        />
        <TextField
          label="Phone number"
          variant="outlined"
          autoComplete="phone"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          sx={{mt: 1}}
          fullWidth
        />
        <TextField
          label="Country"
          variant="outlined"
          autoComplete="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          sx={{mt: 1}}
          fullWidth
        />
        
        
        <Button variant="contained" type="submit" sx={{mt: 3}} fullWidth>Register</Button>
        <Box sx={{mt: 2}}>
          Already have an account? <Link href="/login">Login</Link>
        </Box>
      </Box>
    </Container>
  )
}