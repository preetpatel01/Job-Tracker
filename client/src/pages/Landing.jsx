import styled from 'styled-components'
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import { Link } from 'react-router-dom';
import { Logo } from '../components';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1> job <span> tracking </span> app </h1>
          <p>
            Meet Jobify - your fun and easy job-tracking app! Keep tabs on 
            applications, deadlines, and interviews with a swipe. Track progress, 
            set reminders, and celebrate milestones. Job hunting just got a whole 
            lot more simpler and enjoyable! 🚀📈
          </p>
          <Link to='/register' className='btn register-link'> Register </Link>
          <Link to='/login' className='btn'> Login / Demo User </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img'/>
      </div>
    </Wrapper>
  );
};

export default Landing;