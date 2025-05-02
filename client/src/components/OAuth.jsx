import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';
import {useNavigate} from 'react-router-dom';

export default function OAuth() {
  const dispatch=useDispatch();
  const navigate=useNavigate();
    const handleGoogleClick=async()=>{
        try{
            const provider= new GoogleAuthProvider()
             const auth=getAuth(app)

             const result= await signInWithPopup(auth,provider)

             const res=await fetch('/api/auth/google',{
                method: 'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({
                    name: result.user.displayName, 
                    email:result.user.email, 
                    photo:result.user.photoURL}),
             }
             );
             const data = await res.json();
              dispatch(signInSuccess(data));
              navigate('/');
             
            //  console.log(result);

        }catch(error){
            console.log("could not sign in with google", error);
        }
    }
  return (

    // handlegoogleclick not to submit it like from it will go to goole login
    <button onClick={handleGoogleClick} type='button' className='bg-red-700 
      text-white 
      px-4 py-3 
      rounded-lg 
      uppercase 
      hover:opacity-95 
      text-center font-semibold w-full'
    >
      Continue with Google
    </button>
  )
}
