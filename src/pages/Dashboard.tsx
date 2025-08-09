
import { useSession } from '@supabase/auth-helpers-react';
import { Navigate } from 'react-router-dom';

const Dashboard = () => {
  const session = useSession();

  // Show loading while session is loading
  if (session === null) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  // Redirect to auth if not logged in
  if (!session) {
    return <Navigate to="/auth" replace />;
  }

  // Always redirect to student dashboard (Pharmacy MasterApp)
  return <Navigate to="/student" replace />;
};

export default Dashboard;
