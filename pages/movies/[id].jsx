import React from 'react';
import MovieDetail from '../../src/components/MovieDetail';
import { useRouter } from 'next/router';

const details = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <MovieDetail />
    </>
  );
};

export default details;
