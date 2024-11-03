export const metadata = {
  title: 'Studio | Diego Garc',
  description: 'Authoring environment for Diego Garc',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
