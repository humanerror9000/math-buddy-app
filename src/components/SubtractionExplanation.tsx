import type { MathProblem } from '../utils/problemGenerator';

interface SubtractionExplanationProps {
  problem: MathProblem;
}

export function SubtractionExplanation({ problem }: SubtractionExplanationProps) {
  const num1Str = problem.num1.toString();
  const num2Str = problem.num2.toString().padStart(num1Str.length, '0');
  const resultStr = problem.correctAnswer.toString().padStart(num1Str.length, '0');

  const steps: string[] = [];
  let borrowed = Array(num1Str.length).fill(false);
  let workingNum1 = num1Str.split('').map(Number);

  for (let i = num1Str.length - 1; i >= 0; i--) {
    const digit1 = workingNum1[i];
    const digit2 = parseInt(num2Str[i]);

    if (digit1 < digit2 && i > 0) {
      borrowed[i] = true;
      let borrowIdx = i - 1;
      while (borrowIdx >= 0 && workingNum1[borrowIdx] === 0) {
        workingNum1[borrowIdx] = 9;
        borrowIdx--;
      }
      if (borrowIdx >= 0) {
        workingNum1[borrowIdx]--;
        workingNum1[i] += 10;
      }

      const placeNames = ['ones', 'tens', 'hundreds', 'thousands'];
      const fromPlace = placeNames[num1Str.length - 1 - (i - 1)] || 'next place';
      const toPlace = placeNames[num1Str.length - 1 - i] || 'this place';

      steps.push(
        `We need to borrow from the ${fromPlace} to the ${toPlace}. ` +
        `Now we have ${workingNum1[i]} in the ${toPlace}.`
      );
    }

    const diff = workingNum1[i] - digit2;
    const placeName = ['ones', 'tens', 'hundreds', 'thousands'][num1Str.length - 1 - i] || 'place';
    steps.push(`${workingNum1[i]} minus ${digit2} in the ${placeName} equals ${diff}.`);
  }

  return (
    <div className="bg-blue-50 rounded-2xl p-8">
      <h3 className="text-2xl font-bold text-blue-800 mb-6">Step-by-Step Solution:</h3>

      <div className="bg-white rounded-xl p-6 mb-6 font-mono text-3xl">
        <div className="flex justify-end gap-8 mb-2">
          {borrowed.map((isBorrowed, idx) => (
            <div key={idx} className="w-12 text-center">
              {isBorrowed && <span className="text-red-500 text-xl">↓</span>}
            </div>
          ))}
        </div>
        <div className="flex justify-end gap-8">
          {workingNum1.map((digit, idx) => (
            <div key={idx} className="w-12 text-center">
              {borrowed[idx] ? (
                <span className="text-red-600 font-bold">{digit}</span>
              ) : (
                <span>{num1Str[idx]}</span>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-end gap-8 items-center">
          <span className="text-2xl">−</span>
          {num2Str.split('').map((digit, idx) => (
            <div key={idx} className="w-12 text-center">
              {digit}
            </div>
          ))}
        </div>
        <div className="border-t-4 border-gray-800 my-2"></div>
        <div className="flex justify-end gap-8">
          {resultStr.split('').map((digit, idx) => (
            <div key={idx} className="w-12 text-center text-green-600 font-bold">
              {digit}
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {steps.map((step, idx) => (
          <div key={idx} className="bg-yellow-100 rounded-lg p-4 text-lg">
            <span className="font-bold text-orange-600">Step {idx + 1}:</span> {step}
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-green-100 rounded-lg">
        <p className="text-lg text-green-800">
          <strong>Remember:</strong> When we don't have enough in one place, we borrow 10 from the next place!
        </p>
      </div>
    </div>
  );
}
