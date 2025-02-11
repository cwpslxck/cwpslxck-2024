"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function AuthPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [pageLoading, setPageLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // چک کردن وضعیت کاربر هنگام لود شدن صفحه
  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (data?.user) {
        router.push("/dashboard");
      } else {
        setPageLoading(false);
      }
    };
    checkUser();
  }, [router]);

  async function handleAuth(event: React.FormEvent) {
    event.preventDefault();
    setError(null);

    if (!email || !password) {
      setError("youre not cwpslxck get out :)");
      return;
    }

    setLoading(true);

    // سعی در لاگین کردن
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError("youre not cwpslxck get out :)");
    } else {
      router.push("/dashboard");
    }

    setLoading(false);
  }

  if (pageLoading) {
    return <></>;
  }

  return (
    <div className="h-screen flex items-center justify-center bg-black text-white">
      <div className="max-w-sm w-full p-6 rounded-lg shadow-lg">
        <h1 className="text-xl font-semibold text-center mb-4">
          cwx sign in form
        </h1>
        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
        <form onSubmit={handleAuth} className="space-y-3">
          <input
            type="email"
            placeholder="E-mail"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 rounded bg-gray-700 text-white outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 rounded bg-gray-700 text-white outline-none"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-white rounded hover:bg-gray-100 text-black font-bold transition h-12 flex justify-center items-center"
          >
            {loading ? (
              <span className="animate-spin">
                <AiOutlineLoading3Quarters />
              </span>
            ) : (
              "Sign In"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
