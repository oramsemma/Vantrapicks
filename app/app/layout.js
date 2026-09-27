export const metadata = {
  title: "VantraPicks",
  description: "AI-powered football predictions and match analysis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
