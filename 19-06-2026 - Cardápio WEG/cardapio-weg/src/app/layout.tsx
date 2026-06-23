import React from 'react'
import "./globals.css";
import Header from '@/shared/components/atoms/Header'
import Footer from '@/shared/components/atoms/Footer'

export default function Layout({ children } : { children: React.ReactNode }) {
    return (
        <html>
            <body className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
                <Header />
                
                <main className="flex-1">
                    {children}
                </main>

                <Footer />
            </body>
        </html>
    )
}
