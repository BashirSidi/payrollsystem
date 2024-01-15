
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
// import { setAuthenticated } from '../redux/features/authSlice';

const withAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const router = useRouter();
    const { authenticated, loading } = useSelector((state) => state.auth);

    useEffect(() => {
      if (!authenticated && !loading) {
        router.push('/');
      }
    }, [authenticated, loading, router]);

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;
