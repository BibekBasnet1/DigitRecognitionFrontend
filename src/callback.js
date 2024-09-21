import React, { useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useHistory } from 'react-router-dom';
import api from './api';

const Callback = () => {
  const history = useHistory();

  const { mutate: handleGoogleCallback } = useMutation({
    mutationFn: async (code) => {
      const response = await api.get(`/auth/callback?code=${code}`);
      return response.data;
    },
    onSuccess: (data) => {
      localStorage.setItem('access_token', data.access_token);
      history.push('/upload'); 
    },
    onError: (error) => {
      console.error('OAuth callback error:', error);
    },
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    if (code) {
      handleGoogleCallback(code);
    }
  }, [handleGoogleCallback]);

  return <div>Logging in...</div>;
};

export default Callback;
