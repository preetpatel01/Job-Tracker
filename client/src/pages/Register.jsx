import { Form, redirect, Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { Logo, FormRow, SubmitBtn } from '../components';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post('/auth/register', data);
    toast.success('Registration successful!');
    return redirect('/login');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Register = () => {
  
  return (
    <Wrapper>
      <Form method='post' className='form'>
        <Logo />
        <h4> Register </h4>

        {/* Register Form Inputs */}
        <FormRow type='text' name='name' defaultValue='Elon' />
        <FormRow type='text' name='lastName' labelText='Last Name' 
          defaultValue='Musk' />
        <FormRow type='text' name='location' defaultValue='Canada' />
        <FormRow type='email' name='email' defaultValue='elonmusk@gmail.com' />
        <FormRow type='password' name='password' defaultValue='secret123' />

        {/* Submit button */}
        <SubmitBtn />

        {/* Login redirection for registered members */}
        <p>
          Already a member?
          <Link to='/login' className='member-btn'>
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};
export default Register;
