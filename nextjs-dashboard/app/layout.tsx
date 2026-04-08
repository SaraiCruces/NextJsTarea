import './ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={'${montserrat.className }antialiased'}>
        Esto es parte del Layout
        {children}
        <footer className='py-10 flex justify-center items-center'>
          Hecho con ❤️ por mi
        </footer>
        </body>
    </html>
  );
}
