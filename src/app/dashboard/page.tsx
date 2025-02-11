"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Image from "next/image";

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [images, setImages] = useState<string[]>([]);
  const router = useRouter();

  // Check user authentication
  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (!data?.user) {
        router.push("/auth");
      } else {
        setUser(data.user);
        fetchImages();
      }
      setLoading(false);
    };
    checkUser();
  }, [router]);

  // 🔥 اگر هنوز چک شدن یوزر کامل نشده، هیچی نشون نده
  if (loading) return null;

  // Fetch uploaded images
  async function fetchImages() {
    const { data, error } = await supabase.storage.from("portfolio").list();
    if (error) console.error("Error fetching images:", error);
    else setImages(data.map((img) => img.name));
  }

  // Handle file upload
  async function handleUpload() {
    if (!file) return;
    setUploading(true);

    const fileName = `${Date.now()}-${file.name}`;
    const { error } = await supabase.storage
      .from("portfolio")
      .upload(fileName, file);

    if (error) {
      console.error("Upload error:", error);
    } else {
      setImages([...images, fileName]);
      setFile(null);
    }

    setUploading(false);
  }

  // Logout function
  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/auth");
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <p className="mb-6 text-lg">
        Upload new designs to show on cwpslxck.ir/design page
      </p>
      {/* Upload form */}
      <div className="bg-stone-950 p-6 rounded-lg w-full max-w-md text-center">
        <input
          type="file"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="mb-4 text-sm"
        />
        <button
          onClick={handleUpload}
          disabled={!file || uploading}
          className="w-full bg-stone-800 px-4 py-2 rounded-lg hover:bg-stone-700 transition"
        >
          {uploading ? "Uploading..." : "Upload Work"}
        </button>
      </div>
      {/* Logout button */}
      <div className="flex justify-center items-center flex-row gap-2">
        <button
          onClick={handleLogout}
          className="mt-8 bg-red-600 px-5 py-3 rounded-lg hover:bg-red-500 transition text-lg"
        >
          Logout
        </button>
        <a
          href="/design"
          className="mt-8 bg-stone-950 px-5 py-3 rounded-lg hover:bg-stone-900 transition text-lg"
        >
          Design
        </a>
        <a
          href="/"
          className="mt-8 bg-stone-950 px-5 py-3 rounded-lg hover:bg-stone-900 transition text-lg"
        >
          Home
        </a>
      </div>
    </div>
  );
}
