import { useContext } from 'react';
import { RouterContext } from 'next/dist/shared/lib/router-context';

function useMyRouter() {
  return useContext(RouterContext);
}

export default useMyRouter;
