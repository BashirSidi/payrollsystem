import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ThemeRegistry from '../theme/ThemeRegistry'
import { ReduxProvider } from './redux/provider'
import { ToastContainer } from "react-toastify";
import 'simplebar-react/dist/simplebar.min.css';
import "react-toastify/dist/ReactToastify.css";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bauchi State Payroll System',
  description: 'Bauchi State Payroll System',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ThemeRegistry>
        <body className={inter.className}>
          <ReduxProvider>
            <ToastContainer hideProgressBar />
            {children}
          </ReduxProvider>
        </body>
      </ThemeRegistry>
    </html>
  )
}
