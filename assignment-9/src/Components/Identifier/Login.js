import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../fireConfig';
import NavBar from '../NavBar/NavBar';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';




!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();


const Login = () => {
    const [newUser, setNewuser] = useState(true);
    const [user, setUser] = useState({
        isSignedIn: false,
        displayName: '',
        email: '',
        password: '',
        error: ''
    })
    console.log(user);
    const [loggedinuser, setloggedinuser]= useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const getInfo = (e) => {
        let isFormValid = true;

        if (e.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value);

        }
        if (e.target.name === 'password') {
            isFormValid = /\d{1}/.test(e.target.value);

        }
        if (isFormValid) {
            const newUser = { ...user }
            newUser[e.target.name] = e.target.value;
            setUser(newUser);
        }


    }
    const submitData = (e) => {
        // console.log(user.email, user.password);
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    console.log(userCredential.user);
                    // const {displayName}=userCredential.user
                    const newUserinfo = { ...user };
                    newUserinfo.isSignedIn= true;
                    newUserinfo.error = '';
                    newUserinfo.success = true;
                    setUser(newUserinfo);
                    updateUserName(user.displayName);
                    setloggedinuser(newUserinfo);

                    history.replace(from);

                })
                .catch((error) => {
                    const newUserinfo = { ...user };
                    newUserinfo.error = error.message
                    setUser(newUserinfo);
                });
        }
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    console.log(userCredential.user);
                  
                    const newUser = { ...userCredential.user };
                    newUser.isSignedIn= true;
                    newUser.error = '';
                    newUser.success = true;
                    setUser(newUser);
                    setloggedinuser(newUser);
                    history.replace(from);
                })
                .catch((error) => {
                    const newUser = { ...user };
                    newUser.error = error.message
                    setUser(newUser);
                });
        }
        e.preventDefault();

    }
    const googleSignin = () => {
        const Google = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(Google)
            .then((result) => {
                console.log(result.user);
                const {displayName,email}= result.user;
                const signedInUser={
                    isSignedIn: true,
                    displayName,
                    email
                }            
                setUser(signedInUser);
                setloggedinuser(signedInUser);
                history.replace(from);

            }).catch((error) => {
                var errorMessage = error.message;
                console.log(errorMessage);
            });
    }
    const fbSignin = () => {
        var fbprovider = new firebase.auth.FacebookAuthProvider();
        firebase
            .auth()
            .signInWithPopup(fbprovider)
            .then((result) => {
                console.log(result);
                const {displayName,email}= result.user;
                const signedInUser={
                    isSignedIn: true,
                    displayName,
                    email:email
                }            
                setUser(signedInUser);
                setloggedinuser(signedInUser);
                history.replace(from);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var credential = error.credential;
                console.log(errorCode, errorMessage, credential)

            });
    }
    const updateUserName = name =>{
        const user = firebase.auth().currentUser;
    
        user.updateProfile({
          displayName: name,
        }).then(function() {
          console.log("congrates")
        }).catch(function(error) {
          console.log(error)
        });
        console.log(name);
      }


    return (

        <div className='container'>
            <NavBar />
            <div className='border container w-50 text-center py-3 mt-5'>
                {newUser ? <h1>Create Your Account</h1> : <h1>Login</h1>}


                <form onSubmit={submitData} className='text-center mt-5'>
                    {newUser && <input onBlur={getInfo} type="name" className="form-control mb-3" name="displayName" placeholder='Name' required />}
                    <input onBlur={getInfo} type="email" className="form-control mb-3" name="email" placeholder='Email' required />
                    <input onBlur={getInfo} type="password" className="form-control mb-3" name="password" placeholder="Password" required />
                    <input type="submit" className=" form-control btn btn-primary" value={newUser?'Sign Up': 'Login'} />
                
                </form>
                <div>
                    {newUser ? <p>Already have an account?<span style={{ fontWeight: 'bolder' }} onClick={() => setNewuser(!newUser)} > Login</span> </p> : <p>Don't have an account <span style={{ fontWeight: 'bolder' }} onClick={() => setNewuser(!newUser)}>Sign Up</span></p>}
                    <p style={{ color: "red" }}>{user.error}</p>
                    { user.success && <p style={{color: 'green'}}>User { newUser ? 'created' : 'Logged In'} successfully</p>}
                    
                </div>

            </div>
            <div className='container text-center' >
                <button onClick={googleSignin} className="btn btn-primary m-3 rounded-pill">Continue with Google</button>
                <br />
                <button onClick={fbSignin} className="btn btn-primary m-3 rounded-pill">Continue With Facebook</button>
                <br />
            </div>
        </div>
    );
};

export default Login;