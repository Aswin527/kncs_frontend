import { useState, useEffect } from 'react';

// Define TypeScript interfaces for our data
interface Student {
  id: number;
  name: string;
  grade: string;
  avatarUrl: string;
}

interface Post {
  id: number;
  studentId: number;
  title: string;
  description: string;
  contentType: 'poem' | 'story' | 'drawing' | 'song' | 'video' | 'other';
  content: string;
  imageUrl?: string;
  audioUrl?: string;
  videoUrl?: string;
  likes: number;
  date: string;
}

// Mock data - this would be replaced by API calls later
const mockStudents: Student[] = [
  { id: 1, name: "Emma Johnson", grade: "5th Grade", avatarUrl: "/api/placeholder/64/64" },
  { id: 2, name: "Liam Smith", grade: "4th Grade", avatarUrl: "/api/placeholder/64/64" },
  { id: 3, name: "Sophia Williams", grade: "6th Grade", avatarUrl: "/api/placeholder/64/64" }
];

const mockPosts: Post[] = [
  {
    id: 1,
    studentId: 1,
    title: "Spring Morning",
    description: "A poem I wrote about spring",
    contentType: "poem",
    content: "Dew drops glisten,\nBirds softly singing,\nSunlight breaks through,\nA new day beginning.",
    likes: 12,
    date: "2025-03-08",
  },
  {
    id: 2,
    studentId: 2,
    title: "My Space Adventure",
    description: "A short story about exploring space",
    contentType: "story",
    content: "Once upon a time, in a galaxy not too far away, a young astronaut named Max dreamed of visiting the stars...",
    likes: 8,
    date: "2025-03-07",
  },
  {
    id: 3,
    studentId: 3,
    title: "Sunset at the Beach",
    description: "A drawing I made in art class",
    contentType: "drawing",
    imageUrl: "/api/placeholder/600/400",
    content: "",
    likes: 15,
    date: "2025-03-06",
  }
];

// Component for rendering a single post
const PostCard = ({ post, students }: { post: Post, students: Student[] }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes);
  
  const student = students.find(s => s.id === post.studentId);
  
  // Format the date to be more readable
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
  };
  
  // Render different content based on the post type
  const renderContent = () => {
    switch(post.contentType) {
      case 'poem':
      case 'story':
        return (
          <div className="whitespace-pre-line p-6 bg-gray-50 rounded-xl my-3 shadow-inner">
            {post.content}
          </div>
        );
      case 'drawing':
        return (
          <div className="my-3 rounded-xl overflow-hidden shadow-lg">
            <img 
              src={post.imageUrl} 
              alt={post.title} 
              className="w-full"
            />
          </div>
        );
      case 'song':
        return (
          <div className="my-3">
            {post.imageUrl && <img src={post.imageUrl} alt="" className="w-full rounded-xl mb-3 shadow-lg" />}
            {post.audioUrl && (
              <audio controls className="w-full mt-2">
                <source src={post.audioUrl} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            )}
          </div>
        );
      case 'video':
        return (
          <div className="my-3 rounded-xl overflow-hidden shadow-lg">
            {post.videoUrl && (
              <video controls className="w-full">
                <source src={post.videoUrl} type="video/mp4" />
                Your browser does not support the video element.
              </video>
            )}
          </div>
        );
      default:
        return <div className="my-3">{post.content}</div>;
    }
  };
  
  // Get badge color based on content type
  const getBadgeColor = () => {
    switch(post.contentType) {
      case 'poem': return 'bg-purple-100 text-purple-600';
      case 'story': return 'bg-blue-100 text-blue-600';
      case 'drawing': return 'bg-green-100 text-green-600';
      case 'song': return 'bg-yellow-100 text-yellow-600';
      case 'video': return 'bg-red-100 text-red-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };
  
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Post Header */}
      <div className="p-5 flex items-center border-b">
        <img 
          src={student?.avatarUrl} 
          alt={student?.name} 
          className="w-12 h-12 rounded-full mr-4 border-2 border-gray-200"
        />
        <div>
          <h3 className="font-semibold text-lg">{student?.name}</h3>
          <p className="text-sm text-gray-500">{student?.grade} • {formattedDate}</p>
        </div>
      </div>
      
      {/* Post Content */}
      <div className="px-5 pt-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-bold">{post.title}</h2>
          <span className={`text-xs font-medium px-3 py-1 rounded-full ${getBadgeColor()}`}>
            {post.contentType.charAt(0).toUpperCase() + post.contentType.slice(1)}
          </span>
        </div>
        <p className="text-gray-700 mb-3">{post.description}</p>
        
        {renderContent()}
      </div>
      
      {/* Post Actions */}
      <div className="px-5 py-4 border-t">
        <button 
          onClick={handleLike}
          className={`flex items-center space-x-2 px-3 py-1 rounded-full transition-colors ${
            isLiked 
              ? 'bg-red-50 text-red-500' 
              : 'text-gray-500 hover:bg-gray-100'
          }`}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill={isLiked ? "currentColor" : "none"}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={isLiked ? 0 : 1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
          <span>{likesCount}</span>
        </button>
      </div>
    </div>
  );
};

// Filter buttons component
const FilterButtons = ({ activeFilter, setActiveFilter }: { 
  activeFilter: string, 
  setActiveFilter: (filter: string) => void 
}) => {
  const filters = ['All', 'Poem', 'Story', 'Drawing', 'Song', 'Video'];
  
  // Get button style based on filter type
  const getButtonStyle = (filter: string) => {
    const isActive = activeFilter === filter.toLowerCase();
    
    switch(filter.toLowerCase()) {
      case 'poem': 
        return isActive 
          ? 'bg-purple-600 text-white' 
          : 'bg-purple-50 text-purple-600 hover:bg-purple-100';
      case 'story': 
        return isActive 
          ? 'bg-blue-600 text-white' 
          : 'bg-blue-50 text-blue-600 hover:bg-blue-100';
      case 'drawing': 
        return isActive 
          ? 'bg-green-600 text-white' 
          : 'bg-green-50 text-green-600 hover:bg-green-100';
      case 'song': 
        return isActive 
          ? 'bg-yellow-600 text-white' 
          : 'bg-yellow-50 text-yellow-600 hover:bg-yellow-100';
      case 'video': 
        return isActive 
          ? 'bg-red-600 text-white' 
          : 'bg-red-50 text-red-600 hover:bg-red-100';
      default: 
        return isActive 
          ? 'bg-gray-800 text-white' 
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200';
    }
  };
  
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {filters.map(filter => (
        <button
          key={filter}
          onClick={() => setActiveFilter(filter.toLowerCase())}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-colors shadow-sm ${getButtonStyle(filter)}`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

// Main component
const StudentShowcase = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');
  
  useEffect(() => {
    // Simulating API calls
    // In a real app, this would fetch data from your backend
    setTimeout(() => {
      setPosts(mockPosts);
      setStudents(mockStudents);
      setLoading(false);
    }, 1000);
  }, []);
  
  // Filter posts based on the active filter
  const filteredPosts = activeFilter === 'all' 
    ? posts 
    : posts.filter(post => post.contentType === activeFilter);
  
  return (
    <div className="min-h-screen bg-gray-50">
  {/* Hero Header with Background Image */}
  <header className="relative overflow-hidden h-96">
    <div
      className="absolute inset-0 z-0 bg-gradient-to-t from-indigo-900 to-purple-900"
      style={{
        backgroundImage: "url('../src/assets/20241005_120330.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
        opacity: 0.9
      }}
    ></div>
    
    {/* Text overlay for better visibility */}
    <div className="absolute inset-0 z-0 bg-black opacity-40"></div>
    
    <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <span className="inline-block bg-white text-indigo-900 px-4 py-1 rounded-full text-sm font-semibold mb-4">
          2025 Edition
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
          Student Talent Showcase
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-indigo-100 sm:text-lg md:mt-5 md:text-xl">
          Celebrating creativity and expression in our school community
        </p>
      </div>
    </div>
    
    {/* Bottom fade to match page background */}
    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
  </header>


      
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              <h2 className="text-xl font-bold mb-4 text-gray-800">About</h2>
              <p className="text-gray-600 leading-relaxed">
                Explore the creative talents of our students! This showcase features poems, stories, drawings, and more from our talented student body. We believe in nurturing creativity and providing a platform for students to share their artistic expressions.
              </p>
              
              <div className="mt-6 py-6 px-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl">
                <h3 className="font-semibold text-indigo-700 mb-2">Did you know?</h3>
                <p className="text-sm text-gray-700">
                  Studies show that students who engage in creative activities perform better academically and develop stronger problem-solving skills.
                </p>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            <FilterButtons 
              activeFilter={activeFilter} 
              setActiveFilter={setActiveFilter} 
            />
            
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full border-t-2 border-b-2 border-indigo-500 animate-spin"></div>
                  <div className="w-12 h-12 rounded-full border-t-2 border-b-2 border-purple-500 animate-spin absolute top-0 left-0" style={{animationDirection: 'reverse', opacity: 0.7}}></div>
                </div>
              </div>
            ) : filteredPosts.length > 0 ? (
              <div className="space-y-6">
                {filteredPosts.map(post => (
                  <PostCard key={post.id} post={post} students={students} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="w-10 h-10 text-gray-400"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">No posts found</h3>
                <p className="text-gray-500 max-w-md mx-auto">
                  There are no {activeFilter !== 'all' ? activeFilter : ''} posts available at the moment. Check back soon or explore other categories!
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentShowcase;