import useUpdateInput from '../../hooks/useUpdateInput';
import { auth, createWithEmail } from '../../firebaseIndex';
import { useRouter } from 'next/router';

interface Iprops {
  setLogin: any;
}

const RegisterForm = ({ setLogin }: Iprops) => {
  const { formData, updateInput } = useUpdateInput();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Check if passwords match
    if (formData.password === formData.password2) {
      // create new account with form data
      createWithEmail(
        auth,
        formData.email,
        formData.password,
        formData.nickname
      );
      // Send user to the main page
      router.push('/');
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
        <input
          type='password'
          name='password2'
          id='password2'
          placeholder='Re-Enter Password'
          required
          onChange={updateInput}
        />
        <input
          type='text'
          name='nickname'
          id='nickname'
          placeholder='What Would You Like Us To Call You?'
          required
          onChange={updateInput}
        />
        <input type='submit' value='Register' />
      </form>
      <p>
        Already have an account? Click{' '}
        <button onClick={() => setLogin(true)}>HERE</button>
      </p>
    </div>
  );
};

export default RegisterForm;
