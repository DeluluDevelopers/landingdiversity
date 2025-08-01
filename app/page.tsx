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
    title: "LGBTQ+ Pride Celebration",
    description:
      "A day of celebration, education, and advocacy for LGBTQ+ rights and inclusion in our community.",
    date: "June 1, 2024",
    time: "12:00 PM - 10:00 PM",
    location: "Downtown Plaza",
    category: "Social",
    registrationDeadline: "May 28, 2024",
    capacity: "1000 attendees",
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
  return (
    <div>
      {/* Hero Section with Background Image */}
      <div
        className='min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: "url(/bg.webp)" }}
      ></div>

      {/* Our Events Section */}
      <div className='min-h-screen bg-background p-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-12'>
            <h1 className='text-4xl font-bold text-foreground mb-4'>
              Our Events
            </h1>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
              Join us for exciting events that celebrate diversity, promote
              inclusion, and bring our community together.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {events.map((event) => (
              <Card
                key={event.id}
                className='hover:shadow-lg transition-shadow duration-300 bg-card/80'
              >
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className='space-y-3'>
                    <div className='flex items-center gap-2'>
                      <span className='text-blue-600'>📅</span>
                      <span className='text-sm text-muted-foreground'>
                        {event.date}
                      </span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <span className='text-blue-600'>🕒</span>
                      <span className='text-sm text-muted-foreground'>
                        {event.time}
                      </span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <span className='text-blue-600'>📍</span>
                      <span className='text-sm text-muted-foreground'>
                        {event.location}
                      </span>
                    </div>
                    <div className='pt-2'>
                      <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent text-accent-foreground'>
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
      <div className='min-h-screen bg-background p-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-12'>
            <h1 className='text-4xl font-bold text-foreground mb-4'>
              Upcoming Events
            </h1>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
              Discover exciting events on the horizon. Register early to secure
              your spot!
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {upcomingEvents.map((event) => (
              <Card
                key={event.id}
                className='hover:shadow-lg transition-shadow duration-300 bg-card/80'
              >
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className='space-y-3'>
                    <div className='flex items-center gap-2'>
                      <span className='text-blue-600'>📅</span>
                      <span className='text-sm text-muted-foreground'>
                        {event.date}
                      </span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <span className='text-blue-600'>🕒</span>
                      <span className='text-sm text-muted-foreground'>
                        {event.time}
                      </span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <span className='text-blue-600'>📍</span>
                      <span className='text-sm text-muted-foreground'>
                        {event.location}
                      </span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <span className='text-orange-600'>⏰</span>
                      <span className='text-sm text-muted-foreground'>
                        Register by: {event.registrationDeadline}
                      </span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <span className='text-green-600'>👥</span>
                      <span className='text-sm text-muted-foreground'>
                        {event.capacity}
                      </span>
                    </div>
                    <div className='pt-2'>
                      <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent text-accent-foreground'>
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

      {/* Our Mission Section */}
      <div className='bg-background pt-8 pb-16 pl-8 pr-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-12'>
            <h1 className='text-4xl font-bold text-foreground mb-4'>
              Our Mission
            </h1>
            <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
              We are dedicated to fostering an inclusive community where
              diversity is celebrated, understood, and embraced. Our mission is
              to create spaces where every individual feels valued, heard, and
              empowered to contribute their unique perspectives.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='text-center'>
              <div className='text-4xl mb-4'>🤝</div>
              <h3 className='text-xl font-bold text-foreground mb-2'>
                Inclusivity
              </h3>
              <p className='text-muted-foreground'>
                Creating welcoming environments where everyone feels they belong
                and can thrive.
              </p>
            </div>
            <div className='text-center'>
              <div className='text-4xl mb-4'>🌍</div>
              <h3 className='text-xl font-bold text-foreground mb-2'>
                Cultural Awareness
              </h3>
              <p className='text-muted-foreground'>
                Promoting understanding and appreciation of different cultures,
                backgrounds, and perspectives.
              </p>
            </div>
            <div className='text-center'>
              <div className='text-4xl mb-4'>💡</div>
              <h3 className='text-xl font-bold text-foreground mb-2'>
                Education
              </h3>
              <p className='text-muted-foreground'>
                Providing opportunities to learn, grow, and develop skills for
                inclusive leadership.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className='bg-background pt-8 pb-16 pl-8 pr-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-12'>
            <h1 className='text-4xl font-bold text-foreground mb-4'>
              Contact Us
            </h1>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
              Get in touch with us to learn more about our events, join our
              community, or collaborate on diversity initiatives.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            <Card className='hover:shadow-lg transition-shadow duration-300 bg-card/80'>
              <CardHeader>
                <CardTitle className='text-center'>📧 Email</CardTitle>
              </CardHeader>
              <CardContent className='text-center'>
                <p className='text-muted-foreground'>info@diversityclub.org</p>
                <p className='text-sm text-muted-foreground mt-2'>
                  General inquiries
                </p>
              </CardContent>
            </Card>

            <Card className='hover:shadow-lg transition-shadow duration-300 bg-card/80'>
              <CardHeader>
                <CardTitle className='text-center'>📱 Phone</CardTitle>
              </CardHeader>
              <CardContent className='text-center'>
                <p className='text-muted-foreground'>+1 (555) 123-4567</p>
                <p className='text-sm text-muted-foreground mt-2'>
                  Mon-Fri 9AM-5PM
                </p>
              </CardContent>
            </Card>

            <Card className='hover:shadow-lg transition-shadow duration-300 bg-card/80'>
              <CardHeader>
                <CardTitle className='text-center'>📍 Address</CardTitle>
              </CardHeader>
              <CardContent className='text-center'>
                <p className='text-muted-foreground'>123 Diversity Street</p>
                <p className='text-muted-foreground'>Community Center</p>
                <p className='text-sm text-muted-foreground mt-2'>
                  City, State 12345
                </p>
              </CardContent>
            </Card>

            <Card className='hover:shadow-lg transition-shadow duration-300 bg-card/80'>
              <CardHeader>
                <CardTitle className='text-center'>🌐 Social Media</CardTitle>
              </CardHeader>
              <CardContent className='text-center'>
                <p className='text-muted-foreground'>@DiversityClub</p>
                <p className='text-sm text-muted-foreground mt-2'>
                  Follow us for updates
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
