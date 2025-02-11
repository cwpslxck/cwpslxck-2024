"use client";
import SectionHeader from "@/components/SectionHeader";
import { Header } from "@/sections/Header";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import React, { useEffect, useState } from "react";
import LoadingPart from "@/components/LoadingPart";
import { Footer } from "@/sections/Footer";

function DesignPage() {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    async function fetchImages() {
      const { data, error } = await supabase.storage.from("portfolio").list();

      console.log("Fetched Data:", data, "Error:", error); // 👈 اینجا لاگ می‌کنیم

      if (error) {
        console.error("Error fetching images:", error);
      } else {
        setImages(data.map((img) => img.name)); // Extract file names
      }
      setLoading(false);
    }

    fetchImages();
  }, []);

  return (
    <div>
      <Header />
      <SectionHeader
        title={"My Design"}
        cotitle={"me and photoshop cooking"}
        desc={
          "watch all of my graphic designs that i create mostly for my friends and projects that i worked on."
        }
      />
      <div className="container">
        {loading ? (
          <div className="min-h-screen flex flex-col gap-4">
            <LoadingPart />
            <LoadingPart />
          </div>
        ) : (
          <div className="flex flex-col gap-4 min-h-screen px-0 md:px-12 lg:px-40">
            {[...images].reverse().map((img, i) => (
              <Image
                width={600}
                height={600}
                alt={img}
                src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/portfolio/${img}`}
                key={i}
                loading="lazy"
                draggable="false"
                className="w-full h-auto rounded"
              />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default DesignPage;
