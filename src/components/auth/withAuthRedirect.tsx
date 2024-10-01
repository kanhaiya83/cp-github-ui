"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "@/config/firebase";

const withAuthRedirect = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const AuthRedirect: React.FC<P> = (props) => {
    const router = useRouter();

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
        if (user && user?.emailVerified) {
          // toast("Logged in successfully!", { type: "success", isLoading: false, autoClose: 5000 });
          router.push("/"); // Redirect to home page if user is logged in
        }
      });

      return () => unsubscribe();
    }, [router]);

    return <WrappedComponent {...props} />;
  };

  return AuthRedirect;
};

export default withAuthRedirect;
