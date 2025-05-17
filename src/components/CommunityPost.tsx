
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Heart, MessageCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { formatDistanceToNow } from 'date-fns';

interface Comment {
  id: string;
  author: string;
  authorImage?: string;
  content: string;
  timestamp: Date;
}

interface CommunityPostProps {
  id: string;
  author: string;
  authorImage?: string;
  content: string;
  timestamp: Date;
  likes: number;
  comments: Comment[];
  image?: string;
}

const CommunityPost = ({
  id,
  author,
  authorImage,
  content,
  timestamp,
  likes: initialLikes,
  comments: initialComments,
  image,
}: CommunityPostProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState('');
  const [showComments, setShowComments] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newComment.trim()) {
      const comment = {
        id: Math.random().toString(36).substring(2, 9),
        author: 'You',
        content: newComment,
        timestamp: new Date(),
      };
      
      setComments([...comments, comment]);
      setNewComment('');
      if (!showComments) setShowComments(true);
    }
  };

  const timeAgo = formatDistanceToNow(new Date(timestamp), { addSuffix: true });

  return (
    <div className="bg-white rounded-lg shadow p-5 mb-6">
      <div className="flex items-center mb-4">
        <Avatar className="h-10 w-10 mr-3">
          <AvatarImage src={authorImage} alt={author} />
          <AvatarFallback>{author.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium">{author}</p>
          <p className="text-xs text-gray-500">{timeAgo}</p>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-gray-800 mb-3">{content}</p>
        {image && (
          <div className="mt-3 rounded-lg overflow-hidden">
            <img src={image} alt="Post content" className="w-full h-auto" />
          </div>
        )}
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
        <div className="flex items-center space-x-6">
          <button 
            className="flex items-center space-x-2 text-gray-500 hover:text-nutrition-green transition-colors"
            onClick={handleLike}
          >
            <Heart className={`w-5 h-5 ${isLiked ? 'fill-nutrition-green text-nutrition-green' : ''}`} />
            <span>{likes}</span>
          </button>
          <button 
            className="flex items-center space-x-2 text-gray-500 hover:text-nutrition-blue transition-colors"
            onClick={() => setShowComments(!showComments)}
          >
            <MessageCircle className="w-5 h-5" />
            <span>{comments.length}</span>
          </button>
        </div>
      </div>

      {showComments && (
        <div className="mt-4 pt-3 border-t border-gray-100">
          {comments.map((comment) => (
            <div key={comment.id} className="flex items-start mb-3">
              <Avatar className="h-8 w-8 mr-2">
                <AvatarImage src={comment.authorImage} alt={comment.author} />
                <AvatarFallback>{comment.author.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="bg-gray-50 rounded-lg p-2 flex-grow">
                <div className="flex justify-between items-start">
                  <span className="font-medium text-sm">{comment.author}</span>
                  <span className="text-xs text-gray-500">
                    {formatDistanceToNow(new Date(comment.timestamp), { addSuffix: true })}
                  </span>
                </div>
                <p className="text-sm text-gray-800 mt-1">{comment.content}</p>
              </div>
            </div>
          ))}

          <form onSubmit={handleAddComment} className="mt-3 flex items-center">
            <Input
              type="text"
              placeholder="Write a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="flex-grow mr-2"
            />
            <Button 
              type="submit" 
              size="sm" 
              className="bg-nutrition-green hover:bg-nutrition-teal"
            >
              Post
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CommunityPost;
