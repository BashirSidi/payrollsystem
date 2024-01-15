// hooks/useAuth.js
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { setAuthenticated } from '../redux/features/authSlice';

const useAuth = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { authenticated, loading, user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!authenticated && !loading) {
      router.push('/');
    }
  }, [authenticated, loading, router]);

  const isAuthenticated = () => authenticated;
  const getUser = () => user;

  return { isAuthenticated, getUser };
};

export default useAuth;
