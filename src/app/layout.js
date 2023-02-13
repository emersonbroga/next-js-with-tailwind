import '../styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className="bg-slate-900 text-slate-100 min-h-screen">{children}</body>
    </html>
  );
}
