// hooks/useAuth.js
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const useAuth = () => {
  const router = useRouter();
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
