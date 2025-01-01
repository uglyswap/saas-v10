import { useState, useEffect } from 'react'
    import { toast } from 'react-toastify'
    import { db } from '../db'

    export default function Admin() {
      const [stripeApiKey, setStripeApiKey] = useState('')
      const [openRouterApiKey, setOpenRouterApiKey] = useState('')

      useEffect(() => {
        // Load saved settings on component mount
        db.get('SELECT * FROM settings WHERE key = ?', ['stripeApiKey'])
          .then(row => setStripeApiKey(row?.value || ''))
        
        db.get('SELECT * FROM settings WHERE key = ?', ['openRouterApiKey'])
          .then(row => setOpenRouterApiKey(row?.value || ''))
      }, [])

      const handleSaveStripe = async () => {
        await db.run(
          'INSERT OR REPLACE INTO settings (key, value) VALUES (?, ?)',
          ['stripeApiKey', stripeApiKey]
        )
        toast.success('Stripe settings saved successfully!')
      }

      const handleSaveOpenRouter = async () => {
        await db.run(
          'INSERT OR REPLACE INTO settings (key, value) VALUES (?, ?)',
          ['openRouterApiKey', openRouterApiKey]
        )
        toast.success('OpenRouter settings saved successfully!')
      }

      return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-primary mb-8">Admin Panel</h1>
          <div className="space-y-8">
            {/* Stripe Integration */}
            <div>
              <h2 className="text-2xl font-semibold text-light mb-4">
                Stripe Integration
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-light mb-2">Stripe API Key</label>
                  <input
                    type="text"
                    value={stripeApiKey}
                    onChange={(e) => setStripeApiKey(e.target.value)}
                    className="w-full bg-dark/50 border border-dark/10 rounded-lg px-4 py-2 text-light focus:outline-none focus:border-primary"
                    placeholder="Enter your Stripe API key"
                  />
                </div>
                <button
                  onClick={handleSaveStripe}
                  className="bg-primary text-dark px-6 py-2 rounded-lg font-semibold hover:bg-secondary transition-colors"
                >
                  Save Stripe Settings
                </button>
              </div>
            </div>

            {/* OpenRouter Integration */}
            <div>
              <h2 className="text-2xl font-semibold text-light mb-4">
                OpenRouter Integration
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-light mb-2">OpenRouter API Key</label>
                  <input
                    type="text"
                    value={openRouterApiKey}
                    onChange={(e) => setOpenRouterApiKey(e.target.value)}
                    className="w-full bg-dark/50 border border-dark/10 rounded-lg px-4 py-2 text-light focus:outline-none focus:border-primary"
                    placeholder="Enter your OpenRouter API key"
                  />
                </div>
                <button
                  onClick={handleSaveOpenRouter}
                  className="bg-primary text-dark px-6 py-2 rounded-lg font-semibold hover:bg-secondary transition-colors"
                >
                  Save OpenRouter Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    }
