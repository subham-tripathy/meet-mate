import NavBar from './Components/NavBar'
import './globals.css'

export const metadata = {
  title: 'Meet Mate',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className ='dark:bg-gray-700 dark:text-white'>
        {/* <NavBar/> */}
        {children}
      </body>
    </html>
  )
}
