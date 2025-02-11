import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function middleware(req: NextRequest) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  // دریافت اطلاعات کاربر
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // اگه لاگین نبود، بفرستش به صفحه لاگین
  if (!user) return NextResponse.redirect(new URL("/auth", req.url));

  return NextResponse.next();
}

// این Middleware فقط روی مسیر `/dashboard` فعال باشه
export const config = {
  matcher: ["/dashboard/:path*"],
};
