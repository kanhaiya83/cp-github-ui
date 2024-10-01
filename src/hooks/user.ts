"use client";
import { useQuery, useMutation } from "@tanstack/react-query";
import { authenticatedRequest } from "@/config/request";
import { useAuthState } from "react-firebase-hooks/auth";
import { firebaseAuth } from "@/config/firebase";
import { useQueryClient } from "@tanstack/react-query";

interface User {
  name: string;
  firebase_uid: string;
  username: string;
  email: string;
  socials: {
    homepage?: string;
    ai_ml_interests?: string;
    github_username?: string;
    twitter_username?: string;
    linkedin_profile?: string;
  };
  display_photo?: string;
}

const fetchCurrentUser = async (): Promise<User> => {
  const response = await authenticatedRequest.get(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/users/me`
  );
  return response.data;
};

const updateUser = async (payload: Partial<User>): Promise<User> => {
  const response = await authenticatedRequest.patch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/users/me`,
    payload
  );
  return response.data;
};

export const useCurrentUser = () => {
  const [user] = useAuthState(firebaseAuth);

  const query = useQuery<User, Error>({
    queryKey: ["currentUser"],
    queryFn: fetchCurrentUser,
    enabled: user ? true : false,
  });

  return { ...query, user: query.data };
};
export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  const { mutate: updateUserMutation, isPending } = useMutation({
    mutationFn: updateUser,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["currentUser"] });
    },
    onError: (error) => {
      console.error("Update failed:", error);
    },
  });

  return { updateUserMutation, isPending };
};
