import { useState } from 'react';

export interface TablesConfig {
  table: number;
  rangeStart: number;
  rangeEnd: number;
  shuffle: boolean;
}

interface TablesSetupProps {
  onStart: (config: TablesConfig) => void;
  onBack: () => void;
}

export function TablesSetup({ onStart, onBack }: TablesSetupProps) {
  const [selectedTable, setSelectedTable] = useState(2);
  const [rangeStart, setRangeStart] = useState(0);
  const [rangeEnd, setRangeEnd] = useState(10);
  const [shuffle, setShuffle] = useState(true);

  const tables = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  function handleRangeStartChange(value: number) {
    if (value > rangeEnd) {
      setRangeStart(rangeEnd);
      setRangeEnd(value);
    } else {
      setRangeStart(value);
    }
  }

  function handleRangeEndChange(value: number) {
    if (value < rangeStart) {
      setRangeEnd(rangeStart);
      setRangeStart(value);
    } else {
      setRangeEnd(value);
    }
  }

  function handleStart() {
    onStart({
      table: selectedTable,
      rangeStart: Math.min(rangeStart, rangeEnd),
      rangeEnd: Math.max(rangeStart, rangeEnd),
      shuffle
    });
  }

  return (
    <div className="flex flex-col items-center justify-center gap-8 p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-orange-600 mb-4">
        Times Tables Practice
      </h1>

      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Choose Your Table
          </h2>
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
            {tables.map((table) => (
              <button
                key={table}
                onClick={() => setSelectedTable(table)}
                className={`py-4 px-6 rounded-xl text-2xl font-bold transition-all transform hover:scale-105 ${
                  selectedTable === table
                    ? 'bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {table}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Practice with multipliers
          </h2>
          <p className="text-gray-600 text-sm mb-4">
            Example: × 0 to 10 means {selectedTable}×0, {selectedTable}×1 … {selectedTable}×10
          </p>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <label className="block text-sm font-semibold text-gray-600 mb-2">
                From
              </label>
              <select
                value={rangeStart}
                onChange={(e) => handleRangeStartChange(parseInt(e.target.value))}
                className="w-full py-3 px-4 rounded-xl text-xl font-bold bg-gray-100 border-2 border-gray-300 focus:border-orange-500 focus:outline-none"
              >
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
            <div className="text-3xl font-bold text-gray-400 mt-6">
              to
            </div>
            <div className="flex-1">
              <label className="block text-sm font-semibold text-gray-600 mb-2">
                To
              </label>
              <select
                value={rangeEnd}
                onChange={(e) => handleRangeEndChange(parseInt(e.target.value))}
                className="w-full py-3 px-4 rounded-xl text-xl font-bold bg-gray-100 border-2 border-gray-300 focus:border-orange-500 focus:outline-none"
              >
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={shuffle}
              onChange={(e) => setShuffle(e.target.checked)}
              className="w-6 h-6 rounded border-2 border-gray-300 text-orange-600 focus:ring-2 focus:ring-orange-500"
            />
            <div>
              <span className="text-lg font-semibold text-gray-800">
                Shuffle multipliers
              </span>
              <p className="text-sm text-gray-600">
                Cycles through all multipliers before repeating
              </p>
            </div>
          </label>
        </div>

        <div className="flex gap-4">
          <button
            onClick={onBack}
            className="flex-1 py-4 px-6 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-2xl text-xl font-bold shadow-lg transition-all"
          >
            ← Back
          </button>
          <button
            onClick={handleStart}
            className="flex-1 py-4 px-6 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-2xl text-xl font-bold shadow-lg transition-all transform hover:scale-105"
          >
            Start Practice
          </button>
        </div>
      </div>
    </div>
  );
}
