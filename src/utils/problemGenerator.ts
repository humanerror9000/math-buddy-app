export type ProblemType = 'subtraction' | 'multiplication';
export type SubtractionDifficulty = 'easy' | 'medium' | 'hard';
export type MultiplicationDifficulty = 'single-digit' | 'single-double';

export interface MathProblem {
  type: ProblemType;
  difficulty: string;
  num1: number;
  num2: number;
  correctAnswer: number;
  displayText: string;
}

function random(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateSubtractionProblem(difficulty: SubtractionDifficulty): MathProblem {
  let num1: number;
  let num2: number;

  if (difficulty === 'easy') {
    num1 = random(20, 99);
    const maxNum2 = Math.min(num1 - 1, 89);
    num2 = random(10, maxNum2);

    const ones1 = num1 % 10;
    const ones2 = num2 % 10;

    if (ones1 < ones2) {
      num2 = num2 - ones2 + random(0, ones1);
    }
  } else if (difficulty === 'medium') {
    if (Math.random() < 0.5) {
      num1 = random(100, 999);
      const maxNum2 = Math.min(num1 - 1, 950);
      num2 = random(50, maxNum2);
    } else {
      num1 = random(50, 99);
      const maxNum2 = Math.min(num1 - 1, 90);
      num2 = random(20, maxNum2);
    }
  } else {
    if (Math.random() < 0.5) {
      num1 = random(1000, 9999);
      const maxNum2 = Math.min(num1 - 1, 9500);
      num2 = random(500, maxNum2);
    } else {
      num1 = random(100, 999);
      const maxNum2 = Math.min(num1 - 1, 950);
      num2 = random(50, maxNum2);
    }

    let requiresBorrowing = false;
    const str1 = num1.toString();
    const str2 = num2.toString().padStart(str1.length, '0');
    for (let i = str1.length - 1; i >= 0; i--) {
      if (parseInt(str1[i]) < parseInt(str2[i])) {
        requiresBorrowing = true;
        break;
      }
    }

    if (!requiresBorrowing) {
      const lastDigit1 = num1 % 10;
      const lastDigit2 = num2 % 10;
      if (lastDigit1 >= lastDigit2 && lastDigit1 < 9) {
        const newLastDigit = random(lastDigit1 + 1, 9);
        const potentialNum2 = num2 - lastDigit2 + newLastDigit;

        if (potentialNum2 < num1) {
          num2 = potentialNum2;
        }
      }
    }
  }

  if (num2 >= num1) {
    if (num1 > 100) {
      num2 = num1 - random(50, Math.min(200, num1 - 1));
    } else {
      num2 = num1 - random(10, Math.min(50, num1 - 1));
    }
  }

  const correctAnswer = num1 - num2;

  return {
    type: 'subtraction',
    difficulty,
    num1,
    num2,
    correctAnswer,
    displayText: `${num1} - ${num2}`
  };
}

export function generateMultiplicationProblem(difficulty: MultiplicationDifficulty): MathProblem {
  let num1: number;
  let num2: number;

  if (difficulty === 'single-digit') {
    num1 = random(2, 9);
    num2 = random(2, 9);
  } else {
    num1 = random(2, 9);
    num2 = random(10, 99);
  }

  const correctAnswer = num1 * num2;

  return {
    type: 'multiplication',
    difficulty,
    num1,
    num2,
    correctAnswer,
    displayText: `${num1} × ${num2}`
  };
}
