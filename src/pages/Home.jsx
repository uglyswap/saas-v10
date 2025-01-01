import { Link } from 'react-router-dom'
    import { FaArrowRight } from 'react-icons/fa'

    export default function Home() {
      return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-primary mb-6">
              Generate High-Quality LinkedIn Posts with AI
            </h1>
            <p className="text-xl text-light mb-8">
              Create engaging, click-worthy LinkedIn posts in seconds. Schedule, manage, and optimize your content with our powerful AI-driven platform.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                to="/register"
                className="bg-primary text-dark px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors flex items-center gap-2"
              >
                Get Started <FaArrowRight />
              </Link>
              <Link
                to="/pricing"
                className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-dark transition-colors"
              >
                Pricing
              </Link>
            </div>
          </div>
        </div>
      )
    }
