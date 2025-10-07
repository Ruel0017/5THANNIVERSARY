import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import MemoryDetail from './MemoryDetail';

function HomePage() {
	const navigate = useNavigate();
	const [isPlaying, setIsPlaying] = useState(false);
	const playerRef = useRef(null);

	const toggleMusic = () => {
		if (playerRef.current) {
			const iframe = playerRef.current;
			if (isPlaying) {
				// Pause
				iframe.contentWindow.postMessage(
					'{"event":"command","func":"pauseVideo","args":""}',
					'*',
				);
			} else {
				// Play
				iframe.contentWindow.postMessage(
					'{"event":"command","func":"playVideo","args":""}',
					'*',
				);
			}
			setIsPlaying(!isPlaying);
		}
	};
	const memories = [
		{
			title: 'The First Hello',
			description:
				'The moment I met you, I knew my life would never be the same. Your smile lit up the room and my heart.',
			emoji: '💫',
			image:
				'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=300&fit=crop',
			link: '#', // Add your link here
		},
		{
			title: 'Our First Date',
			description:
				'Every laugh, every conversation, every moment with you feels like magic. You make ordinary moments extraordinary.',
			emoji: '❤️',
			image:
				'https://images.unsplash.com/photo-1464047736614-af63643285bf?w=400&h=300&fit=crop',
			link: '#', // Add your link here
		},
		{
			title: 'Growing Together',
			description:
				"Through every challenge and celebration, you've been my rock, my joy, and my best friend.",
			emoji: '🌹',
			image:
				'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400&h=300&fit=crop',
			link: '#', // Add your link here
		},
		{
			title: 'Forever & Always',
			description:
				'Every day with you is a gift. You are my today and all of my tomorrows.',
			emoji: '💑',
			image:
				'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&h=300&fit=crop',
			link: '#', // Add your link here
		},
	];

	const handleCardClick = (index) => {
		navigate(`/memory/${index}`);
	};

	return (
		<div className='app'>
			{/* Hidden YouTube Player */}
			<iframe
				ref={playerRef}
				width='0'
				height='0'
				src='https://www.youtube.com/embed/OqrGmSjQLbs?enablejsapi=1&loop=1&playlist=OqrGmSjQLbs'
				title='Background Music'
				frameBorder='0'
				allow='autoplay; encrypted-media'
				style={{ display: 'none' }}
			/>

			{/* Music Control Button */}
			<motion.button
				className='music-toggle'
				onClick={toggleMusic}
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 2 }}>
				{isPlaying ? '🔊 Playing' : '🎵 Play Music'}
			</motion.button>

			{/* Hero Section */}
			<motion.section
				className='hero'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1.5 }}>
				<motion.h1
					initial={{ y: -50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.5, duration: 1 }}>
					Happy 5 Years Anniversary, My Bibi 💕
				</motion.h1>
				<motion.p
					className='hero-subtitle'
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 1, duration: 1 }}>
					Celebrating 5 wonderful years together
				</motion.p>
			</motion.section>

			{/* Love Story Timeline */}
			<section className='timeline'>
				<motion.h2
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.8 }}>
					Our Story 📖
				</motion.h2>

				<div className='memories-grid'>
					{memories.map((memory, index) => (
						<motion.div
							key={index}
							className='memory-card'
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.2, duration: 0.6 }}
							whileHover={{ scale: 1.05, rotate: 1 }}
							onClick={() => handleCardClick(index)}>
							<div className='memory-image'>
								<img src={memory.image} alt={memory.title} />
								<div className='memory-emoji'>{memory.emoji}</div>
							</div>
							<h3>{memory.title}</h3>
							<p>{memory.description}</p>
						</motion.div>
					))}
				</div>
			</section>

			{/* Invitation Section */}
			<motion.section
				className='invitation'
				initial={{ opacity: 0, scale: 0.8 }}
				whileInView={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.8 }}>
				<motion.div
					className='invitation-card'
					animate={{
						boxShadow: [
							'0 0 20px rgba(255, 105, 180, 0.3)',
							'0 0 40px rgba(255, 105, 180, 0.6)',
							'0 0 20px rgba(255, 105, 180, 0.3)',
						],
					}}
					transition={{ duration: 2, repeat: Infinity }}
					onClick={() => handleCardClick('#')} // Add your restaurant link/map here
				>
					<h2>You're Invited! 🎉</h2>
					<div className='invitation-details'>
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ delay: 0.3 }}>
							<h3>📅 When</h3>
							<p>Tomorrow after work</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ delay: 0.5 }}
							className='highlight-box'>
							<h3>✨ Our Special Evening</h3>
							<div className='itinerary'>
								<div className='itinerary-item'>
									<span className='step'>1️⃣</span>
									<div>
										<p className='activity'>Relaxing Massage</p>
										<p className='activity-detail'>
											Let's unwind together and release all the stress
										</p>
									</div>
								</div>
								<div className='arrow'>↓</div>
								<div className='itinerary-item'>
									<span className='step'>2️⃣</span>
									<div>
										<p className='activity'>Dinner Date</p>
										<p className='restaurant-name'>
											Inchangyeopsal Korean Restaurant
										</p>
										<p className='restaurant-address'>1316 Tayuman Street</p>
									</div>
								</div>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ delay: 0.7 }}>
							<h3>💝 Why</h3>
							<p>
								Because you deserve to be celebrated every single day, and I
								want to make tomorrow special for us!
							</p>
						</motion.div>
					</div>

					<motion.p
						className='love-note'
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ delay: 1 }}>
						I can't wait to spend this special evening with you. ❤️
					</motion.p>
				</motion.div>
			</motion.section>

			{/* Floating Hearts */}
			<div className='floating-hearts'>
				{[...Array(6)].map((_, i) => (
					<motion.div
						key={i}
						className='heart'
						initial={{ y: '100vh', x: Math.random() * 100 + 'vw' }}
						animate={{
							y: '-100vh',
							x: Math.random() * 100 + 'vw',
						}}
						transition={{
							duration: 10 + Math.random() * 5,
							repeat: Infinity,
							delay: i * 2,
							ease: 'linear',
						}}>
						💖
					</motion.div>
				))}
			</div>
		</div>
	);
}

function App() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/memory/:id" element={<MemoryDetail />} />
		</Routes>
	);
}

export default App;
