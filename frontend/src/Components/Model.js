import React, {useContext, useState} from 'react';
import { ContextProvider } from '../Global/Context';

const Model = () => {
    const {model} = useContext(ContextProvider)
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
    return <>
        {model ?<div className="model">
            <div className="model_container">
                {state.register ? <div className="model_form">
                    <form>
                        <div className="model_group" >
                            <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="insta_logo" />
                        </div>
                        <div className="model_group">
                            <input type="text" name="username" className="model_input" placeholder="username..." />
                        </div>
                        <div className="model_group">
                            <input type="email" name="email" className="model_input" placeholder="Email..." />
                        </div>
                        <div className="model_group">
                            <input type="password" name="password" className="model_input" placeholder="password..." />
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
                    <form>
                        <div className="model_group" >
                            <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="insta_logo" />
                        </div>
                        
                        <div className="model_group">
                            <input type="email" name="email" className="model_input" placeholder="Email..." />
                        </div>
                        <div className="model_group">
                            <input type="password" name="password" className="model_input" placeholder="password..." />
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
