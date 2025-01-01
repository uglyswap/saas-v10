import { BrowserRouter, Routes, Route } from 'react-router-dom'
    import Home from './pages/Home'
    import Dashboard from './pages/Dashboard'
    import Pricing from './pages/Pricing'
    import Login from './pages/Login'
    import Register from './pages/Register'
    import Admin from './pages/Admin'
    import Navbar from './components/Navbar'
    import Footer from './components/Footer'

    function App() {
      return (
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/admin" element={<Admin />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      )
    }

    export default App
