


import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, sendEmailVerification, updatePassword, EmailAuthProvider, reauthenticateWithCredential, deleteUser, signOut } from "firebase/auth";
import auth from './../../firebase/firebase.config';
import Swal from 'sweetalert2';


//https://job-server-box.vercel.app/all_user_and_device_info


const initialState = {
    user: {
        email: '', role: '', displayName: '', photoURL: '', createdAt: '', lastLoginAt: '', userId: ''
    },
    isLoading: true,
    isError: false,
    error: '',
    LogOut: false,
}


const emailVarification = () => {

    sendEmailVerification(auth.currentUser).then(() => {

        Swal.fire('Account Created ', 'Varifed YourEmail');
    }).catch((error) => {
        console.log(error?.message);
    })
}
//reset password





const userProfile = (profile) => {


    updateProfile(auth.currentUser, profile).then(() => {
        console.log('successfully updated profile');
        // window.location.reload();

    }).catch((error) => {

    });
}


//reste password candidte and employeer

const reset_user_Password = async (user, newPassword) => {
    await updatePassword(user, newPassword).then(() => {
        Swal.fire('Successfully-Updated', 'Password Update successfully');
    }).catch((error) => {
        Swal.fire('Google Server Error', `Poor Cooding issues ${error?.message}`);
    });

}
export const reset_password = createAsyncThunk('auth/reset_password', async ({ currentPassword, newPassword }) => {

    const user = auth.currentUser;
    const credential = EmailAuthProvider.credential(user.email, currentPassword);

    await reauthenticateWithCredential(user, credential).then((result) => {
        console.log("reauthenticate successfully");
        reset_user_Password(user, newPassword);
    }).catch((error) => {
        Swal.fire('Google Server Error', `Poor Cooding issues ${error?.message}`);
    })

    return "Successfuly Updateded"
});

// System SingOut

export const systemLogOut = createAsyncThunk('auth/systemLogOut', async ({ dispatch, logoutRedux }) => {


    signOut(auth).then(() => {

        dispatch(logoutRedux());

    }).catch((error) => {
        console.log(error?.message);
    });
})



export const delete_account = createAsyncThunk('auth/delete_account', async ({ currentPassword }) => {

    const user = auth.currentUser;
    const credential = EmailAuthProvider.credential(user.email, currentPassword);

    await reauthenticateWithCredential(user, credential).then((result) => {
        console.log("reauthenticate successfully");
        deleteUser(user).then(() => {
            // User deleted.
            Swal.fire('Delete Account !', '', 'success');
        }).catch((error) => {
            // An error ocurred
            // ...
            console.log(error?.message);
            Swal.fire('Google Server Error', `Poor Cooding issues ${error?.message}`);
        });

    }).catch((error) => {
        Swal.fire('Google Server Error', `Poor Cooding issues ${error?.message}`);
    });
    return;
});


export const createUser = createAsyncThunk('auth/createUser', async ({ email, password, displayName, photoURL }) => {
    const profile = {
        displayName, photoURL
    }
    const data = await createUserWithEmailAndPassword(auth, email, password).then((result) => {
        const user = result.user;
        console.log(user);
        userProfile(profile);
        emailVarification();
    }).catch((error) => {
        console.log(error?.message);
    });
    return data?.user;
});

export const loginUser = createAsyncThunk('auth/loginUser', async ({ email, password }) => {
    console.log(email, password);
    const data = await signInWithEmailAndPassword(auth, email, password);
    //console.log(data);
    return data?.user;
});

export const googleSignIn = createAsyncThunk('auth/googleSignIn', async () => {
    const googleProvider = new GoogleAuthProvider();
    const data = await signInWithPopup(auth, googleProvider);
    return data?.user;
});

//get-User Information
export const getUser = createAsyncThunk('auth/getUser', async (email) => {

    const res = await fetch(`https://job-server-box.vercel.app/user/${email}`);
    const data = await res.json();
    return data;
});


//candidate-user-information

export const getCandidateUser = createAsyncThunk('auth/getCandidateUser', async (email) => {
    const res = await fetch(`https://job-server-box.vercel.app/candidateUser/${email}`);
    const data = await res.json();
    return data;
});
const authSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {

        logoutRedux: (state) => {
            state.user.email = '';
            state.user.role = '';
            state.user.displayName = '';
            state.user.photoURL = "";
            state.user.userId = "";
            state.user.createdAt = null;
            state.user.lastLoginAt = null;

        },
        setUser: (state, action) => {
            state.user.email = action.payload;
            state.isLoading = false;
        },
        setdisplayName: (state, action) => {
            state.user.displayName = action.payload;
            state.isLoading = false;
        },
        setphotoUrl: (state, action) => {
            state.user.photoURL = action.payload;
            state.isLoading = false;
        },
        setcreatedAt: (state, action) => {
            state.user.createdAt = action.payload;
            state.isLoading = false;
        },
        setlastLoginAt: (state, action) => {

            state.user.lastLoginAt = action.payload;
            state.isLoading = false;
        }


    },
    extraReducers: (builder) => {


        //the starting part of create user
        builder.addCase(createUser.pending, (state) => {

            state.isLoading = true;
            state.isError = false;
            state.error = '';
        }).addCase(createUser.fulfilled, (state, action) => {

            state.isLoading = false;
            state.isError = false;
            state.user.email = action.payload.email;
            state.user.displayName = action.payload.displayName;
            state.user.photoURL = action.payload.photoURL;
            state.user.createdAt = action.payload.reloadUserInfo.createdAt;
            state.user.lastLoginAt = action.payload.reloadUserInfo.lastLoginAt;
            state.error = '';
        }).addCase(createUser.rejected, (state, action) => {
            //the ending part of create user
            state.isLoading = false;
            state.isError = true;
            state.user.email = '';
            state.user.displayName = '';
            state.user.photoURL = '';
            state.error = action.error.message;
        }).addCase(loginUser.pending, (state) => {
            //the stating part of login-user
            state.isLoading = true;
            state.isError = false;
            state.error = '';
        }).addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.user.email = action?.payload?.email;
            state.user.displayName = action?.payload?.displayName;
            state.user.photoURL = action?.payload?.photoURL;
            state.user.createdAt = action?.payload?.reloadUserInfo?.createdAt;
            state.user.lastLoginAt = action?.payload?.reloadUserInfo?.lastLoginAt;
            state.error = '';

        }).addCase(loginUser.rejected, (state, action) => {
            //the ending part of login-User
            state.isLoading = false;
            state.isError = true;
            state.user.email = '';
            state.user.displayName = '';
            state.user.photoURL = '';
            state.error = action.error.message;

        }).addCase(googleSignIn.pending, (state) => {

            //the stating part of social-medial-login-user
            state.isLoading = true;
            state.isError = false;
            state.error = '';
        }).addCase(googleSignIn.fulfilled, (state, action) => {

            state.isLoading = false;
            state.isError = false;
            state.user.email = action?.payload?.email;
            state.user.displayName = action?.payload?.displayName;
            state.user.photoURL = action?.payload?.photoURL;
            state.user.createdAt = action?.payload?.reloadUserInfo?.createdAt;
            state.user.lastLoginAt = action?.payload?.reloadUserInfo?.lastLoginAt;
            state.error = '';
        }).addCase(googleSignIn.rejected, (state, action) => {
            //the ending part of social-medial-login-user
            state.isLoading = false;
            state.isError = true;
            state.user.email = '';
            state.user.displayName = '';
            state.user.photoURL = '';
            state.error = action.error.message;
        }).addCase(getUser.pending, (state) => {
            //the starting  part of getUser
            state.isLoading = true;
            state.isError = false;
            state.error = '';

        }).addCase(getUser.fulfilled, (state, action) => {

            state.isLoading = false;
            state.isError = false;
            state.user.role = action.payload.role;
            state.user.userId = action.payload._id;
            state.error = '';
        }).addCase(getUser.rejected, (state, action) => {
            //the ending   part of getUser
            state.isLoading = false;
            state.isError = true;
            state.error = action.error.message;
        }).addCase(getCandidateUser.pending, (state) => {
            //the starting  part of getCandidateUser
            state.isLoading = true;
            state.isError = false;
            state.error = '';

        }).addCase(getCandidateUser.fulfilled, (state, action) => {

            state.isLoading = false;
            state.isError = false;
            state.user.role = action.payload.role;
            state.user.userId = action.payload._id;
            state.error = '';
        }).addCase(getCandidateUser.rejected, (state, action) => {
            //the ending   part of getCandidateUser
            state.isLoading = false;
            state.isError = true;
            state.error = action.error.message;
        })
    }

});

/*



*/

export const { logoutRedux, setUser, setdisplayName, setphotoUrl, setcreatedAt, setlastLoginAt, profileReloding } = authSlice.actions;
//setQuizData
export default authSlice.reducer;