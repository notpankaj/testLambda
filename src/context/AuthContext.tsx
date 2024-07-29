import { getCurrentUser } from "aws-amplify/auth";
import {
  createContext,
  useEffect,
  useContext,
  useState,
  SetStateAction,
  Dispatch,
} from "react";

type AuthContextType = {
  authUser: AuthType | null;
  setAuthUser: Dispatch<SetStateAction<AuthType | null>>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthType = {
  userId: string;
  username: string;
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthContextProvider");
  }

  return context;
};
export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [authUser, setAuthUser] = useState<null | AuthType>(null);

  const checkLocalAuth = async () => {
    try {
      const res = await getCurrentUser();
      console.log("getCurrentUser", res);
      if (res.userId && res.username) {
        setAuthUser({ userId: res.userId, username: res.username });
      }
    } catch (error) {
      console.log("getCurrentUser", error);
    }
  };

  useEffect(() => {
    checkLocalAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
