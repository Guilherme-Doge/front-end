import React from 'react'

import "./globals.css";

import Header from '@/shared/components/Header'
import Footer from '@/shared/components/Footer'


export default function Layout({ children } : { children: React.ReactNode }) {
    return (
        <html>
			<body className="flex justify-between flex-col h-screen">
				<Header />
				
				<main>
					{children}
				</main>

				<Footer />
				
			</body>
		</html>
    )
}