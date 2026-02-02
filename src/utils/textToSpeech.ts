type AudioCategory = 'welcome' | 'reminder' | 'correct' | 'tryagain' | 'borrow' | 'mulwelcome';

interface AudioFiles {
  [key: string]: string[];
}

const audioFiles: AudioFiles = {
  welcome: ['/audio/welcome-1.mp3'],
  reminder: ['/audio/reminder-1.mp3'],
  correct: [
    '/audio/correct-1.mp3',
    '/audio/correct-2.mp3',
    '/audio/correct-3.mp3',
    '/audio/correct-4.mp3',
    '/audio/correct-5.mp3',
    '/audio/correct-6.mp3',
  ],
  tryagain: [
    '/audio/tryagain-1.mp3',
    '/audio/tryagain-2.mp3',
    '/audio/tryagain-3.mp3',
    '/audio/tryagain-4.mp3',
    '/audio/tryagain-5.mp3',
    '/audio/tryagain-6.mp3',
  ],
  borrow: ['/audio/borrow-1.mp3', '/audio/borrow-2.mp3'],
  mulwelcome: ['/audio/mulwelcome-1.mp3', '/audio/mulwelcome-2.mp3'],
};

let currentAudio: HTMLAudioElement | null = null;
let audioUnlocked = false;
const audioCache = new Map<string, HTMLAudioElement>();
let soundEnabled = true;

function preloadAudio(): void {
  Object.values(audioFiles).forEach((files) => {
    files.forEach((file) => {
      if (!audioCache.has(file)) {
        const audio = new Audio(file);
        audio.preload = 'auto';
        audioCache.set(file, audio);
      }
    });
  });
}

preloadAudio();

export function unlockAudio(): void {
  if (audioUnlocked) return;

  try {
    const audio = new Audio();
    audio.src = 'data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAADhAC7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7//////////////////////////////////////////////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAAAAAAAAAAAA4T+SStxAAAAAAAAAAAAAAAAAAAA//MUZAAAAAGkAAAAAAAAA0gAAAAATEFN';
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        audio.pause();
        audio.currentTime = 0;
        audioUnlocked = true;
      }).catch(() => {
        audioUnlocked = true;
      });
    }
  } catch {
    audioUnlocked = true;
  }
}

function detectCategory(text: string): AudioCategory | null {
  const lowerText = text.toLowerCase();

  if (lowerText.includes('before we start') || lowerText.includes('grab a pencil')) {
    return 'reminder';
  }

  if (lowerText.includes('multiplication')) {
    return 'mulwelcome';
  }

  if (lowerText.includes('borrowing') || lowerText.includes('borrow') || lowerText.includes('regroup')) {
    return 'borrow';
  }

  if (lowerText.includes('correct') || lowerText.includes('great job') ||
      lowerText.includes('nice work') || lowerText.includes('you got it')) {
    return 'correct';
  }

  if (lowerText.includes('almost') || lowerText.includes('try again') ||
      lowerText.includes('not it') || lowerText.includes('close')) {
    return 'tryagain';
  }

  if (lowerText.includes('hi there') || lowerText.includes('welcome') ||
      lowerText.includes("let's start")) {
    return 'welcome';
  }

  return null;
}

function getRandomFile(category: AudioCategory): string {
  const files = audioFiles[category];
  const randomIndex = Math.floor(Math.random() * files.length);
  return files[randomIndex];
}

function playAudioFile(filePath: string): void {
  stopSpeaking();

  let audio = audioCache.get(filePath);

  if (!audio) {
    audio = new Audio(filePath);
    audioCache.set(filePath, audio);
  }

  audio.currentTime = 0;

  const playPromise = audio.play();
  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        audioUnlocked = true;
      })
      .catch(() => {
        // Silently fail - likely autoplay restriction
      });
  }

  currentAudio = audio;
}

export function speak(text: string): void {
  if (!soundEnabled) return;

  const category = detectCategory(text);

  if (category) {
    const filePath = getRandomFile(category);
    playAudioFile(filePath);
  }
}

export function stopSpeaking(): void {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
}

export function isSpeechSupported(): boolean {
  return true;
}

export function setSoundEnabled(enabled: boolean): void {
  soundEnabled = enabled;
  if (!enabled) {
    stopSpeaking();
  }
}

export function getSoundEnabled(): boolean {
  return soundEnabled;
}

export function speakWithProbability(text: string, probability: number): void {
  if (!soundEnabled) return;
  if (Math.random() < probability) {
    speak(text);
  }
}

export function speakSequence(categories: AudioCategory[]): void {
  if (!soundEnabled || categories.length === 0) return;

  const playNext = (index: number) => {
    if (index >= categories.length) return;

    const category = categories[index];
    const filePath = getRandomFile(category);

    let audio = audioCache.get(filePath);
    if (!audio) {
      audio = new Audio(filePath);
      audioCache.set(filePath, audio);
    }

    audio.currentTime = 0;

    audio.onended = () => {
      playNext(index + 1);
    };

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          audioUnlocked = true;
        })
        .catch(() => {
          playNext(index + 1);
        });
    }

    currentAudio = audio;
  };

  stopSpeaking();
  playNext(0);
}
