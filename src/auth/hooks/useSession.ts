import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { User } from "firebase/auth";
import { _onAuthStateChanged } from "../firebaseAuthHelpers";

interface UseSessionProps {
  initialUser?: User;
}

export function useSession(/*{ initialUser }: UseSessionProps*/) {
  // The initialUser comes from the server through a server component
  const [user, setUser] = useState<User>(/*initialUser*/);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = _onAuthStateChanged((authUser: User) => {
      setUser(authUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    _onAuthStateChanged((authUser: User) => {
      if (user === undefined) return;
      if (user?.email !== authUser?.email) {
        router.refresh();
      }
    });
  }, [router, user]);

  return user;
}
