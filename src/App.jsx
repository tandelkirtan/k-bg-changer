import { useState } from 'react'
import './App.css'

function App() {

  let [color, setColor] = useState("white")

  const colors = [
    { name: "White", value: "white", text: "black" },
    { name: "Red", value: "red", text: "white" },
    { name: "Blue", value: "blue", text: "white" },
    { name: "Green", value: "green", text: "white" },
    { name: "Yellow", value: "yellow", text: "black" },
    { name: "Olive", value: "olive", text: "white" },
    { name: "Gray", value: "gray", text: "white" },
    { name: "Maroon", value: "maroon", text: "white" },
    { name: "Pink", value: "pink", text: "black" },
    { name: "Chocolate", value: "chocolate", text: "white" },
    { name: "Purple", value: "purple", text: "white" },
    { name: "Lavender", value: "lavender", text: "black" },
    { name: "Black", value: "black", text: "white" },
    { name: "SeaGreen", value: "seagreen", text: "white" },
    { name: "Orange", value: "orange", text: "black" },
    { name: "Teal", value: "teal", text: "white" },
    { name: "Cyan", value: "cyan", text: "black" },
    { name: "Magenta", value: "magenta", text: "white" },
    { name: "Lime", value: "lime", text: "black" },
    { name: "Indigo", value: "indigo", text: "white" },
    { name: "Violet", value: "violet", text: "white" },
    { name: "Gold", value: "gold", text: "black" },
    { name: "Silver", value: "silver", text: "black" },
    { name: "Navy", value: "navy", text: "white" },
    { name: "Coral", value: "coral", text: "black" },
    { name: "Crimson", value: "crimson", text: "white" },
    { name: "DarkGreen", value: "darkgreen", text: "white" },
    { name: "Turquoise", value: "turquoise", text: "black" }
  ];

  return (
    <div className="w-full min-h-screen duration-200 flex flex-col justify-end pb-4"
    style={{backgroundColor: color}}
    >
      <div className='flex flex-col items-center gap-6 px-4'>

        {/* Quick Access Buttons */}
        <div className='flex flex-wrap lg:flex-nowrap justify-center gap-3 shadow-xl bg-white/50 backdrop-blur-md p-4 rounded-3xl max-w-full'>
          {colors.slice(0, 12).map((c) => (
            <button
              key={c.value}
              onClick={() => setColor(c.value)}
              className='outline-none px-4 py-2 rounded-full shadow-lg transform transition hover:scale-105 font-medium'
              style={{backgroundColor: c.value, color: c.text}}
            >
              {c.name}
            </button>
          ))}
        </div>

        {/* Dropdown for color selection */}

        <div className="p-2 bg-white/50 backdrop-blur-md rounded-xl shadow-2xl flex items-center gap-3">
          <label htmlFor="color-select" className="font-semibold text-gray-700">Choose a Color:</label>
          <select 
            id="color-select"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="p-2 border border-gray-300 rounded-md focus:outline-none"
          >
            {colors.map((c) => (
              <option key={c.value} value={c.value}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <h2 className="mt-2 mb-0">
  By{" "}
  <a
    href="https://kirtandel.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-red-500 hover:text-black hover:underline transition"
  >
    kirtandel
  </a>
</h2>

    </div>
  )
}

export default App
