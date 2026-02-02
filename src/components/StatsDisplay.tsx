import { Trophy, Target, Zap } from 'lucide-react';

interface StatsDisplayProps {
  totalProblems: number;
  correctAnswers: number;
  currentStreak: number;
}

export function StatsDisplay({ totalProblems, correctAnswers, currentStreak }: StatsDisplayProps) {
  const successRate = totalProblems > 0 ? Math.round((correctAnswers / totalProblems) * 100) : 0;

  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-2xl shadow-lg p-3 sm:p-4 flex flex-col sm:flex-row gap-3 sm:gap-4 z-10 max-w-[calc(100vw-2rem)]">
      <div className="flex items-center gap-2">
        <Target className="text-blue-600 flex-shrink-0" size={20} />
        <div>
          <div className="text-xs text-gray-600">Problems</div>
          <div className="text-base sm:text-lg font-bold">{totalProblems}</div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Trophy className="text-green-600 flex-shrink-0" size={20} />
        <div>
          <div className="text-xs text-gray-600">Success</div>
          <div className="text-base sm:text-lg font-bold">{successRate}%</div>
        </div>
      </div>

      {currentStreak > 0 && (
        <div className="flex items-center gap-2">
          <Zap className="text-yellow-600 flex-shrink-0" size={20} fill="currentColor" />
          <div>
            <div className="text-xs text-gray-600">Streak</div>
            <div className="text-base sm:text-lg font-bold">{currentStreak}</div>
          </div>
        </div>
      )}
    </div>
  );
}
