export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
      const firebase = getFirebase();
      
      firebase.auth().signInWithEmailAndPassword(
        credentials.email,
        credentials.password
      ).then(() => {
        dispatch({ type: 'LOGIN' });
      }).catch((err) => {
        dispatch({ type: 'LOGIN_ERR', err });
      });
  
    }
  }

export const signOut = () =>{
    return(dispatch, getState, {getFirebase}) =>{
        const firebase = getFirebase();

        firebase.auth().signOut().then(() =>{
            dispatch({type: "SIGNOUT"})
        });

    }
}

export const signUp = (user) =>{
    return(dispatch, getState, {getFirebase, getFirestore}) =>{
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            user.email,
            user.password
        ).then((res)=>{
            return firestore.collection('users').doc(res.user.uid).set({
                firstName: user.firstName,
                lastName: user.lastName,
                initials: user.firstName[0] + user.lastName[0]
            }).then(()=>{
                dispatch({type: 'SIGNUP'})
            }).catch(err =>{
                dispatch({type: 'SIGNUP_ERR', err})
            })

        })
    }
}