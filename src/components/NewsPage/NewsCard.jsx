import { format } from 'date-fns';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const NewsCard = ({ article }) => {
  const formattedDate = format(new Date(article.datetime * 1000), 'MMM dd, yyyy');

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {article.image && (
        <img 
          src={article.image} 
          alt={article.headline} 
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 line-clamp-2">{article.headline}</h2>
        <p className="text-gray-600 mb-4 line-clamp-3">{article.summary}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{formattedDate}</span>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 hover:text-blue-800"
          >
            Read more
            <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;