export type VideoCategory =
  | "All"
  | "Hindi Sessions"
  | "Bharatanatyam"
  | "Keyboard"
  | "Annual Day"
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
    youtubeId: "UM3I4s8YbY4",
    title: "Annual Day Celebration - Grand Finale & Speech",
    category: "Annual Day",
    featured: true,
  },
  {
    id: "2",
    youtubeId: "3E2_MQR5B_U",
    title: "Bharatanatyam Classical Dance Performance",
    category: "Bharatanatyam",
  },
  {
    id: "3",
    youtubeId: "nLWhDrPsgXw",
    title: "Keyboard Student Performance - Instrumental Showcase",
    category: "Keyboard",
  },
  {
    id: "4",
    youtubeId: "WUKMevDs2ak",
    title: "Group Dance Performance - Cultural Celebrations",
    category: "Performances",
  },
  {
    id: "5",
    youtubeId: "1mIJR5erBn4",
    title: "Individual Classical Student Performance",
    category: "Performances",
  },
  {
    id: "6",
    youtubeId: "EplX4iyimmE",
    title: "Award & Certificate Distribution Ceremony",
    category: "Achievements",
  },
  // Playlist Videos for Hindi Sessions Carousel
  {
    id: "h1",
    youtubeId: "m62ZaHBHcso",
    title: "Hindi Learners: Learning for Hindi Vowels",
    category: "Hindi Sessions",
  },
  {
    id: "h2",
    youtubeId: "SBGMb5wsgUY",
    title: "Hindi Learners: Common Consonants (மெய்யெழுத்துக்கள்)",
    category: "Hindi Sessions",
  },
  {
    id: "h3",
    youtubeId: "6ulW3vmTPGo",
    title: "Hindi Learners: தமிழ் மூலமாக ஹிந்தி உயிர் மெய்யெழுத்துக்கள்",
    category: "Hindi Sessions",
  },
  {
    id: "h4",
    youtubeId: "GeAeVghtNC8",
    title: "Hindi Learners: Easy Writing of Names in Hindi (Barakhadi)",
    category: "Hindi Sessions",
  },
  {
    id: "h5",
    youtubeId: "6wFJOZRoiDM",
    title: "Hindi Learners: All Consonants Guide",
    category: "Hindi Sessions",
  },
  {
    id: "h6",
    youtubeId: "Lv8taIEZKZ8",
    title: "Hindi Learners: Vani Vikas Spoken Hindi (Level 1)",
    category: "Hindi Sessions",
  },
  {
    id: "h7",
    youtubeId: "5BWDMHd61wE",
    title: "Hindi Learners: Vani Vikas Spoken Hindi (Level 2)",
    category: "Hindi Sessions",
  },
  {
    id: "h8",
    youtubeId: "lcuE1zGpEBc",
    title: "Hindi Learners: Vani Vikas Spoken Hindi (Level 3)",
    category: "Hindi Sessions",
  }
];

export const VIDEO_CATEGORIES: VideoCategory[] = [
  "All",
  "Hindi Sessions",
  "Bharatanatyam",
  "Keyboard",
  "Annual Day",
  "Performances",
  "Achievements"
];
