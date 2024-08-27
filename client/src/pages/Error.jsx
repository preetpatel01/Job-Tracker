import { Link, useRouteError } from 'react-router-dom';
import Wrapper from '../assets/wrappers/ErrorPage';
import img from '../assets/images/not-found.svg';

const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return <Wrapper>
      <div>
        <img src={img} alt="not found" />
        <h3> Ohh no! Page not found. </h3>
        <p> We cannot find the page you're looking for </p>
        <Link to='/dashboard'> Return To Home </Link>
      </div>
    </Wrapper>
  }
  return (
    <Wrapper>
      <h3> Something went wrong! </h3>
    </Wrapper>
  );
};
export default Error;
