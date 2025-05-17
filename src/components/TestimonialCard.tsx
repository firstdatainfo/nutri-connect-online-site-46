
interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  image?: string;
}

const TestimonialCard = ({
  quote,
  author,
  role = "",
  image = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
}: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-6">
        <div className="h-12 w-12 rounded-full overflow-hidden flex-shrink-0 mr-4">
          <img src={image} alt={author} className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="font-semibold text-gray-900">{author}</p>
          {role && <p className="text-sm text-gray-500">{role}</p>}
        </div>
      </div>

      <blockquote>
        <p className="text-gray-700 italic">"{quote}"</p>
      </blockquote>

      <div className="mt-4 flex">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-nutrition-orange fill-current"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M12 1.5l3.09 6.26L22 8.64l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 13.51 2 8.64l6.91-1.01L12 1.5z"
            />
          </svg>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
