import { Outlet } from 'react-router-dom';
import AppHeader from '../AppHeader/AppHeader';

const AppLayout = () => {
  return (
    <>
      <main>
        <AppHeader />
        <Outlet />
      </main>
    </>
  );
};

export default AppLayout;
