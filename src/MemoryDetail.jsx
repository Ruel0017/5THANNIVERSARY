import { motion } from 'framer-motion'
import { useParams, useNavigate } from 'react-router-dom'
import './MemoryDetail.css'

function MemoryDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  const memories = [
    {
      id: 0,
      title: "The First Hello",
      description: "The moment I met you, I knew my life would never be the same. Your smile lit up the room and my heart.",
      emoji: "💫",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=600&fit=crop",
      fullStory: "It was a beautiful day when our eyes first met. I remember every detail - the way you smiled, the way you laughed, the way my heart skipped a beat. From that very first moment, I knew you were special. Little did I know that this would be the beginning of the most amazing journey of my life.",
      date: "The day that changed everything",
      highlights: [
        "Your beautiful smile that lit up the room",
        "The nervous butterflies in my stomach",
        "The feeling that I had found someone truly special",
        "The moment I knew my life would never be the same"
      ]
    },
    {
      id: 1,
      title: "Our First Date",
      description: "Every laugh, every conversation, every moment with you feels like magic. You make ordinary moments extraordinary.",
      emoji: "❤️",
      image: "https://images.unsplash.com/photo-1464047736614-af63643285bf?w=800&h=600&fit=crop",
      fullStory: "Our first date was pure magic. We talked for hours, and it felt like minutes. Every word you said made me fall deeper. The way you laugh, the way you see the world - everything about you captivated me. That evening, I realized that I wanted to spend every moment learning more about you.",
      date: "The best evening of my life",
      highlights: [
        "Hours of conversation that felt like minutes",
        "Your infectious laughter that made my heart soar",
        "The comfortable silence between our words",
        "Realizing I never wanted the night to end"
      ]
    },
    {
      id: 2,
      title: "Growing Together",
      description: "Through every challenge and celebration, you've been my rock, my joy, and my best friend.",
      emoji: "🌹",
      image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&h=600&fit=crop",
      fullStory: "Through ups and downs, laughter and tears, we've grown stronger together. You've been there for me in ways I never knew I needed. Every challenge we've faced has brought us closer. You're not just my love, you're my best friend, my partner, my everything.",
      date: "Our journey together",
      highlights: [
        "Supporting each other through tough times",
        "Celebrating every small victory together",
        "Building a life filled with love and laughter",
        "Becoming better people because of each other"
      ]
    },
    {
      id: 3,
      title: "Forever & Always",
      description: "Every day with you is a gift. You are my today and all of my tomorrows.",
      emoji: "💑",
      image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=600&fit=crop",
      fullStory: "Looking towards the future, I see us - hand in hand, side by side. Every dream I have includes you. You are my forever, my always, my everything. I can't wait to create a lifetime of beautiful memories with you. Here's to our past, our present, and our beautiful future together.",
      date: "Our forever starts now",
      highlights: [
        "A lifetime of love ahead of us",
        "Dreams we'll chase together",
        "Adventures waiting to be discovered",
        "Growing old together, hand in hand"
      ]
    }
  ]

  const memory = memories[parseInt(id)]

  if (!memory) {
    return <div>Memory not found</div>
  }

  return (
    <motion.div
      className="memory-detail"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.button
        className="back-button"
        onClick={() => navigate('/')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        ← Back to Our Story
      </motion.button>

      <motion.div
        className="detail-hero"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="detail-image-container">
          <img src={memory.image} alt={memory.title} />
          <div className="detail-emoji">{memory.emoji}</div>
        </div>
      </motion.div>

      <motion.div
        className="detail-content"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h1>{memory.title}</h1>
        <p className="detail-date">{memory.date}</p>

        <div className="detail-description">
          <p>{memory.fullStory}</p>
        </div>

        <div className="detail-highlights">
          <h2>What Made It Special ✨</h2>
          <ul>
            {memory.highlights.map((highlight, index) => (
              <motion.li
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                {highlight}
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div
          className="detail-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p>💕 With all my love 💕</p>
        </motion.div>
      </motion.div>

      {/* Floating Hearts */}
      <div className="floating-hearts">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="heart"
            initial={{ y: "100vh", x: Math.random() * 100 + "vw" }}
            animate={{
              y: "-100vh",
              x: Math.random() * 100 + "vw"
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              delay: i * 2,
              ease: "linear"
            }}
          >
            💖
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default MemoryDetail
