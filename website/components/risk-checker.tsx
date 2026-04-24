'use client'

import { useState } from "react"

export default function RiskChecker() {
  const [amount, setAmount] = useState("")
  const [time, setTime] = useState("Morning")
  const [risk, setRisk] = useState("")
  const [reason, setReason] = useState("")

  const checkRisk = () => {
    const value = Number(amount)

    if (value > 1000 && time === "Late Night") {
      setRisk("Critical Risk")
      setReason("High transaction amount during late-night hours increases fraud risk.")
    } else if (value > 500 || time === "Late Night") {
      setRisk("High Risk")
      setReason("Either the transaction amount is high or the time bucket is risk-sensitive.")
    } else if (value > 100) {
      setRisk("Medium Risk")
      setReason("Moderate transaction amount requires monitoring but is not highly suspicious.")
    } else {
      setRisk("Low Risk")
      setReason("Transaction amount and time bucket indicate low suspicious activity.")
    }
  }

  return (
    <div className="mt-10 rounded-2xl border border-blue-500/30 bg-slate-900/80 p-6 shadow-lg">
      <h3 className="text-2xl font-bold text-white mb-2">Transaction Risk Checker</h3>
      <p className="text-slate-300 mb-6">
        Simulate transaction risk using amount and time-based fraud patterns.
      </p>

      <div className="grid gap-4 md:grid-cols-3">
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none"
        />

        <select
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none"
        >
          <option>Morning</option>
          <option>Afternoon</option>
          <option>Evening</option>
          <option>Late Night</option>
        </select>

        <button
          onClick={checkRisk}
          className="rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Check Risk
        </button>
      </div>

      {risk && (
        <div className="mt-6 rounded-xl bg-slate-950 p-5 border border-slate-700">
          <p className="text-lg font-bold text-cyan-400">Risk Tier: {risk}</p>
          <p className="text-slate-300 mt-2">{reason}</p>
        </div>
      )}
    </div>
  )
}
