import { useState, useEffect, useCallback } from 'react'

function App() {
  const [length, setLength] = useState(6)
  const [password, setPassword] = useState('')
  const [includeLowercase, setIncludeLowercase] = useState(false)
  const [includeNumber, setIncludeNumber] = useState(false)
  const [copied, setCopied] = useState(false)

  const passwordGenerator = useCallback(() => {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (includeLowercase) characters += 'abcdefghijklmnopqrstuvwxyz'
    if (includeNumber) characters += '0123456789'

    let generatedPassword = ''
    for (let i = 0; i < length; i++) {
      generatedPassword += characters[Math.floor(Math.random() * characters.length)]
    }
    setPassword(generatedPassword)
  }, [length, includeLowercase, includeNumber])

  useEffect(() => {
    passwordGenerator()
  }, [passwordGenerator])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-2xl shadow-xl p-8 w-full max-w-md border border-gray-800">

        {/* Title */}
        <h1 className="text-white text-2xl font-bold text-center mb-6 tracking-wide">
          Password Generator
        </h1>

        {/* Password Display */}
        <div className="flex items-center bg-gray-800 rounded-xl px-4 py-3 mb-6 border border-gray-700">
          <span className="text-green-400 font-mono text-lg flex-1 tracking-widest break-all">
            {password}
          </span>
          <button
            onClick={copyToClipboard}
            className="ml-3 text-sm px-3 py-1 rounded-lg bg-green-500 hover:bg-green-400 text-gray-900 font-semibold transition-all duration-200"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>

        {/* Length Slider */}
        <div className="mb-6">
          <div className="flex justify-between mb-2">
            <label className="text-gray-400 text-sm font-medium">Length</label>
            <span className="text-green-400 font-bold text-sm">{length}</span>
          </div>
          <input
            type="range" min={6} max={20} value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
            className="w-full accent-green-500 cursor-pointer"
          />
        </div>

        {/* Checkboxes */}
        <div className="space-y-3 mb-8">
          {[
            { id: 'lowercase', label: 'Include Lowercase', state: includeLowercase, setter: setIncludeLowercase },
            { id: 'number',    label: 'Include Numbers',   state: includeNumber,    setter: setIncludeNumber },
          ].map(({ id, label, state, setter }) => (
            <label key={id} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox" checked={state}
                onChange={(e) => setter(e.target.checked)}
                className="w-4 h-4 accent-green-500 cursor-pointer"
              />
              <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
                {label}
              </span>
            </label>
          ))}
        </div>

        {/* Generate Button */}
        <button
          onClick={passwordGenerator}
          className="w-full py-3 rounded-xl bg-green-500 hover:bg-green-400 active:scale-95 text-gray-900 font-bold text-sm tracking-wide transition-all duration-200"
        >
          Generate Password
        </button>

      </div>
    </div>
  )
}

export default App