"use client";

import { supabase } from "@/src/lib/supabase";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login"); // redirect ไปหน้า login หลัง logout
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white p-2 rounded"
    >
      Sign out
    </button>
  );
}
// "use client";

// import { supabase } from "@/src/lib/supabase";
// import { useRouter } from "next/navigation";

// export default function LogoutButton() {
//   const router = useRouter();

//   const handleLogout = async () => {
//     await supabase.auth.signOut();
//     router.push("/login");
//   };

//   return (
//     <button
//       onClick={handleLogout}
//       className="bg-red-500 text-white p-2 rounded"
//     >
//       Sign out
//     </button>
//   );
// }
