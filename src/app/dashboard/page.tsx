"use client";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "../../lib/firebase";

export default function DashboardPage() {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push("/login");
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold">You are now logged in</h1>
        <p className="text-gray-400 mt-4">Welcome to your dashboard.</p>
        <button
          onClick={handleSignOut}
          className="mt-6 px-4 py-2 bg-red-600 rounded-lg hover:bg-red-500 transition"
        >
          Sign Out
        </button>
      </div>
    </main>
  );
}
