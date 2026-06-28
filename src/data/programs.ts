import { 
  BookOpen, 
  MessageCircle, 
  Brain, 
  Palette, 
  Music, 
  Activity, 
  PenTool 
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface ProgramSection {
  title: string;
  items: string[];
}

export interface ProgramPath {
  title?: string;
  info?: string;
  sections: ProgramSection[];
}

export interface LearningProgram {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  paths: ProgramPath[];
  ctaText: string;
}

export const learningPrograms: LearningProgram[] = [
  {
    id: "academic",
    title: "Academic Subjects",
    description: "Quality offline coaching with experienced faculty, individual attention, and result-oriented coaching.",
    icon: BookOpen,
    color: "from-blue-500 to-indigo-600",
    ctaText: "Explore Academic Coaching",
    paths: [
      {
        title: "Classes 1 to 10 (Offline Only)",
        sections: [
          {
            title: "Boards",
            items: ["State Board", "CBSE", "ICSE"]
          },
          {
            title: "Subjects Offered",
            items: [
              "English", "Tamil", "Hindi", "Mathematics", 
              "Science", "Social Science", "Computer Science", "General Knowledge (GK)"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "language",
    title: "Language Programs",
    description: "Structured Hindi & English courses for learners of all ages. Develop strong reading, writing, and speaking skills.",
    icon: MessageCircle,
    color: "from-emerald-400 to-teal-600",
    ctaText: "Start Learning",
    paths: [
      {
        title: "Hindi Written Examination",
        info: "Comprehensive preparation in reading, writing, grammar, and exam practice.",
        sections: [
          {
            title: "Levels",
            items: [
              "Parichaya", "Prathamic", "Madhyama", "Rashtrabhasha", 
              "Praveshika", "Visharadh Poorvardh", "Visharadh Uttarardh", 
              "Praveen Poorvardh", "Praveen Uttarardh"
            ]
          }
        ]
      },
      {
        title: "Spoken Hindi (Offline)",
        info: "General & Level-Based. No age limit. For students, professionals, homemakers, and job seekers.",
        sections: [
          {
            title: "Focus Areas",
            items: [
              "Basic to Advanced Communication", "Daily Conversation Practice", 
              "Vocabulary Building", "Grammar for Speaking", 
              "Pronunciation", "Real-Life Speaking Activities"
            ]
          }
        ]
      },
      {
        title: "Spoken English (Offline)",
        info: "No age limit. For students, job seekers, working professionals, and homemakers.",
        sections: [
          {
            title: "Course Includes",
            items: [
              "Basic to Advanced", "Grammar Fundamentals", 
              "Vocabulary Building", "Pronunciation & Fluency", 
              "Daily Conversation Practice", "Public Speaking", 
              "Interview Preparation"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "brain",
    title: "Abacus Training",
    description: "Unlock your child's true potential with our level-based Abacus Training Program.",
    icon: Brain,
    color: "from-purple-500 to-fuchsia-600",
    ctaText: "Enroll in Abacus",
    paths: [
      {
        info: "Age: 5–14 Years | Online & Offline Classes Available",
        sections: [
          {
            title: "Benefits",
            items: [
              "Improves Mental Math Skills", "Enhances Memory & Concentration", 
              "Increases Speed & Accuracy", "Develops Logical Thinking", 
              "Boosts Confidence in Mathematics"
            ]
          },
          {
            title: "Features",
            items: [
              "Level-Based Training", "Experienced Faculty", 
              "Individual Attention", "Regular Practice & Assessments", 
              "Certificate on Course Completion"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "music",
    title: "Music Academy",
    description: "Professional training in Western Keyboard, Carnatic Keyboard, and Carnatic Vocal.",
    icon: Music,
    color: "from-rose-400 to-red-600",
    ctaText: "Explore Music",
    paths: [
      {
        title: "Keyboard (Western & Carnatic)",
        info: "Grade 1–8, Diploma & Adv Diploma. No Age Limit. Offline Only.",
        sections: []
      },
      {
        title: "Carnatic Vocal",
        info: "Grade 1–8, Diploma & Adv Diploma. No Age Limit. Offline Only.",
        sections: [
          {
            title: "Training Includes",
            items: [
              "Sarali Varisai", "Jantai Varisai", "Alankarams", 
              "Geethams", "Swarajathis", "Varnams", "Kritis", "Theory & Practical Sessions"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "arts",
    title: "Drawing Classes",
    description: "Develop creativity and artistic skills with expert guidance.",
    icon: Palette,
    color: "from-amber-400 to-orange-600",
    ctaText: "Start Drawing",
    paths: [
      {
        title: "Professional Training",
        info: "Grade 1–8, Diploma & Adv Diploma. No Age Limit. Offline Only.",
        sections: [
          {
            title: "Includes",
            items: [
              "Pencil Sketching", "Colour Drawing", "Shading Techniques", 
              "Landscape Drawing", "Portrait Drawing", "Creative Art", "Still Life Drawing"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "performing",
    title: "Bharatanatyam Classes",
    description: "Learn Bharatanatyam through systematic and professional training under experienced instructors.",
    icon: Activity,
    color: "from-pink-500 to-rose-600",
    ctaText: "Explore Dance",
    paths: [
      {
        info: "Grade 1–8, Diploma & Adv Diploma. No Age Limit. Offline Only.",
        sections: [
          {
            title: "Training Includes",
            items: [
              "Adavus", "Nritta", "Abhinaya", "Theory", 
              "Practical Sessions", "Stage Performance Preparation"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "skill",
    title: "Handwriting Classes",
    description: "Improve handwriting with structured and personalized training for academic and personal development.",
    icon: PenTool,
    color: "from-cyan-500 to-blue-600",
    ctaText: "Improve Handwriting",
    paths: [
      {
        info: "No Age Limit. Offline Only.",
        sections: [
          {
            title: "Focus Areas",
            items: [
              "Letter Formation", "Cursive Writing", "Speed Writing", 
              "Neatness & Presentation", "Writing Confidence", "Regular Practice Sessions"
            ]
          }
        ]
      }
    ]
  }
];
