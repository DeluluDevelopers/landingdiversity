"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const events = [
  {
    id: 1,
    title: "Cultural Food Festival",
    description:
      "Join us for a celebration of diverse cuisines from around the world. Taste traditional dishes and learn about different cultures through food.",
    date: "March 15, 2024",
    time: "6:00 PM - 9:00 PM",
    location: "Student Center",
    category: "Cultural",
  },
  {
    id: 2,
    title: "Diversity in Tech Workshop",
    description:
      "Explore the importance of diversity in the technology industry. Learn about inclusive design and career opportunities in tech.",
    date: "March 22, 2024",
    time: "2:00 PM - 4:00 PM",
    location: "Computer Science Building",
    category: "Professional",
  },
  {
    id: 3,
    title: "International Student Meet & Greet",
    description:
      "Connect with international students and share your experiences. Build friendships across cultures and backgrounds.",
    date: "March 29, 2024",
    time: "5:30 PM - 7:30 PM",
    location: "International House",
    category: "Social",
  },
  {
    id: 4,
    title: "Diversity Film Screening",
    description:
      "Watch and discuss films that highlight diverse perspectives and experiences. Open discussion follows the screening.",
    date: "April 5, 2024",
    time: "7:00 PM - 9:30 PM",
    location: "Cinema Hall",
    category: "Educational",
  },
  {
    id: 5,
    title: "Multilingual Poetry Night",
    description:
      "Share poetry in your native language or English. Celebrate linguistic diversity and creative expression.",
    date: "April 12, 2024",
    time: "6:00 PM - 8:00 PM",
    location: "Library Auditorium",
    category: "Arts",
  },
  {
    id: 6,
    title: "Diversity Leadership Panel",
    description:
      "Hear from diverse leaders in various industries about their experiences and advice for future leaders.",
    date: "April 19, 2024",
    time: "3:00 PM - 5:00 PM",
    location: "Business School",
    category: "Professional",
  },
];

const upcomingEvents = [
  {
    id: 1,
    title: "Diversity Leadership Summit",
    description:
      "Join industry leaders and diversity advocates for a day of networking, workshops, and discussions on building inclusive workplaces.",
    date: "May 10, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "Convention Center",
    category: "Professional",
    registrationDeadline: "May 5, 2024",
    capacity: "200 attendees",
  },
  {
    id: 2,
    title: "Cultural Heritage Festival",
    description:
      "Celebrate the rich cultural heritage of our community with traditional performances, food, music, and art exhibitions.",
    date: "May 15, 2024",
    time: "2:00 PM - 8:00 PM",
    location: "City Park",
    category: "Cultural",
    registrationDeadline: "May 12, 2024",
    capacity: "500 attendees",
  },
  {
    id: 3,
    title: "Tech Diversity Hackathon",
    description:
      "A 24-hour coding challenge focused on creating technology solutions that promote diversity and inclusion.",
    date: "May 20-21, 2024",
    time: "24 hours",
    location: "Innovation Hub",
    category: "Technology",
    registrationDeadline: "May 15, 2024",
    capacity: "100 participants",
  },
  {
    id: 4,
    title: "Women in STEM Conference",
    description:
      "Empowering women in science, technology, engineering, and mathematics through mentorship and career development.",
    date: "May 25, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "University Auditorium",
    category: "Educational",
    registrationDeadline: "May 20, 2024",
    capacity: "150 attendees",
  },
  {
    id: 5,
    title: "Digital Accessibility Summit",
    description:
      "Learn about creating inclusive digital experiences and implementing accessibility best practices in technology and design.",
    date: "June 1, 2024",
    time: "9:00 AM - 6:00 PM",
    location: "Tech Innovation Center",
    category: "Technology",
    registrationDeadline: "May 28, 2024",
    capacity: "300 attendees",
  },
  {
    id: 6,
    title: "Accessibility Workshop",
    description:
      "Learn about creating inclusive digital experiences and physical spaces for people with disabilities.",
    date: "June 5, 2024",
    time: "1:00 PM - 5:00 PM",
    location: "Community Center",
    category: "Educational",
    registrationDeadline: "June 1, 2024",
    capacity: "75 attendees",
  },
];

export default function Home() {
  const scrollToEvents = () => {
    try {
      const eventsSection = document.getElementById("events-section");
      if (eventsSection) {
        eventsSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else {
        // Fallback: scroll to top of page
        window.scrollTo({
          top: window.innerHeight,
          behavior: "smooth",
        });
      }
    } catch (error) {
      console.log("Scroll error:", error);
      // Fallback: scroll to top of page
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  const handleCarouselHover = (isHovering: boolean) => {
    const carousel = document.querySelector(".animate-scroll-left");
    if (carousel) {
      if (isHovering) {
        carousel.classList.add("paused");
      } else {
        carousel.classList.remove("paused");
      }
    }
  };

  return (
    <div className='relative min-h-screen'>
      {/* Fixed Background Image */}
      <div
        className='fixed inset-0 bg-cover bg-center bg-no-repeat z-0'
        style={{ backgroundImage: "url(/ki.png)" }}
      >
        <div className='absolute inset-0 bg-black/30'></div>
      </div>

      {/* Scrollable Content Container */}
      <div className='relative z-10'>
        {/* Hero Section */}
        <div className='min-h-screen flex items-center justify-center relative'>
          <div className='text-center text-white'>
            <h1 className='text-6xl font-bold mb-6 animate-fade-in-up'>
              Celebrating Diversity
            </h1>
            <p className='text-xl mb-8 animate-fade-in-up delay-200 max-w-2xl mx-auto'>
              Building inclusive communities through understanding, respect, and
              shared experiences
            </p>
            <button
              onClick={scrollToEvents}
              className='bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-3 rounded-lg hover:bg-white/30 transition-all duration-300 animate-fade-in-up delay-400 cursor-pointer'
            >
              Explore Our Events
            </button>
          </div>
        </div>

        {/* Our Events Section */}
        <div
          id='events-section'
          className='min-h-screen bg-white/10 backdrop-blur-xs p-8'
        >
          <div className='max-w-7xl mx-auto'>
            <div className='text-center mb-12 animate-fade-in-up'>
              <h2 className='text-5xl font-bold text-white mb-4 text-glow drop-shadow-lg'>
                Our Events
              </h2>
              <p className='text-xl text-white/95 max-w-3xl mx-auto leading-relaxed font-semibold drop-shadow-md'>
                Join us for exciting events that celebrate diversity, promote
                inclusion, and bring our community together through meaningful
                experiences.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {events.map((event, index) => (
                <Card
                  key={event.id}
                  className={`glass-card animate-fade-in-up delay-${
                    (index + 1) * 100
                  } card-hover`}
                  style={{
                    background: "rgba(255, 255, 255, 0.25)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    borderRadius: "16px",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <CardHeader className='pb-3'>
                    <CardTitle className='text-glow text-xl text-white font-bold text-shadow-lg'>
                      {event.title}
                    </CardTitle>
                    <CardDescription className='text-white font-semibold leading-relaxed text-shadow-md'>
                      {event.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className='space-y-3'>
                      <div className='flex items-center gap-3'>
                        <span className='text-blue-200 icon-bounce text-lg text-shadow-sm'>
                          📅
                        </span>
                        <span className='text-sm text-white font-semibold text-shadow-sm'>
                          {event.date}
                        </span>
                      </div>
                      <div className='flex items-center gap-3'>
                        <span className='text-blue-200 icon-bounce text-lg text-shadow-sm'>
                          🕒
                        </span>
                        <span className='text-sm text-white font-semibold text-shadow-sm'>
                          {event.time}
                        </span>
                      </div>
                      <div className='flex items-center gap-3'>
                        <span className='text-blue-200 icon-bounce text-lg text-shadow-sm'>
                          📍
                        </span>
                        <span className='text-sm text-white font-semibold text-shadow-sm'>
                          {event.location}
                        </span>
                      </div>
                      <div className='pt-2'>
                        <span className='inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/30 text-white hover-scale glass-border text-shadow-sm'>
                          {event.category}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Events Section */}
        <div className='min-h-screen bg-white/10 backdrop-blur-xs p-8'>
          <div className='max-w-7xl mx-auto'>
            <div className='text-center mb-12 animate-fade-in-up delay-200'>
              <h2 className='text-5xl font-bold text-white mb-4 text-glow'>
                Upcoming Events
              </h2>
              <p className='text-xl text-white/95 max-w-3xl mx-auto leading-relaxed font-semibold'>
                Discover exciting events on the horizon. Register early to
                secure your spot and be part of our growing community.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {upcomingEvents.map((event, index) => (
                <Card
                  key={event.id}
                  className={`glass-card animate-fade-in-up delay-${
                    (index + 3) * 100
                  } card-hover`}
                  style={{
                    background: "rgba(255, 255, 255, 0.25)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    borderRadius: "16px",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <CardHeader className='pb-3'>
                    <CardTitle className='text-glow text-xl text-white font-bold text-shadow-lg'>
                      {event.title}
                    </CardTitle>
                    <CardDescription className='text-white font-semibold leading-relaxed text-shadow-md'>
                      {event.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className='space-y-3'>
                      <div className='flex items-center gap-3'>
                        <span className='text-blue-200 icon-bounce text-lg drop-shadow-sm'>
                          📅
                        </span>
                        <span className='text-sm text-white font-semibold text-shadow-sm'>
                          {event.date}
                        </span>
                      </div>
                      <div className='flex items-center gap-3'>
                        <span className='text-blue-200 icon-bounce text-lg drop-shadow-sm'>
                          🕒
                        </span>
                        <span className='text-sm text-white font-semibold text-shadow-sm'>
                          {event.time}
                        </span>
                      </div>
                      <div className='flex items-center gap-3'>
                        <span className='text-blue-200 icon-bounce text-lg drop-shadow-sm'>
                          📍
                        </span>
                        <span className='text-sm text-white font-semibold text-shadow-sm'>
                          {event.location}
                        </span>
                      </div>
                      <div className='flex items-center gap-3'>
                        <span className='text-orange-600 icon-bounce text-lg'>
                          ⏰
                        </span>
                        <span className='text-sm text-white font-semibold text-shadow-sm'>
                          Register by: {event.registrationDeadline}
                        </span>
                      </div>
                      <div className='flex items-center gap-3'>
                        <span className='text-green-600 icon-bounce text-lg'>
                          👥
                        </span>
                        <span className='text-sm text-white font-semibold text-shadow-sm'>
                          {event.capacity}
                        </span>
                      </div>
                      <div className='pt-2'>
                        <span className='inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/30 text-white hover-scale glass-border text-shadow-sm'>
                          {event.category}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Image Carousel Section */}
        <div className='bg-white/10 backdrop-blur-xs pt-12 pb-16 px-8'>
          <div className='max-w-7xl mx-auto'>
            <div className='text-center mb-12 animate-fade-in-up delay-300'>
              <h2 className='text-5xl font-bold text-white mb-4 text-glow'>
                Gallery
              </h2>
              <p className='text-xl text-white/95 max-w-3xl mx-auto leading-relaxed font-semibold'>
                Take a look at our past events and memorable moments
              </p>
            </div>

            <div
              className='relative overflow-hidden'
              onMouseEnter={() => handleCarouselHover(true)}
              onMouseLeave={() => handleCarouselHover(false)}
            >
              <div className='animate-scroll-left'>
                {/* First set of images */}
                <div className='flex'>
                  {[1, 2, 3, 4, 5, 6, 7].map((imageNum) => (
                    <div key={imageNum} className='flex-shrink-0 mx-4'>
                      <div
                        className='w-80 h-64 rounded-lg overflow-hidden glass-card hover:scale-150 transition-transform duration-300'
                        style={{
                          background: "rgba(255, 255, 255, 0.15)",
                          backdropFilter: "blur(20px)",
                          WebkitBackdropFilter: "blur(20px)",
                          border: "1px solid rgba(255, 255, 255, 0.3)",
                          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <img
                          src={`/${imageNum}.jpg`}
                          alt={`Gallery Image ${imageNum}`}
                          className='w-full h-full object-cover'
                        />
                      </div>
                    </div>
                  ))}
                </div>
                {/* Second set of images for seamless loop */}
                <div className='flex'>
                  {[1, 2, 3, 4, 5, 6, 7].map((imageNum) => (
                    <div
                      key={`duplicate-${imageNum}`}
                      className='flex-shrink-0 mx-4'
                    >
                      <div
                        className='w-80 h-64 rounded-lg overflow-hidden glass-card hover:scale-150 transition-transform duration-300'
                        style={{
                          background: "rgba(255, 255, 255, 0.15)",
                          backdropFilter: "blur(20px)",
                          WebkitBackdropFilter: "blur(20px)",
                          border: "1px solid rgba(255, 255, 255, 0.3)",
                          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <img
                          src={`/${imageNum}.jpg`}
                          alt={`Gallery Image ${imageNum}`}
                          className='w-full h-full object-cover'
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Mission Section */}
        <div className='bg-white/10 backdrop-blur-xs pt-12 pb-16 px-8'>
          <div className='max-w-7xl mx-auto'>
            <div className='text-center mb-12 animate-fade-in-up delay-400'>
              <h2 className='text-5xl font-bold text-white mb-4 text-glow'>
                Our Mission
              </h2>
              <p className='text-xl text-white/95 max-w-4xl mx-auto leading-relaxed font-semibold'>
                We are dedicated to fostering an inclusive community where
                diversity is celebrated, understood, and embraced. Our mission
                is to create spaces where every individual feels valued, heard,
                and empowered to contribute their unique perspectives.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <div className='text-center animate-slide-in-left delay-500'>
                <div className='text-6xl mb-4 animate-float'>🤝</div>
                <h3 className='text-2xl font-bold text-white mb-3 text-glow'>
                  Inclusivity
                </h3>
                <p className='text-white/95 leading-relaxed font-medium'>
                  Creating welcoming environments where everyone feels they
                  belong and can thrive regardless of their background or
                  identity.
                </p>
              </div>
              <div className='text-center animate-fade-in-up delay-600'>
                <div className='text-6xl mb-4 animate-float'>🌍</div>
                <h3 className='text-2xl font-bold text-white mb-3 text-glow'>
                  Cultural Awareness
                </h3>
                <p className='text-white/95 leading-relaxed font-medium'>
                  Promoting understanding and appreciation of different
                  cultures, backgrounds, and perspectives through education and
                  dialogue.
                </p>
              </div>
              <div className='text-center animate-slide-in-right delay-500'>
                <div className='text-6xl mb-4 animate-float'>💡</div>
                <h3 className='text-2xl font-bold text-white mb-3 text-glow'>
                  Education
                </h3>
                <p className='text-white/95 leading-relaxed font-medium'>
                  Providing opportunities to learn, grow, and develop skills for
                  inclusive leadership and community building.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className='bg-white/10 backdrop-blur-xs pt-12 pb-16 px-8'>
          <div className='max-w-7xl mx-auto'>
            <div className='text-center mb-12 animate-fade-in-up delay-600'>
              <h2 className='text-5xl font-bold text-white mb-4 text-glow'>
                Contact Us
              </h2>
              <p className='text-xl text-white/95 max-w-3xl mx-auto leading-relaxed font-semibold'>
                Get in touch with us to learn more about our events, join our
                community, or collaborate on diversity initiatives.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
              <Card
                className='glass-card card-hover animate-fade-in-up delay-700'
                style={{
                  background: "rgba(255, 255, 255, 0.15)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  borderRadius: "16px",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <CardHeader>
                  <CardTitle className='text-center text-glow text-xl text-white font-bold text-shadow-lg'>
                    📧 Email
                  </CardTitle>
                </CardHeader>
                <CardContent className='text-center'>
                  <p className='text-white font-semibold text-shadow-sm'>
                    info@diversityclub.org
                  </p>
                  <p className='text-sm text-white font-medium mt-2 text-shadow-sm'>
                    General inquiries
                  </p>
                </CardContent>
              </Card>

              <Card
                className='glass-card card-hover animate-fade-in-up delay-800'
                style={{
                  background: "rgba(255, 255, 255, 0.15)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  borderRadius: "16px",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <CardHeader>
                  <CardTitle className='text-center text-glow text-xl text-white font-bold drop-shadow-md'>
                    📱 Phone
                  </CardTitle>
                </CardHeader>
                <CardContent className='text-center'>
                  <p className='text-white/95 font-medium drop-shadow-sm'>
                    +91 81261 33363
                  </p>
                  <p className='text-sm text-white/90 mt-2 drop-shadow-sm'>
                    Mon-Fri 9AM-5PM
                  </p>
                </CardContent>
              </Card>

              <Card
                className='glass-card card-hover animate-fade-in-up delay-900'
                style={{
                  background: "rgba(255, 255, 255, 0.15)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  borderRadius: "16px",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <CardHeader>
                  <CardTitle className='text-center text-glow text-xl text-white font-bold drop-shadow-md'>
                    📍 Address
                  </CardTitle>
                </CardHeader>
                <CardContent className='text-center'>
                  <p className='text-white/95 font-medium drop-shadow-sm'>
                    DSW Office Sharda
                  </p>
                  <p className='text-sm text-white/90 mt-2 drop-shadow-sm'>
                    Sharda University
                  </p>
                </CardContent>
              </Card>

              <Card
                className='glass-card card-hover animate-fade-in-up delay-1000'
                style={{
                  background: "rgba(255, 255, 255, 0.15)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  borderRadius: "16px",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <CardHeader>
                  <CardTitle className='text-center text-glow text-xl text-white font-bold drop-shadow-md'>
                    🌐 Social Media
                  </CardTitle>
                </CardHeader>
                <CardContent className='text-center'>
                  <p className='text-white/95 font-medium drop-shadow-sm'>
                    @diversityclubsharda
                  </p>
                  <p className='text-sm text-white/90 mt-2 drop-shadow-sm'>
                    <a
                      href='https://www.instagram.com/diversityclubsharda?igsh=dTRzbWgyaWkzYXJu'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='hover:text-blue-200 transition-colors'
                    >
                      Follow us on Instagram
                    </a>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
