"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/src/lib/supabase";

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get("type");

    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === "SIGNED_IN" && type !== "recovery") {
          router.push("/dashboard");
        }
      }
    );

    return () => listener.subscription.unsubscribe();
  }, [router]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        redirectTo={process.env.NEXT_PUBLIC_REDIRECT_URL}
      />
    </div>
  );
}
// "use client";

// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { Auth } from "@supabase/auth-ui-react";
// import { ThemeSupa } from "@supabase/auth-ui-shared";
// import { supabase } from "@/src/lib/supabase";

// export default function LoginPage() {
//   const router = useRouter();

//   useEffect(() => {
//     // ตรวจ session ปกติ
//     supabase.auth.getSession().then(({ data: { session } }) => {
//       if (session?.user) router.push("/dashboard");
//     });

//     // listener สำหรับ login/out ปกติ
//     const { data: listener } = supabase.auth.onAuthStateChange(
//       (event, session) => {
//         if (session?.user) {
//           router.push("/dashboard");
//         }
//       }
//     );
//     return () => listener.subscription.unsubscribe();
//   }, [router]);

//   return (
//     <div className="flex justify-center items-center min-h-screen">
//       <Auth
//         supabaseClient={supabase}
//         appearance={{ theme: ThemeSupa }}
//         // ไม่ตั้ง redirectTo ที่นี่สำหรับ Email/Password
//       />
//     </div>
//   );
// }
