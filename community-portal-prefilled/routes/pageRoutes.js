// routes/pageRoutes.js

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const eventDetails = [
        {
            title: "Art Workshop",
            description: "Join us for a fun and creative art workshop where you can learn new techniques and express your creativity.", 
            Image: "/images/art-workshop.jpg",
            date: "2023-10-15",
            time: "10:00 AM - 2:00 PM",
            location: "Community Center, Room 101"
        },
        {
            title: "Tech Talk",
            description: "Join us for an insightful tech talk on the latest trends in technology and innovation.",
            Image: "/images/tech-talk.jpg",
            date: "2023-10-20",
            time: "2:00 PM - 4:00 PM",
            location: "Community Center, Room 202"
        },
        {
            title: "Cooking Class",
            description: "Learn to cook delicious meals with our expert chef in this interactive cooking class.",
            Image: "/images/cooking-class.jpg",
            date: "2023-10-25",
            time: "5:00 PM - 7:00 PM",
            location: "Community Center, Kitchen"
        },
        {
            title: "Yoga Session",
            description: "Relax and rejuvenate with our yoga session led by a certified instructor.",
            Image: "/images/yoga-session.jpg",
            date: "2023-10-30",
            time: "6:00 PM - 7:00 PM",
            location: "Community Center, Room 303"
        },
        {
            title: "Book Club",
            description: "Join our book club to discuss this month's book selection and share your thoughts with fellow readers.",
            Image: "/images/book-club.jpg",
            date: "2023-11-05",
            time: "3:00 PM - 5:00 PM",
            location: "Community Center, Room 404"
        },
        {
            title: "Community Park Run",
            description: "Join us for the monthly Park Run.",
            Image: "/images/park-run.jpg",
            date: "2023-11-10",
            time: "9:00 AM - 12:00 PM",
            location: "Community Park"
        },
        {
            title: "Music Night",
            description: "Enjoy a night of live music and entertainment with local artists at our community music night.",
            Image: "/images/music-night.jpg",
            date: "2023-11-15",
            time: "7:00 PM - 10:00 PM",
            location: "Community Center, Auditorium"
        },
        {
            title: "Photography Workshop",
            description: "Learn the art of photography in this hands-on workshop with a professional photographer.",
            Image: "/images/photography-workshop.jpg",
            date: "2023-11-20",
            time: "1:00 PM - 4:00 PM",
            location: "Community Center, Room 505"
        },
        {
            title: "Game Night",
            description: "Join us for a fun-filled game night with board games, card games, and more!",
            Image: "/images/game-night.jpg",
            date: "2023-11-30",
            time: "6:00 PM - 10:00 PM",
            location: "Community Center, Room 606"
        }
           
    
    ];
    res.render('pages/home', { eventDetails });
});

router.get('/about', (req, res) => {
    const teamMembers = [
        {
            name: "Daniel Lumb",
            role: "Frontend Developer",
            bio: "Passionate about clean UI and responsive design.",
            image: "/images/daniel.jpg"
        },
        {
            name: "Odirile Dire",
            role: "Backend Developer",
            bio: "Builds scalable backend systems and database logic.",
            image: "/images/backend.jpg"
        },
        {
            name: "Dehan Barnard",
            role: "Data Manager",
            bio: "Ensures data flows smoothly between components.",
            image: "/images/data.jpg"
        },
        {
            name: "Ruben Venter",
            role: "Team Lead & Documentation",
            bio: "Manages workflow, GitHub, and documentation.",
            image: "/images/lead.jpg"
        }
    ];

    res.render('pages/about', { teamMembers });
});


router.get('/events', (req, res) => {
    res.render('pages/events');
});

router.get('/contact', (req, res) => {
    res.render('pages/contact');   
});

router.get('/thankyou', (req, res) => {
    res.render('pages/thankyou')
});

module.exports = router;
