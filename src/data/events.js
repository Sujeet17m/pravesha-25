
import { 
  Code, 
  Cpu, 
  Globe, 
  Brackets, 
  Puzzle, 
  Gamepad2, 
  Music, 
  Camera, 
  Speech, 
  BookOpen 
} from 'lucide-react';

export const technicalEvents = [
  {
    id: 1,
    title: "Code Combat",
    description: "Test your coding skills with our competitive programming challenge.",
    venue: "CS Lab 1",
    time: "10:00 AM - 12:00 PM",
    icon: Code,
    rules: [
      "Individual participation only",
      "Languages allowed: C, C++, Java, Python",
      "Internet access is not permitted during the contest",
      "Time limit: 2 hours",
      "Participants must bring their own laptops"
    ]
  },
  {
    id: 2,
    title: "Tech Quiz",
    description: "Challenge your knowledge on various technical domains and current trends.",
    venue: "Seminar Hall",
    time: "2:00 PM - 3:30 PM",
    icon: Cpu,
    rules: [
      "Team of 2 members",
      "Multiple choice and rapid fire rounds",
      "No electronic gadgets allowed during the quiz",
      "Judge's decision is final",
      "Negative marking for wrong answers"
    ]
  },
  {
    id: 3,
    title: "Web Design",
    description: "Showcase your creativity and technical skills in web development.",
    venue: "CS Lab 2",
    time: "11:00 AM - 1:00 PM",
    icon: Globe,
    rules: [
      "Team of 2 members",
      "Design a website based on the given theme",
      "Pre-built templates are not allowed",
      "Frameworks allowed: React, Angular, Vue",
      "Time limit: 2 hours"
    ]
  },
  {
    id: 4,
    title: "Debug the Code",
    description: "Find and fix errors in given code snippets within time constraints.",
    venue: "CS Lab 3",
    time: "3:00 PM - 4:00 PM",
    icon: Brackets,
    rules: [
      "Individual participation",
      "Multiple programming languages will be provided",
      "Time limit: 1 hour",
      "Points based on number of bugs fixed",
      "Leaderboard will be updated live"
    ]
  }
];

export const nonTechnicalEvents = [
  {
    id: 5,
    title: "Puzzle Mania",
    description: "Challenge your logical thinking and problem-solving skills.",
    venue: "Main Auditorium",
    time: "12:00 PM - 1:00 PM",
    icon: Puzzle,
    rules: [
      "Individual participation",
      "Multiple rounds with increasing difficulty",
      "Time limit for each puzzle",
      "No electronic aids allowed",
      "Participants must register 30 minutes before event"
    ]
  },
  {
    id: 6,
    title: "Gaming Tournament",
    description: "Compete in popular games like Valorant and FIFA.",
    venue: "Gaming Arena",
    time: "Throughout the day",
    icon: Gamepad2,
    rules: [
      "Team registration required for team games",
      "Knockout tournament format",
      "Standard tournament rules apply",
      "Players must bring their own controllers",
      "Unsportsmanlike conduct will result in disqualification"
    ]
  },
  {
    id: 7,
    title: "Music Competition",
    description: "Showcase your musical talent in singing or instrumental performance.",
    venue: "Open Auditorium",
    time: "2:00 PM - 5:00 PM",
    icon: Music,
    rules: [
      "Solo or group performance allowed",
      "Time limit: 5 minutes per performance",
      "Background music allowed for singing",
      "Participants must bring their own instruments",
      "Registration closes 1 hour before event"
    ]
  },
  {
    id: 8,
    title: "Photography Contest",
    description: "Capture the essence of the symposium through your lens.",
    venue: "Campus-wide",
    time: "Throughout the day",
    icon: Camera,
    rules: [
      "Theme will be announced on the day of event",
      "Only mobile photography allowed",
      "No editing or filters permitted",
      "Submit up to 3 entries per participant",
      "Deadline for submission: 4:00 PM"
    ]
  },
  {
    id: 9,
    title: "Just A Minute",
    description: "Test your impromptu speaking skills on random topics.",
    venue: "Seminar Hall 2",
    time: "11:30 AM - 1:00 PM",
    icon: Speech,
    rules: [
      "Individual participation",
      "Topics given on the spot",
      "Exactly 1 minute to speak",
      "No repetition, hesitation, or deviation",
      "Judges' decision is final"
    ]
  },
  {
    id: 10,
    title: "Literary Events",
    description: "Participate in essay writing, poetry, or debate competitions.",
    venue: "Conference Room",
    time: "10:00 AM - 12:00 PM",
    icon: BookOpen,
    rules: [
      "Registration for specific literary event required",
      "Topics announced 15 minutes before start",
      "Time limits vary by sub-event",
      "Both English and regional language entries accepted",
      "Plagiarism will lead to disqualification"
    ]
  }
];
