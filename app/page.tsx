export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center px-6">
            <h1 className="text-5xl font-bold mb-4">Hi, I'm Nishil</h1>
            <p className="text-lg text-muted-foreground max-w-xl text-center">
                ML · Frontend · Geospatial
            </p>


            <div className="mt-8 flex gap-4">
                <a
                    href="/projects"
                    className="rounded-lg bg-black text-white px-6 py-3"
                >
                    View Projects
                </a>
                <a
                    href="/public/Resume.pdf"
                    className="rounded-lg border px-6 py-3"
                >
                    Resume
                </a>
            </div>
        </main>
    );
}