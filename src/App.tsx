import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import CreateWorkspace from "./pages/CreateWorkspace";
import Home from "./pages/Home";
import { useCurrentUserStore } from "./modules/auth/current-user.state";
import { authRepository } from "./modules/auth/auth.repository";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsloading] = useState(true);
  const { setCurrentUser } = useCurrentUserStore();

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  const fetchCurrentUser = async () => {
    try {
      const user = await authRepository.getCuttentUser();
      setCurrentUser(user);
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  };

  if (isLoading) return <div />;

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<CreateWorkspace />} />
          <Route path="/:workspaceId/:channelId" element={<Home />} />
          {/* http://localhost:5174 */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
