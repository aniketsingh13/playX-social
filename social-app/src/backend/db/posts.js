import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "First, solve the problem. Then, write the code.",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
    image: "https://res.cloudinary.com/aniket-singh/image/upload/v1660376493/Images/making-of-a-2d-animation-for-chilledcow-20180706052709_ntnefw.jpg"
  },
  {
    _id: uuid(),
    content:
      "Simplicity is the soul of efficiency.",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shubham kumar",
    bookmarks: [],
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    image: "https://res.cloudinary.com/aniket-singh/image/upload/v1660376952/Images/IMG_0234_twb5ar.jpg"
  },
  {
    _id: uuid(),
    content:
      "Fix the cause, not the symptom",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Aniket Singh",
    bookmarks: [],
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    image: "https://res.cloudinary.com/aniket-singh/image/upload/v1660377238/Images/IMG_0204_d6msit.jpg"
  },
  {
    _id: uuid(),
    content:
      "If debugging is the process of removing bugs, then programming must be the process of putting them in",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Angel priya",
    bookmarks: [],
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    image: "https://res.cloudinary.com/aniket-singh/image/upload/v1660377554/Images/0037bf05ccb0bf488fb92c7ceb756352_io4ruc.jpg"
  },
  {
    _id: uuid(),
    content:
      "Music touches us emotionally, where words alone can't",
    likes: {
      likeCount: 6,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Jhonny Deep",
    bookmarks: [],
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    image: "https://res.cloudinary.com/aniket-singh/image/upload/v1660377586/Images/download_bed4en.jpg"
  },
  {
    _id: uuid(),
    content:
      "Before you marry a person, you should first make them use a computer with slow Internet to see who they really are.",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Jhonny Deep",
    bookmarks: [],
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    image: "https://res.cloudinary.com/aniket-singh/image/upload/v1660377586/Images/download_bed4en.jpg"
  },
  {
    _id: uuid(),
    content:
      "Never follow anyone else’s path. Unless you’re in the woods and you’re lost and you see a path. Then by all means follow that path.",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Aniket Singh",
    bookmarks: [],
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    image: "https://res.cloudinary.com/aniket-singh/image/upload/v1660377238/Images/IMG_0204_d6msit.jpg"
  },
  {
    _id: uuid(),
    content:
    "Algorithm: Word used by programmers when they dont want to explain what they did.",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shubham kumar",
    bookmarks: [],
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    image: "https://res.cloudinary.com/aniket-singh/image/upload/v1660376952/Images/IMG_0234_twb5ar.jpg"
  },
  {
    _id: uuid(),
    content:
    "If you want to be happy, be.",
    likes: {
      likeCount: 6,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Angel priya",
    bookmarks: [],
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    image: "https://res.cloudinary.com/aniket-singh/image/upload/v1660377554/Images/0037bf05ccb0bf488fb92c7ceb756352_io4ruc.jpg"
  },
  {
    _id: uuid(),
    content:
    "Opportunities don't happen, you create them.",
    likes: {
      likeCount: 8,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Jhonny Deep",
    bookmarks: [],
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    image: "https://res.cloudinary.com/aniket-singh/image/upload/v1660377586/Images/download_bed4en.jpg"
  },
  {
    _id: uuid(),
    content:
    "You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it. You draw your own box",
    likes: {
      likeCount: 9,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Aniket Singh",
    bookmarks: [],
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    image: "https://res.cloudinary.com/aniket-singh/image/upload/v1660377238/Images/IMG_0204_d6msit.jpg"
  },
  {
    _id: uuid(),
    content:
    "It’s not a bug – it’s an undocumented feature.",
    likes: {
      likeCount: 20,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Aniket Singh",
    bookmarks: [],
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    image: "https://res.cloudinary.com/aniket-singh/image/upload/v1660377238/Images/IMG_0204_d6msit.jpg"
  },
  {
    _id: uuid(),
    content:
    "Controlling complexity is the essence of computer programming",
    likes: {
      likeCount: 40,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    bookmarks: [],
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    image: "https://res.cloudinary.com/aniket-singh/image/upload/v1660376493/Images/making-of-a-2d-animation-for-chilledcow-20180706052709_ntnefw.jpg"
  },
  {
    _id: uuid(),
    content:
    "Don’t worry if it doesn’t work right.  If everything did, you’d be out of a job",
    likes: {
      likeCount: 50,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Aniket Singh",
    bookmarks: [],
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    image: "https://res.cloudinary.com/aniket-singh/image/upload/v1660377238/Images/IMG_0204_d6msit.jpg"
  },
  {
    _id: uuid(),
    content:
    "Programming isn't about what you know; it's about what you can figure out",
    likes: {
      likeCount: 60,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    bookmarks: [],
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    image: "https://res.cloudinary.com/aniket-singh/image/upload/v1660376493/Images/making-of-a-2d-animation-for-chilledcow-20180706052709_ntnefw.jpg"
  },
];
