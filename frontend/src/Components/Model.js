import React, {useContext, useState} from 'react';
import { ContextProvider } from '../Global/Context';

const Model = () => {
    const {model, closeModel, register, login} = useContext(ContextProvider)
    const [state, setState] = useState({
        register: true,
        login: false
    })
    const formsToggle = () => {
        setState({
            ...state,
            register: !state.register,
            login: !state.login
        })
    }

    const closeForm = (e) => {
        const className = e.target.getAttribute("class");
        if (className === "model") {
            closeModel();
        }
    };

    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleInput = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    const registerUser = (e) => {
        e.preventDefault();
        console.log(inputs);
        register(inputs);
        setInputs({ username: "", email: "", password: "" });
    };

    const userLogin = (e) => {
        e.preventDefault();
        login(inputs);
    };
    return <>
        {model ?<div className="model" onClick={closeForm}>
            <div className="model_container">
                {state.register ? <div className="model_form">
                    <form onSubmit={registerUser}>
                        <div className="model_group" >
                            <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="insta_logo" />
                        </div>
                        <div className="model_group">
                            <input type="text" name="username" className="model_input" onChange={handleInput} placeholder="username..." />
                        </div>
                        <div className="model_group">
                            <input type="email" name="email" className="model_input" onChange={handleInput} placeholder="Email..." />
                        </div>
                        <div className="model_group">
                            <input type="password" name="password" className="model_input" onChange={handleInput} placeholder="password..." />
                        </div>
                        <div className="model_group">
                            <input type="submit" value="Register" className="btn btn-smart" />
                        </div>
                        <div className="model_group">
                            <span onClick={formsToggle}>Already have an account?</span>
                        </div>
                    </form>
                </div>
                :
                <div className="model_form">
                    <form onSubmit={userLogin}>
                        <div className="model_group" >
                            <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="insta_logo" />
                        </div>
                        
                        <div className="model_group">
                            <input type="email" name="email" className="model_input" onChange={handleInput} placeholder="Email..." />
                        </div>
                        <div className="model_group">
                            <input type="password" name="password" className="model_input" onChange={handleInput} placeholder="password..." />
                        </div>
                        <div className="model_group">
                            <input type="submit" value="Login" className="btn btn-smart" />
                        </div>
                        <div className="model_group">
                            <span onClick={formsToggle}>Create a new account?</span>
                        </div>
                    </form>
                </div> }
                
            </div>
        </div>:"" }
    </>
}

export default Model;
