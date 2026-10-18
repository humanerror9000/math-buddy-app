# Math Buddy sound effects

Drop finished files in this folder named `<event>-<number>.<ext>`, e.g.
`answer-correct-1.wav`, `answer-correct-2.wav`. Every file with the same event
name becomes a variation, picked at random without immediate repeats. The app
can already call events that have no files yet; they stay silent until files land.

Buddy's non-verbal voice goes in `../voice/` with the same naming.

## Delivery specs

- **Format:** `.m4a` (AAC, 128 kbps) or `.mp3`. Mono unless stereo is doing real work. Keep 48 kHz WAV masters outside the repo.
- **Head trim:** zero pre-roll. Any silence before the transient feels like lag on an iPad.
- **Length:** under 1 s for anything that fires during practice. Celebrations can run 2–3 s.
- **Level:** peaks at −3 dBFS. Match loudness across the set; voice sits on top and sfx play at 80% under it.
- **Variations:** the "how many" column. The engine also adds ±0.5 semitone of random pitch to sfx, so variations should differ in character, not just pitch.
- **Pitched sounds** (marked ♪): record a single note on **C5**. The engine transposes it to build scales (skip-counting, streaks), so keep them free of tonal ambiguity and pitch drift.
- **Tone:** wrong-answer sounds must feel like "hmm, not yet", never a buzzer. Soft, low, short.

## 1. Practice (highest priority)

| Event | How many | When it plays | Notes |
|---|---|---|---|
| `answer-correct` | 4 | First-try correct answer | Bright, quick, rewarding |
| `answer-correct-retry` | 3 | Correct on the second try | Warmer, a bit smaller |
| `answer-wrong` | 3 | Wrong answer, hint coming | Gentle, curious, not punishing |
| `answer-reveal` | 1 | Answer shown after two misses | Neutral "here it is" |
| `streak-step` ♪ | 1 | Each first-try answer in a row | Engine raises it a step each time |
| `star-earn` | 3 | Each star flying to the counter | Sparkly, can stack quickly |
| `star-bonus` | 1 | Bonus stars at end of round | Bigger version of star-earn |
| `round-complete` | 2 | Summary screen | Short fanfare, 2–3 s |
| `level-up` | 1 | Bigger numbers unlocked | Special, rare, memorable |
| `keypad-tap` | 3 | Number keypad presses | Very short, soft click |
| `keypad-delete` | 1 | Backspace | |
| `choice-tap` | 2 | Tapping a multiple-choice answer | |
| `hint-start` | 1 | A visual hint begins | "Let's look" cue |
| `type-tick` | 3 | An instruction starts typing in (Story math), once per instruction | A soft 2–3 s shimmer that carries the whole typing; the letters themselves are silent |

## 2. Visual math (arrays, division, borrowing)

| Event | How many | When it plays | Notes |
|---|---|---|---|
| `count-tick` ♪ | 1 | Each row lit while skip-counting | Engine plays it up a scale: 7, 14, 21… becomes a melody |
| `row-light` | 2 | A row highlights without counting | Soft shimmer |
| `deal-slide` | 3 | Cookie/item slides into a group | Quick swish |
| `deal-land` | 3 | It lands in the tray | Soft, tactile |
| `block-pick` | 2 | Picking up a base-ten block | |
| `block-drop` | 3 | Dropping it into a column | Wooden, satisfying |
| `ten-break` | 2 | A ten-rod breaks into 10 ones (borrowing) | **Signature sound** of the subtraction module. Snap + scatter |
| `hundred-break` | 1 | A hundred-flat breaks into 10 tens | Bigger, chunkier cousin of ten-break |
| `ones-scatter` | 2 | Ten loose ones spread out in a column | Can be the tail of ten-break |
| `cross-out` | 3 | Taking away (subtracting) blocks | Light swipe/poof |
| `column-done` | 1 | One column of a subtraction finished | Small "click into place" |
| `split-array` | 1 | An array splits in two (7×8 = 5×8 + 2×8) | Gentle crack/slide |

## 3. Room and Treasures

| Event | How many | When it plays | Notes |
|---|---|---|---|
| `sheet-open` | 1 | Practice or Treasures panel slides up | |
| `sheet-close` | 1 | Panel slides down | |
| `treasure-unlock` | 2 | Unlocking a treasure with stars | Gift/unwrap feel, never a cash register |
| `cant-afford` | 1 | Not enough stars | Soft, encouraging |
| `place-wood` | 3 | Placing shelf, table, bed | Thunk |
| `place-soft` | 3 | Beanbag, plush, pillow | Squish/flump |
| `place-rug` | 2 | Rug lands | Fabric flop |
| `place-plant` | 2 | Plant, pot | Ceramic tap + leaf rustle |
| `place-glass` | 2 | Fishbowl, lamp | Gentle clink |
| `place-pet` | 1 | Kitty arrives | Could be a meow |
| `item-select` | 2 | Tapping furniture to edit it | |
| `item-rotate` | 2 | Turn button | Short slide/creak |
| `item-recolor` | 3 | Color button | Paint splat/bloop |
| `item-putaway` | 1 | Item goes back to inventory | Poof |
| `cant-place` | 1 | Spot is taken | Soft bonk |
| `wardrobe-equip` | 2 | Putting an outfit on Buddy | Fabric swish |

## 4. Buddy's voice (non-verbal) → `../voice/`

One shared set for both Buddies (the voices are child-like, so they fit either), named
`<event>-<number>`, e.g. `happy-1.m4a`. Gibberish, hums and syllables, no real words, so the
same set works in English and Spanish.

| Event | How many | When it plays |
|---|---|---|
| `hello` | 3 | Opening the app, tapping Buddy |
| `happy` | 5 | Correct answers, new furniture |
| `cheer` | 3 | End of round, level up |
| `hmm` | 4 | Thinking while she works on a question |
| `curious` | 3 | Starting a hint ("ooh, look!") |
| `oops` | 3 | Buddy makes a mistake for her to catch |
| `thanks` | 3 | She corrects Buddy's mistake |
| `giggle` | 3 | Tapping/tickling Buddy |
| `gasp` | 2 | Surprise: level up, rare item |
| `sleepy` | 2 | Idle for a long time |
| `hop` | 3 | Jump (effort sound) |
| `step` | 4 | Footsteps while walking (sfx-like, can be shared by both) |

## 5. Later (not needed yet)

- `room-music` and `practice-music` loops (the engine doesn't loop yet; ask when ready)
- Seasonal or event stingers for special items
