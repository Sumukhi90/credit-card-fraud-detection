'use client'
import { useState } from "react"

export default function RiskChecker() {
  const [amount, setAmount] = useState(0)
  const [time, setTime] = useState("Morning")
  const [risk, setRisk] = useState("")

  const checkRisk = () => {
    if (amount > 1000 && time === "Late Night") {
      setRisk("?? Critical Risk")
    } else if (amount > 500 || time === "Late Night") {
      setRisk("?? High Risk")
    } else if (amount > 100) {
      setRisk("? Medium Risk")
    } else {
      setRisk("? Low Risk")
    }
  }

  return (
    <div className="bg-gray-900 p-6 rounded-xl mt-8">
      <h2 className="text-xl font-semibold mb-4">Transaction Risk Checker</h2>

      <input
        type="number"
        placeholder="Enter Amount"
        className="p-2 text-black rounded mr-2"
        onChange={(e) => setAmount(Number(e.target.value))}
      />

      <select
        className="p-2 text-black rounded mr-2"
        onChange={(e) => setTime(e.target.value)}
      >
        <option>Morning</option>
        <option>Afternoon</option>
        <option>Evening</option>
        <option>Late Night</option>
      </select>

      <button
        onClick={checkRisk}
        className="bg-blue-600 px-4 py-2 rounded"
      >
        Check Risk
      </button>

      {risk && <p className="mt-4 text-lg">{risk}</p>}
    </div>
  )
}
