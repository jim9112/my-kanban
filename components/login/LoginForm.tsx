import useUpdateInput from '../../hooks/useUpdateInput';

interface Iprops {
  setLogin: any;
}

const LoginForm = ({ setLogin }: Iprops) => {
  const { formData, updateInput } = useUpdateInput();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
