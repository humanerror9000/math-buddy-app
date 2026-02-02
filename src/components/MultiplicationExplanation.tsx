import type { MathProblem } from '../utils/problemGenerator';

interface MultiplicationExplanationProps {
  problem: MathProblem;
}

export function MultiplicationExplanation({ problem }: MultiplicationExplanationProps) {
  const { num1, num2, correctAnswer } = problem;

  const repeatedAdditionSteps = [];
  for (let i = 1; i <= Math.min(num1, 5); i++) {
    repeatedAdditionSteps.push(num2 * i);
  }

  const num2Str = num2.toString();
  const partialProducts = [];

  if (num2Str.length > 1) {
    for (let i = num2Str.length - 1; i >= 0; i--) {
      const digit = parseInt(num2Str[i]);
      const place = Math.pow(10, num2Str.length - 1 - i);
      const product = num1 * digit * place;
      partialProducts.push({
        digit,
        place: place,
        product,
        description: place === 1 ? 'ones' : place === 10 ? 'tens' : 'hundreds'
      });
    }
  }

  return (
    <div className="bg-purple-50 rounded-2xl p-8 space-y-6">
      <h3 className="text-2xl font-bold text-purple-800 mb-6">Let's Solve This Together!</h3>

      <div className="bg-white rounded-xl p-6">
        <h4 className="text-xl font-bold text-purple-700 mb-4">Method 1: Repeated Addition</h4>
        <p className="text-lg mb-4">
          {num1} × {num2} means "{num2} added together {num1} times"
        </p>

        <div className="space-y-2 text-lg">
          {repeatedAdditionSteps.map((sum, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <span className="font-mono">
                {Array(idx + 1).fill(num2).join(' + ')} = {sum}
              </span>
            </div>
          ))}
          {num1 > 5 && (
            <div className="text-gray-600 italic">
              ... continue adding {num2} until we've added it {num1} times
            </div>
          )}
          <div className="pt-2 border-t-2 border-purple-300 font-bold text-green-600">
            Final answer: {correctAnswer}
          </div>
        </div>
      </div>

      {partialProducts.length > 0 && (
        <div className="bg-white rounded-xl p-6">
          <h4 className="text-xl font-bold text-purple-700 mb-4">Method 2: Break It Down</h4>

          <div className="font-mono text-2xl mb-4">
            <div className="flex justify-end gap-4 mb-2">
              <span className="w-32 text-right">{num1}</span>
            </div>
            <div className="flex justify-end gap-4 items-center">
              <span className="text-xl">×</span>
              <span className="w-32 text-right">{num2}</span>
            </div>
            <div className="border-t-2 border-gray-800 my-2"></div>
            {partialProducts.slice().reverse().map((pp, idx) => (
              <div key={idx} className="flex justify-end gap-4 text-blue-600">
                <span className="w-32 text-right">{pp.product}</span>
                <span className="text-sm text-gray-600 w-24">({num1} × {pp.digit} {pp.description})</span>
              </div>
            ))}
            {partialProducts.length > 1 && (
              <>
                <div className="border-t-2 border-gray-800 my-2"></div>
                <div className="flex justify-end gap-4 text-green-600 font-bold">
                  <span className="w-32 text-right">{correctAnswer}</span>
                </div>
              </>
            )}
          </div>

          <div className="space-y-2 mt-4">
            {partialProducts.slice().reverse().map((pp, idx) => (
              <div key={idx} className="bg-yellow-100 rounded-lg p-3 text-lg">
                <span className="font-bold text-orange-600">Step {idx + 1}:</span> {num1} × {pp.digit} (in the {pp.description} place) = {pp.product}
              </div>
            ))}
            {partialProducts.length > 1 && (
              <div key="add" className="bg-yellow-100 rounded-lg p-3 text-lg">
                <span className="font-bold text-orange-600">Final Step:</span> Add them together: {partialProducts.map(pp => pp.product).join(' + ')} = {correctAnswer}
              </div>
            )}
          </div>
        </div>
      )}

      <div className="bg-green-100 rounded-lg p-4">
        <p className="text-lg text-green-800">
          <strong>Remember:</strong> Multiplication is like adding the same number many times!
        </p>
      </div>
    </div>
  );
}
