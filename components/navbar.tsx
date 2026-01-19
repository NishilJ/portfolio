import Link from 'next/link';


export default function Navbar() {
    return (
        <nav className="w-full px-6 py-4 flex justify-between items-center">
            <div className="text-xl font-bold">Your Name</div>
            <div className="flex gap-4">
                <Link href="/" className="hover:underline">Home</Link>
                <Link href="/projects" className="hover:underline">Projects</Link>
                <Link href="/about" className="hover:underline">About</Link>
            </div>
        </nav>
    );
}