
import { 
  Code, 
  FileCode, 
  Bug, 
  Robot, 
  Atom, 
  Music, 
  Film, 
  Gamepad, 
  Palette, 
  Mic
} from "lucide-react";

export const technicalEvents = [
  {
    id: "paper-presentation",
    title: "PAPER PRESENTATION",
    description: "Present your research papers and innovative ideas",
    icon: FileCode,
    rules: [
      "Each team can have a maximum of 2 members",
      "Presentation time: 8 minutes + 2 minutes for Q&A",
      "Papers must be in IEEE format",
      "Topics should be related to emerging technologies",
      "Submission deadline: March 20, 2025",
      "Plagiarism will result in disqualification"
    ],
    venue: "Main Auditorium",
    time: "10:00 AM - 12:30 PM"
  },
  {
    id: "hackathon-heroes",
    title: "HACKATHON HEROES",
    description: "A 24-hour coding marathon to solve real-world problems",
    icon: Code,
    rules: [
      "Teams of 2-4 members",
      "Theme will be announced at the start of the event",
      "Use of pre-written code is prohibited",
      "Judging based on innovation, practicality, and execution",
      "All tech stacks are allowed",
      "Participants must bring their own laptops and necessary peripherals"
    ],
    venue: "CS Department Labs",
    time: "Starts at 9:00 AM (24 hour event)"
  },
  {
    id: "tech-titans",
    title: "TECH TITANS",
    description: "Technical quiz covering latest technologies and trends",
    icon: Atom,
    rules: [
      "Individual participation",
      "Three rounds: Preliminary, Advanced, and Rapid Fire",
      "Topics include coding, IT trends, tech history, and current affairs",
      "Mobile phones are prohibited during the quiz",
      "Judge's decision will be final",
      "Tie-breaker rounds will be conducted if necessary"
    ],
    venue: "Seminar Hall 2",
    time: "2:00 PM - 4:00 PM"
  },
  {
    id: "debug-masters",
    title: "DEBUG MASTERS",
    description: "Find and fix bugs in given code snippets",
    icon: Bug,
    rules: [
      "Individual participation",
      "Languages: C, C++, Java, Python",
      "Three levels with increasing difficulty",
      "Time limit: 90 minutes",
      "Participants scoring above 70% will receive certificates",
      "Internet access is prohibited during the contest"
    ],
    venue: "Programming Lab",
    time: "11:00 AM - 12:30 PM"
  },
  {
    id: "robo-rush",
    title: "ROBO RUSH",
    description: "Showcase your robotics and automation projects",
    icon: Robot,
    rules: [
      "Teams of up to 3 members",
      "Project should be original and functioning",
      "5 minutes for presentation + 3 minutes for Q&A",
      "Power supply (220V) will be provided",
      "Pre-registration with project abstract required",
      "Projects will be judged on innovation, execution, and presentation"
    ],
    venue: "Robotics Lab",
    time: "1:00 PM - 4:00 PM"
  }
];

export const nonTechnicalEvents = [
  {
    id: "showoff-2",
    title: "SHOWOFF 2.0",
    description: "Showcase your talents in dance, music, or any performing art",
    icon: Music,
    rules: [
      "Solo and group performances allowed (max 8 members for group)",
      "Time limit: 5 minutes for solo, 8 minutes for group",
      "Pre-recorded music should be submitted in advance (MP3 format)",
      "No vulgarity in performance",
      "Props allowed but must be approved beforehand",
      "Judging based on creativity, skill, and overall presentation"
    ],
    venue: "Open Air Theater",
    time: "4:30 PM - 7:00 PM"
  },
  {
    id: "cinephile",
    title: "CINEPHILE",
    description: "Test your knowledge of cinema and entertainment",
    icon: Film,
    rules: [
      "Teams of 2 members",
      "Multiple rounds covering different aspects of cinema",
      "Questions on Hollywood, Bollywood, and regional cinema",
      "Visual and audio rounds included",
      "No electronic devices allowed during the quiz",
      "Tie-breaker rounds will be conducted if necessary"
    ],
    venue: "Mini Auditorium",
    time: "10:30 AM - 12:00 PM"
  },
  {
    id: "e-games",
    title: "E-GAMES",
    description: "Competitive gaming tournament",
    icon: Gamepad,
    rules: [
      "Games: Valorant, FIFA 24, Call of Duty Mobile",
      "Team size depends on the game (Valorant: 5, FIFA: 1, COD: 4)",
      "Knockout tournament format",
      "Participants can bring their own peripherals",
      "Cheating will result in immediate disqualification",
      "Registration closes on March 25, 2025"
    ],
    venue: "Digital Arena",
    time: "9:00 AM - 6:00 PM"
  },
  {
    id: "art-attack",
    title: "ART ATTACK",
    description: "Express your creativity through various art forms",
    icon: Palette,
    rules: [
      "Categories: Painting, Sketching, Digital Art",
      "Theme will be announced on-spot",
      "Duration: 2 hours",
      "A3 size sheets provided for traditional art",
      "For digital art, participants must bring their own devices",
      "Judging based on creativity, technique, and theme relevance"
    ],
    venue: "Art Gallery",
    time: "1:00 PM - 3:00 PM"
  },
  {
    id: "voice-of-pravesha",
    title: "VOICE OF PRAVESHA",
    description: "Singing competition to find the best vocalist",
    icon: Mic,
    rules: [
      "Solo performances only",
      "Time limit: 4 minutes",
      "One song in any language",
      "Karaoke/instrumental tracks allowed (submit in advance)",
      "Judging based on vocal quality, technique, and stage presence",
      "Registration closes on March 24, 2025"
    ],
    venue: "Music Room",
    time: "3:30 PM - 6:00 PM"
  }
];
