import useUpdateInput from '../../hooks/useUpdateInput';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseIndex';
import { useRouter } from 'next/router';

interface Iprops {
  setLogin: any;
}

const LoginForm = ({ setLogin }: Iprops) => {
  const { formData, updateInput } = useUpdateInput();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      signInWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          router.push('/');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(`${errorCode}: ${errorMessage}`);
        });
    }

    console.log(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          name='email'
          id='email'
          placeholder='Email'
          onChange={updateInput}
        />
        <input
          type='password'
          name='password'
          id='password'
          placeholder='Password'
          required
          onChange={updateInput}
        />
        <input type='submit' value='Login' />
      </form>
      <p>
        Don&lsquo;t have an account? Click{' '}
        <button onClick={() => setLogin(false)}>HERE</button>
      </p>
    </div>
  );
};

export default LoginForm;
