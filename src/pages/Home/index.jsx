import React from 'react';
import { useSelector } from 'react-redux';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './style.scss';
import SnackBar from './Components/SnackBar';
import HomePageMain from './Components/HomePage';

const HomePage = () => {
  const {
    user, error,
  } = useSelector(state => ({
    user: state.home.user.info,
    error: state.home.error,
  }));
  return (
    <>
      <Header />
      <div className="homePage">
        {
          error && <SnackBar />
        }
        {
          user && <HomePageMain />
        }
      </div>
      <Footer />
    </>
  );
};

export default React.memo(HomePage);
