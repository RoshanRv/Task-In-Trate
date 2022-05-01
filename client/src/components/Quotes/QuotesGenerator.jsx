import React from 'react'

const QuotesGenerator = () => {

    const quotes=["The beautiful thing about learning is that no one can take it away from you.","Education is the most powerful weapon you can use to change the world.","The mind is not a vessel to be filled but a fire to be ignited.","Procrastination makes easy things hard and hard things harder.","The expert in anything was once a beginner.","The way to get started is to quit talking and begin doing.","I think it’s possible to ordinary people to choose to be extraordinary.","Motivation is what gets you started. Habit is what keeps you going.","The best way to predict your future is to create it.","The future belongs to those who believe in the beauty of their dreams.","He who asks a question is a fool for five minutes; he who does not ask a question remains a fool forever.","You cannot change your future, but you can change your habits, and surely your habits will change your future." ]

    const quote = quotes[Math.floor(Math.random()*quotes.length)]

  return quote
}

export default QuotesGenerator