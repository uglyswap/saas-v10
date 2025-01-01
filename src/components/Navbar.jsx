import { Link } from 'react-router-dom'
    import { FaMoon, FaSun } from 'react-icons/fa'
    import { useState } from 'react'

    export default function Navbar() {
      const [darkMode, setDarkMode] = useState(true)

      const toggleDarkMode = () => {
        setDarkMode(!darkMode)
        document.documentElement.classList.toggle('dark')
      }

      return (
        <nav className="bg-dark/90 backdrop-blur border-b border-dark/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="text-2xl font-bold text-primary">
                  PostGenAI
                </Link>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-lg hover:bg-dark/10 transition-colors"
                >
                  {darkMode ? (
                    <FaSun className="text-light" />
                  ) : (
                    <FaMoon className="text-light" />
                  )}
                </button>
                <Link
                  to="/login"
                  className="text-light hover:text-primary transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-primary text-dark px-4 py-2 rounded-lg font-semibold hover:bg-secondary transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </nav>
      )
    }
