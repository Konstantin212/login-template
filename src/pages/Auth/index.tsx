import { Outlet } from 'react-router-dom';

const Auth = () => {
  return (
    <div className="text-white">
      Auth
      <Outlet />
    </div>
  );
};

export default Auth;
