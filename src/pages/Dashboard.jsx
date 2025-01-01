import { useState } from 'react'
    import Calendar from 'react-calendar'
    import { CopyToClipboard } from 'react-copy-to-clipboard'
    import { FaCopy } from 'react-icons/fa'
    import { toast } from 'react-toastify'

    export default function Dashboard() {
      const [post, setPost] = useState('')
      const [date, setDate] = useState(new Date())

      const generatePost = async () => {
        // TODO: Implement AI post generation
        const generatedPost = "This is a sample generated post. Replace with actual AI-generated content."
        setPost(generatedPost)
      }

      const handleCopy = () => {
        toast.success('Post copied to clipboard!')
      }

      return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-primary mb-8">Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold text-light mb-4">
                Generate Post
              </h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-light mb-2">Topic</label>
                  <input
                    type="text"
                    className="w-full bg-dark/50 border border-dark/10 rounded-lg px-4 py-2 text-light focus:outline-none focus:border-primary"
                    placeholder="Enter post topic"
                  />
                </div>
                <div>
                  <label className="block text-light mb-2">Language</label>
                  <select
                    className="w-full bg-dark/50 border border-dark/10 rounded-lg px-4 py-2 text-light focus:outline-none focus:border-primary"
                  >
                    <option value="en">English</option>
                    <option value="fr">French</option>
                    <option value="es">Spanish</option>
                  </select>
                </div>
                <button
                  type="button"
                  onClick={generatePost}
                  className="bg-primary text-dark px-6 py-2 rounded-lg font-semibold hover:bg-secondary transition-colors"
                >
                  Generate Post
                </button>
              </form>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-light mb-4">
                Schedule Post
              </h2>
              <Calendar
                onChange={setDate}
                value={date}
                className="react-calendar bg-dark/50 border border-dark/10 rounded-lg p-4 text-light"
              />
            </div>
          </div>
          {post && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-light mb-4">
                Generated Post
              </h2>
              <div className="bg-dark/50 border border-dark/10 rounded-lg p-4 relative">
                <pre className="whitespace-pre-wrap text-light">{post}</pre>
                <CopyToClipboard text={post} onCopy={handleCopy}>
                  <button className="absolute top-2 right-2 p-2 rounded-lg hover:bg-dark/10 transition-colors">
                    <FaCopy className="text-light" />
                  </button>
                </CopyToClipboard>
              </div>
            </div>
          )}
        </div>
      )
    }
