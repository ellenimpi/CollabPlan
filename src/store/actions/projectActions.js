export const createProject = (project) =>{
    return(dispatch, getState, {getFirebase, getFirestore}) =>{
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const uid = getState().firebase.auth.uid;
        firestore.collection('projects').add({
            ...project,
            authorFN: profile.firstName, 
            authorLN: profile.lastName,
            authorId: uid,
            createdAt: new Date()
        }).then(()=> {
            dispatch({type: 'CREATE', project});
        }).catch((err) =>{
            dispatch({type: 'CREATE_ERR', err});
        })

        
    }
}