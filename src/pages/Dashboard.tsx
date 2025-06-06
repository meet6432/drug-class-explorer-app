
import { useSession } from '@supabase/auth-helpers-react';
import { Navigate } from 'react-router-dom';

const Dashboard = () => {
  const session = useSession();

  // Redirect to auth if not logged in
  if (!session) {
    return <Navigate to="/auth" replace />;
  }

  // Always redirect to student dashboard (Pharmacy MasterApp)
  return <Navigate to="/student" replace />;
};

export default Dashboard;
