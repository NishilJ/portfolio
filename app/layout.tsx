import "./globals.css";
import Navbar from '../components/navbar';
import Footer from '../components/footer';


export const metadata = {
    title: "Nishil Jaiswal | Portfolio",
    description: "ML, Data, GIS",
};


export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="dark">
        <body className="min-h-screen bg-background text-foreground flex flex-col">
        <main className="flex-1">{children}</main>
        <Footer/>
        </body>
        </html>
    );
}