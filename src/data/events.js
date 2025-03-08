
import { 
  Code, 
  FileText,
  BrainCircuit,
  LucideLayoutDashboard,
  Bug,
  ShieldCheck,
  Music, 
  Film,
  Gamepad2,
  Presentation
} from 'lucide-react';

export const technicalEvents = [
  {
    id: 1,
    title: "PAPER PRESENTATION",
    description: "Present your research papers and innovative ideas",
    price: "₹500",
    venue: "Seminar Hall",
    time: "10:00 AM - 12:00 PM",
    icon: FileText,
    rules: [
      "Individual or team of 2 participants",
      "Presentation time: 8-10 minutes",
      "Q&A session: 2-3 minutes",
      "Submit abstract (300 words) before the event",
      "Bring your own laptop for presentation"
    ]
  },
  {
    id: 2,
    title: "HACKATHON HEROES",
    description: "A 24-hour coding marathon to solve real-world problems",
    price: "₹1000",
    venue: "CS Lab 1",
    time: "Starts at 9:00 AM",
    icon: Code,
    rules: [
      "Team of 2-4 members",
      "Problem statements provided at the start",
      "Bring your own laptops and peripherals",
      "Internet access will be provided",
      "Judging based on innovation, feasibility, and presentation"
    ]
  },
  {
    id: 3,
    title: "TECH TITANS",
    description: "Technical quiz covering latest technologies and trends",
    price: "₹300",
    venue: "Auditorium",
    time: "2:00 PM - 4:00 PM",
    icon: BrainCircuit,
    rules: [
      "Team of 2 members",
      "Multiple rounds with increasing difficulty",
      "No electronic gadgets allowed during the quiz",
      "Judge's decision is final",
      "Negative marking for wrong answers"
    ]
  },
  {
    id: 4,
    title: "DEBUG MASTERS",
    description: "Find and fix bugs in given code snippets",
    price: "₹400",
    venue: "CS Lab 2",
    time: "11:00 AM - 1:00 PM",
    icon: Bug,
    rules: [
      "Individual participation only",
      "Languages: C, C++, Java, Python",
      "Multiple debugging challenges with varying difficulty",
      "Time-based scoring system",
      "Participants must bring their own laptops"
    ]
  },
  {
    id: 5,
    title: "ROBO RUSH",
    description: "Showcase your robotics and automation projects",
    price: "₹800",
    venue: "Main Hall",
    time: "1:00 PM - 4:00 PM",
    icon: ShieldCheck,
    rules: [
      "Team of 2-5 members",
      "Bring your own robot/prototype",
      "Demonstration time: 10 minutes",
      "Q&A session: 5 minutes",
      "Judging based on innovation, functionality, and presentation"
    ]
  }
];

export const nonTechnicalEvents = [
  {
    id: 6,
    title: "SHOWOFF 2.0",
    description: "Showcase your talents in dance, music, or any performing art",
    price: "₹300",
    venue: "Open Auditorium",
    time: "2:00 PM - 5:00 PM",
    icon: Music,
    rules: [
      "Solo or group performance allowed",
      "Time limit: 5 minutes per performance",
      "Background music must be submitted beforehand",
      "Props allowed but must be arranged by participants",
      "Register at least 1 hour before the event"
    ]
  },
  {
    id: 7,
    title: "CINEPHILE",
    description: "Test your knowledge of cinema and entertainment",
    price: "₹200",
    venue: "Mini Auditorium",
    time: "3:00 PM - 4:30 PM",
    icon: Film,
    rules: [
      "Individual or team of 2 participants",
      "Multiple rounds covering different film genres",
      "Visual and audio identification rounds included",
      "No electronic gadgets allowed during the quiz",
      "Tie breakers will be held if necessary"
    ]
  },
  {
    id: 8,
    title: "E-GAMES",
    description: "Competitive gaming tournament",
    price: "₹600",
    venue: "Gaming Arena",
    time: "Throughout the day",
    icon: Gamepad2,
    rules: [
      "Games: Valorant, FIFA, COD Mobile",
      "Team registration required for team games",
      "Knockout tournament format",
      "Bring your own controllers (optional)",
      "Standard tournament rules apply"
    ]
  }
];

export const coordinators = [
  {
    title: "Student Coordinator",
    name: "John Doe",
    phone: "+91 98765 43210"
  },
  {
    title: "Staff Coordinator",
    name: "Dr. Smith",
    phone: "+91 91234 56789"
  }
];
