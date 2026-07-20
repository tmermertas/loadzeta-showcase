export const metadata = {
  title: 'Load Zeta - Premium Trucking Management Software',
  description: 'The ultimate dispatch and load management platform for modern trucking companies. Track loads, calculate driver pay, and analyze RPM in real-time.',
  openGraph: {
    title: 'Load Zeta - Premium Trucking Management Software',
    description: 'The ultimate dispatch and load management platform for modern trucking companies.',
    url: 'https://loadzeta.com',
    siteName: 'Load Zeta',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  )
}
