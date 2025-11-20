export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">404 — Wrong Rep!</h1>
            <p className="text-gray-600 mb-6">You took a wrong turn. Let’s get you back on track for your progress.</p>

            <a
                href="/"
                className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-900 transition font-bold"
            >
                Back to Training
            </a>
        </div>
    );
}
