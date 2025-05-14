// routes/pageRoutes.js

const express = require('express');
const router = express.Router();
const contactSubmissions = []; // Temporary in-memory storage
const Event = require('../models/event')
const Contact = require('../models/contact');

// Global event details array (accessible by all routes)
const eventDetails = [
  {
    id: "art-workshop",
    title: "Art Workshop",
    description: "Join us for a fun and creative art workshop where you can learn new techniques and express your creativity.", 
    Image: "/images/art-workshop.jpg",
    date: "2023-10-15",
    time: "10:00 AM - 2:00 PM",
    location: "Community Center, Room 101"
  },
  {
    id: "tech-talk",
    title: "Tech Talk",
    description: "Join us for an insightful tech talk on the latest trends in technology and innovation.",
    Image: "/images/tech-talk.jpg",
    date: "2023-10-20",
    time: "2:00 PM - 4:00 PM",
    location: "Community Center, Room 202"
  },
  {
    id: "cooking-class",
    title: "Cooking Class",
    description: "Learn to cook delicious meals with our expert chef in this interactive cooking class.",
    Image: "/images/cooking-class.jpg",
    date: "2023-10-25",
    time: "5:00 PM - 7:00 PM",
    location: "Community Center, Kitchen"
  },
  {
    id: "yoga-session",
    title: "Yoga Session",
    description: "Relax and rejuvenate with our yoga session led by a certified instructor.",
    Image: "/images/yoga-session.jpg",
    date: "2023-10-30",
    time: "6:00 PM - 7:00 PM",
    location: "Community Center, Room 303"
  },
  {
    id: "book-club",
    title: "Book Club",
    description: "Join our book club to discuss this month's book selection and share your thoughts with fellow readers.",
    Image: "/images/book-club.jpg",
    date: "2023-11-05",
    time: "3:00 PM - 5:00 PM",
    location: "Community Center, Room 404"
  },
  {
    id: "park-run",
    title: "Community Park Run",
    description: "Join us for the monthly Park Run.",
    Image: "/images/park-run.jpg",
    date: "2023-11-10",
    time: "9:00 AM - 12:00 PM",
    location: "Community Park"
  },
  {
    id: "music-night",
    title: "Music Night",
    description: "Enjoy a night of live music and entertainment with local artists at our community music night.",
    Image: "/images/music-night.jpg",
    date: "2023-11-15",
    time: "7:00 PM - 10:00 PM",
    location: "Community Center, Auditorium"
  },
  {
    id: "photography-workshop",
    title: "Photography Workshop",
    description: "Learn the art of photography in this hands-on workshop with a professional photographer.",
    Image: "/images/photography-workshop.jpg",
    date: "2023-11-20",
    time: "1:00 PM - 4:00 PM",
    location: "Community Center, Room 505"
  },
  {
    id: "game-night",
    title: "Game Night",
    description: "Join us for a fun-filled game night with board games, card games, and more!",
    Image: "/images/game-night.jpg",
    date: "2023-11-30",
    time: "6:00 PM - 10:00 PM",
    location: "Community Center, Room 606"
  },
  {
    id: "career-workshop",
    title: "Career Workshop",
    description: "Get help with your CV, job applications, and interview skills in this career-focused workshop.",
    Image: "/images/career-workshop.jpg",
    date: "2023-12-05",
    time: "1:00 PM - 4:00 PM",
    location: "Community Center, Room 204"
  },
  {
    id: "craft-fair",
    title: "Holiday Craft Fair",
    description: "Shop handmade crafts from local artists — just in time for the holidays!",
    Image: "/images/craft-fair.jpg",
    date: "2023-12-10",
    time: "10:00 AM - 3:00 PM",
    location: "Community Center, Hall A"
  },
  {
    id: "coding-bootcamp",
    title: "Coding Bootcamp",
    description: "A one-day crash course in web development for beginners. Bring a laptop.",
    Image: "/images/coding-bootcamp.jpg",
    date: "2023-12-12",
    time: "9:00 AM - 5:00 PM",
    location: "TechHub, Room 301"
  },
  {
    id: "open-mic-night",
    title: "Open Mic Night",
    description: "Share your talent — poetry, music, comedy — or just come to enjoy the vibe.",
    Image: "/images/open-mic.jpg",
    date: "2023-12-15",
    time: "7:00 PM - 9:30 PM",
    location: "Community Café Stage"
  },
  {
    id: "sustainability",
    title: "Sustainability Workshop",
    description: "Learn about eco-friendly living and how to reduce your carbon footprint.",
    Image: "/images/sustainability.jpg",
    date: "2023-12-18",
    time: "3:00 PM - 5:00 PM",
    location: "Green Center, Room 102"
  },
  {
    id: "tech-mixer",
    title: "Tech Mixer & Networking Night",
    description: "Meet local developers, tech enthusiasts, and startups. Share ideas and build connections.",
    Image: "/images/tech-mixer.jpg",
    date: "2023-12-22",
    time: "6:00 PM - 9:00 PM",
    location: "Innovation Hub, Rooftop Lounge"
  }
];

// Routes
router.get('/', (req, res) => {
  const featuredEvents = eventDetails.slice(0, 3); // show only the first 3 events on home page
res.render('pages/home', { eventDetails: featuredEvents, page: 'home' });

});

const Team = require('../models/team');
router.get('/about', async (req, res) => {
  try{
    const teamMembers = await Team.find();
    res.render('pages/about', {teamMembers, page: 'about'});
  }catch (err) {
    res.status(500).send("Team load is unsuccessfull.");
  }
})

//Adding temporary search functionality
router.get('/events', (req, res) => {
  const search = req.query.search?.toLowerCase() || '';
  
  // Filter events if a search term is provided
  const filteredEvents = eventDetails.filter(event =>
    event.title.toLowerCase().includes(search) ||
    event.description.toLowerCase().includes(search)
  );

  res.render('pages/events', {
    eventDetails: filteredEvents,
    search, // pass current search value back to view
    page: 'events'
  });
});

router.get('/events/:id', (req, res) => {
  const { id } = req.params;
  const event = eventDetails.find(e => e.id === id);

  if (!event) {
    return res.status(404).send("Event not found");
  }

  res.render('pages/event-detail', { event, page: 'events' });
});

router.get('/contact', (req, res) => {
  const message = req.query.message || ''; // Extract message from query
  res.render('pages/contact', { page: 'contact', message }); // Pass it to the view
});

router.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).send("All fields are required.");
  }

  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailPattern.test(email)) {
    return res.status(400).send("Invalid email format.");
  }

  try {
    await Contact.create({ name, email, message }); // Saves to MongoDB
    res.redirect('/thankyou');
  } catch (error) {
    console.error("Failed to save contact:", error);
    res.status(500).send("Something went wrong. Please try again.");
  }
});

// Route to view submissions — for testing only
router.get('/submissions', (req, res) => {
  res.json(contactSubmissions);
});

router.get('/thankyou', (req, res) => {
  res.render('pages/thankyou');
});

module.exports = router;
