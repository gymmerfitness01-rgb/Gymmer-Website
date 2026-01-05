"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";

type Blog = {
    uid: string;
    title: string;
    content: string;
    status: string;
    created_at: string;
    category: string;
    image: string;
};

const sortByTimestampDesc = (a: Blog, b: Blog) =>
    new Date(b.created_at).getTime() - new Date(a.created_at).getTime();

export default function BlogsPage() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeBlog, setActiveBlog] = useState<Blog | null>(null);

    /* ---------------- Fetch blogs ---------------- */
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await fetch(
                    process.env.NEXT_PUBLIC_BLOG_API_URL as string,
                    {
                        headers: {
                            apikey: process.env.NEXT_PUBLIC_BLOG_API_KEY!,
                            Authorization: `Bearer ${process.env.NEXT_PUBLIC_BLOG_API_KEY}`,
                            "Content-Type": "application/json",
                        },
                    }
                );

                const data = await res.json();
                setBlogs(Array.isArray(data) ? data : []);
            } catch (err) {
                console.error("Failed to fetch blogs", err);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    /* ---------------- Overlay behavior ---------------- */
    useEffect(() => {
        document.body.style.overflow = activeBlog ? "hidden" : "auto";
    }, [activeBlog]);

    useEffect(() => {
        const onEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") setActiveBlog(null);
        };
        window.addEventListener("keydown", onEsc);
        return () => window.removeEventListener("keydown", onEsc);
    }, []);

    /* ---------------- Data split ---------------- */
    const featuredBlogs = blogs
        .filter((b) => b.category?.toLowerCase() === "featured")
        .sort(sortByTimestampDesc);

    const latestBlogs = [...blogs].sort(sortByTimestampDesc);

    return (
        <div className="bg-white min-h-screen">
            {/* ---------------- Navigation ---------------- */}
            <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-sm">
                <div className="mx-auto flex h-14 max-w-6xl items-center px-4 sm:px-6 lg:px-8">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900"
                    >
                        <ChevronLeft className="h-5 w-5" />
                        Back
                    </Link>
                </div>
            </nav>

            {/* ---------------- Blog Section ---------------- */}
            <section className="px-4 py-14 sm:px-6 lg:px-8">
                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-3">
                    {/* ---------- Latest ---------- */}
                    <div className="lg:col-span-2">
                        <h2 className="mb-4 text-xl font-semibold">Latest</h2>

                        {loading ? (
                            <p className="text-gray-500">Loading blogs…</p>
                        ) : (
                            <div
                                className="grid gap-6 sm:grid-cols-2
                  max-h-[80vh] lg:max-h-[70vh]
                  overflow-y-auto
                  no-scrollbar
                  rounded-xl border border-gray-300 px-3 py-2.5"
                            >
                                {latestBlogs.map((blog) => (
                                    <article
                                        key={blog.uid}
                                        onClick={() => setActiveBlog(blog)}
                                        className="cursor-pointer overflow-hidden rounded-xl border hover:shadow-md transition"
                                    >
                                        <div className="relative h-48 w-full">
                                            <Image
                                                src={blog.image}
                                                alt={blog.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>

                                        <div className="p-6">
                                            <span className="text-xs uppercase text-gray-500">
                                                {blog.category}
                                            </span>

                                            <h3 className="mt-2 text-lg font-semibold">
                                                {blog.title}
                                            </h3>

                                            <p className="mt-1 line-clamp-3 text-sm text-gray-600">
                                                {blog.content}
                                            </p>

                                            <p className="mt-4 text-xs text-gray-400">
                                                {new Date(blog.created_at).toDateString()}
                                            </p>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* ---------- Featured ---------- */}
                    <aside>
                        <h3 className="mb-4 text-lg font-semibold">Featured</h3>

                        <div
                            className="space-y-5
                max-h-[80vh] lg:max-h-[70vh]
                overflow-y-auto pr-2
                no-scrollbar
                rounded-xl border border-gray-300 p-3"
                        >
                            {featuredBlogs.map((blog) => (
                                <div
                                    key={blog.uid}
                                    onClick={() => setActiveBlog(blog)}
                                    className="flex cursor-pointer gap-4"
                                >
                                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg">
                                        <Image
                                            src={blog.image}
                                            alt={blog.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <div>
                                        <p className="text-sm font-medium leading-snug">
                                            {blog.title}
                                        </p>
                                        <p className="text-sm font-light line-clamp-1 text-gray-400">
                                            {blog.content}
                                        </p>
                                        <p className="mt-1 text-xs text-gray-400">
                                            {new Date(blog.created_at).toDateString()}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </aside>
                </div>
            </section>

            {/* ---------------- Overlay Reader ---------------- */}
            {activeBlog && (
                <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/40 backdrop-blur-md p-4">
                    <div
                        className="absolute inset-0"
                        onClick={() => setActiveBlog(null)}
                    />

                    <div
                        className="
              relative z-10 w-full max-w-3xl
              max-h-[90vh] overflow-y-auto
              rounded-[28px] bg-white
              shadow-[0_20px_60px_rgba(0,0,0,0.18)]
              no-scrollbar
            "
                        style={{ scrollbarGutter: "stable" }}
                    >
                        <button
                            onClick={() => setActiveBlog(null)}
                            aria-label="Close"
                            className="
                absolute right-4 top-4 z-20
                flex h-9 w-9 items-center justify-center
                rounded-full bg-black/5
                text-lg text-gray-700
                transition hover:bg-black/10 cursor-pointer
              "
                        >
                            ×
                        </button>

                        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-[28px] bg-white">
                            <Image
                                src={activeBlog.image}
                                alt={activeBlog.title}
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>

                        <div className="px-10 py-8">
                            <span className="text-[11px] uppercase tracking-wide text-gray-500">
                                {activeBlog.category}
                            </span>

                            <h1 className="mt-2 text-[28px] font-semibold leading-tight text-gray-900">
                                {activeBlog.title}
                            </h1>

                            <p className="mt-2 text-sm text-gray-400">
                                {new Date(activeBlog.created_at).toDateString()}
                            </p>

                            <div className="mt-6 whitespace-pre-line text-[15px] leading-[1.7] text-gray-800">
                                {activeBlog.content}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
