import React, { useEffect, useState } from "react";
type sessionState = {
  currentUser: { name: string; token: string };
  orgUser: { name: string; logo: string };
};
function useUser() {
  const [session, setSession] = useState<sessionState>({} as sessionState);
  const login = (user: sessionState) => {
    setSession(user);
  };
  useEffect(() => {
    login(mockDataStore);
  }, []);
  return { session, login };
}

const mockDataStore = {
  currentUser: { name: "Collins Ogbzuuru", token: "dddddd" },
  orgUser: { name: "Yugo Parking", logo: "/parklogo.jpeg" },
};

export default useUser;
