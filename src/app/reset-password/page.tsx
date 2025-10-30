export default function ResetPasswordPage() {
  return null; // หรือ <div>Coming soon</div>
}
// "use client";

// import { useState } from "react";
// import { useSearchParams, useRouter } from "next/navigation";
// import { supabase } from "@/src/lib/supabase";

// export default function ResetPasswordPage() {
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");

//   const token = searchParams.get("access_token");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!token) return setMessage("Invalid token");

//     const { error } = await supabase.auth.updateUser({ password });
//     if (error) setMessage(error.message);
//     else {
//       setMessage("Password updated! Redirecting to login...");
//       setTimeout(() => router.push("/login"), 2000);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen">
//       <h1>Reset Password</h1>
//       {message && <p>{message}</p>}
//       <form onSubmit={handleSubmit} className="flex flex-col gap-2">
//         <input
//           type="password"
//           placeholder="New password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Update Password</button>
//       </form>
//     </div>
//   );
// }
