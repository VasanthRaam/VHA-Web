export type VideoCategory =
  | "All"
  | "Hindi Sessions"
  | "Bharatanatyam"
  | "Keyboard"
  | "Annual Day"
  | "Cultural Events"
  | "Performances"
  | "Achievements";

export interface YouTubeVideo {
  id: string;
  youtubeId: string;
  title: string;
  category: VideoCategory;
  featured?: boolean;
}

export const STUDENT_VIDEOS: YouTubeVideo[] = [
  {
    id: "1",
    youtubeId: "dQw4w9WgXcQ", // Dummy ID, replace with actual Vasanth Academy video ID
    title: "Annual Day Celebration - Grand Finale",
    category: "Annual Day",
    featured: true,
  },
  {
    id: "2",
    youtubeId: "jNQXAC9IVRw", 
    title: "Bharatanatyam Stage Performance",
    category: "Bharatanatyam",
  },
  {
    id: "3",
    youtubeId: "LXb3EKWsInQ", 
    title: "Spoken Hindi Interactive Session",
    category: "Hindi Sessions",
  },
  {
    id: "4",
    youtubeId: "tPEE9ZwTmy0", 
    title: "Keyboard Beginners Showcase",
    category: "Keyboard",
  },
  {
    id: "5",
    youtubeId: "kJQP7kiw5Fk", 
    title: "Cultural Event Group Dance",
    category: "Cultural Events",
  },
  {
    id: "6",
    youtubeId: "JGwWNGJdvx8", 
    title: "Certificate Distribution Ceremony",
    category: "Achievements",
  },
  {
    id: "7",
    youtubeId: "9bZkp7q19f0", 
    title: "Individual Student Performance - Classical",
    category: "Performances",
  },
  {
    id: "8",
    youtubeId: "RgKAFK5djSk", 
    title: "Bharatanatyam Practice Session",
    category: "Bharatanatyam",
  }
];

export const VIDEO_CATEGORIES: VideoCategory[] = [
  "All",
  "Hindi Sessions",
  "Bharatanatyam",
  "Keyboard",
  "Annual Day",
  "Cultural Events",
  "Performances",
  "Achievements"
];
