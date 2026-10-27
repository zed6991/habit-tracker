// Quote of the day on Home: one line from the list below, the same all day and a different one
// tomorrow. Picked from the local calendar date (todayISO), not the clock, so it turns over at
// the user's midnight and stays put across reloads.
export const QUOTES = [
  { q: 'We are what we repeatedly do. Excellence, then, is not an act, but a habit.', a: 'Will Durant' },
  { q: 'Motivation is what gets you started. Habit is what keeps you going.', a: 'Jim Ryun' },
  { q: 'Strength does not come from physical capacity. It comes from an indomitable will.', a: 'Mahatma Gandhi' },
  { q: "I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion.'", a: 'Muhammad Ali' },
  { q: 'Champions aren\'t made in gyms. Champions are made from something they have deep inside them: a desire, a dream, a vision.', a: 'Muhammad Ali' },
  { q: 'Discipline is the bridge between goals and accomplishment.', a: 'Jim Rohn' },
  { q: "Hard work beats talent when talent doesn't work hard.", a: 'Tim Notke' },
  { q: 'Fall seven times, stand up eight.', a: 'Japanese proverb' },
  { q: 'A journey of a thousand miles begins with a single step.', a: 'Lao Tzu' },
  { q: 'Do not pray for an easy life, pray for the strength to endure a difficult one.', a: 'Bruce Lee' },
  { q: 'The successful warrior is the average man, with laser-like focus.', a: 'Bruce Lee' },
  { q: 'Success is the sum of small efforts, repeated day in and day out.', a: 'Robert Collier' },
  { q: "It's not whether you get knocked down; it's whether you get up.", a: 'Vince Lombardi' },
  { q: "I've failed over and over and over again in my life. And that is why I succeed.", a: 'Michael Jordan' },
  { q: "You miss 100% of the shots you don't take.", a: 'Wayne Gretzky' },
  { q: 'Champions keep playing until they get it right.', a: 'Billie Jean King' },
  { q: "The difference between the impossible and the possible lies in a person's determination.", a: 'Tommy Lasorda' },
  { q: 'Energy and persistence conquer all things.', a: 'Benjamin Franklin' },
  { q: 'Act as if what you do makes a difference. It does.', a: 'William James' },
  { q: 'What we fear doing most is usually what we most need to do.', a: 'Tim Ferriss' },
  { q: "Everything you've ever wanted is on the other side of fear.", a: 'George Addair' },
  { q: 'Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.', a: 'Earl Nightingale' },
  { q: 'The only way of discovering the limits of the possible is to venture a little way past them into the impossible.', a: 'Arthur C. Clarke' },
  { q: 'Small daily improvements over time lead to stunning results.', a: 'Robin Sharma' },
  { q: 'The last three or four reps is what makes the muscle grow.', a: 'Arnold Schwarzenegger' },
  { q: 'You have power over your mind, not outside events. Realize this, and you will find strength.', a: 'Marcus Aurelius' },
  { q: 'I learned that courage was not the absence of fear, but the triumph over it.', a: 'Nelson Mandela' },
  { q: 'The man who moves a mountain begins by carrying away small stones.', a: 'Chinese proverb' },
  { q: 'Far and away the best prize that life offers is the chance to work hard at work worth doing.', a: 'Theodore Roosevelt' },
  { q: 'Today I will do what others won\'t, so tomorrow I can accomplish what others can\'t.', a: 'Jerry Rice' },
  { q: 'The harder the battle, the sweeter the victory.', a: 'Les Brown' },
]

// 'YYYY-MM-DD' -> its quote. Days are counted from the epoch in UTC so the date string alone
// decides, whatever the device's time zone; consecutive days walk the list in order.
export const quoteOfDay = iso => {
  const [y, m, d] = String(iso).split('-').map(Number)
  const day = Math.floor(Date.UTC(y, m - 1, d) / 86400000)
  if (!Number.isFinite(day)) return QUOTES[0]
  return QUOTES[((day % QUOTES.length) + QUOTES.length) % QUOTES.length]
}
