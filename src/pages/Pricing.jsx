export default function Pricing() {
      const plans = [
        {
          name: 'Starter',
          price: '$19/mo',
          features: [
            '10 posts per month',
            'Basic AI models',
            'Scheduling',
            'Email support'
          ]
        },
        {
          name: 'Pro',
          price: '$49/mo',
          features: [
            '50 posts per month',
            'Advanced AI models',
            'Priority scheduling',
            '24/7 support'
          ]
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          features: [
            'Unlimited posts',
            'Custom AI models',
            'Dedicated account manager',
            'Custom integrations'
          ]
        }
      ]

      return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-3xl font-bold text-primary mb-8 text-center">
            Pricing Plans
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="bg-dark/50 border border-dark/10 rounded-lg p-8"
              >
                <h2 className="text-2xl font-bold text-primary mb-4">
                  {plan.name}
                </h2>
                <p className="text-3xl font-bold text-light mb-6">
                  {plan.price}
                </p>
                <ul className="space-y-2 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="text-light">
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-primary text-dark px-6 py-2 rounded-lg font-semibold hover:bg-secondary transition-colors">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      )
    }
