"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/src/lib/supabase";
import LogoutButton from "./LogoutButton";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // ตรวจ session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session?.user) router.push("/login");
      else setUser(session.user);
    });

    // listener สำหรับ logout
    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (!session) router.push("/login");
      }
    );
    return () => listener.subscription.unsubscribe();
  }, [router]);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1>Welcome, {user.email}</h1>
      <LogoutButton />
    </div>
  );
}
