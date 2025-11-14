"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

const LoginSuccessToast = () => {
  const searchparams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    if (searchparams.get("loggedIn") === "true")
      toast.success("Login Successfully");

    const newURL = new URL(window.location.href);
    newURL.searchParams.delete("loggedIn");
    router.replace(newURL.toString());


  }, [searchparams, router]);

  return null;
};

export default LoginSuccessToast;