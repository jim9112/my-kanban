import useUpdateInput from '../../hooks/useUpdateInput';
import { auth, createWithEmail } from '../../firebaseIndex';

interface Iprops {
  setLogin: any;
}

const RegisterForm = ({ setLogin }: Iprops) => {
  const { formData, updateInput } = useUpdateInput();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password === formData.password2) {
      createWithEmail(
        auth,
        formData.email,
        formData.password,
        formData.nickname
      );
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
