import React, {createContext, useState} from 'react';
import { auth } from "../config";
export const ContextProvider = createContext();

const Context = (props) => {
    const [model, setModel] = useState(false)
    const [user, setUser] = React.useState(null);
    const [loader, setLoader] = React.useState(true)
    const openModel = () => {
        setModel(true)
    }
    const closeModel = () => {
        setModel(false);
    };

    const register = async (user) => {
        const { username, email, password } = user;
        try {
            const res = await auth.createUserWithEmailAndPassword(email, password);
            res.user.updateProfile({ displayName: username });
            setModel(false);
        } catch (error) {
            console.log(error);
        }
    };

    const logout = () => {
        auth
            .signOut()
            .then(() => {
                setUser(null);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const login = async (user) => {
        const { email, password } = user;
        const res = await auth.signInWithEmailAndPassword(email, password);
        setModel(false);
    };

    React.useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setUser(user);
            setLoader(false);
        });
    
        // fetch posts from firebase
        // db.collection("posts")
        //     .orderBy("currentTime", "desc")
        //     .onSnapshot((snp) => {
        //         setPosts(
        //         snp.docs.map((doc) => ({
        //             id: doc.id,
        //             title: doc.data().title,
        //             image: doc.data().image,
        //             username: doc.data().username,
        //         }))
        //     );
        // });
    }, [user, loader]);
    console.log("Login user", user);

    return (
        <ContextProvider.Provider value={{model, openModel, closeModel, register, login, user, loader, logout}}>
            {props.children}
        </ContextProvider.Provider>
    );
}

export default Context;
