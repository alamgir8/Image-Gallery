import React from "react";

const ImagesCard = ({image}) => {
  const tags = image.tags.split(',')

    
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={image.webformatURL} alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple text-xl mb-2">
          Photo By {image.user}
        </div>
        <ul>
          <li>
            <strong>View : {image.views}</strong>
          </li>
          <li>
            <strong>Downloads : {image.downloads}</strong>
          </li>
          <li>
            <strong>Likes: {image.likes}</strong>
          </li>
          <li>
            <strong>Comments: {image.comments}</strong>
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
       {tags.map((tag, index) => (
         <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
           {tag}
        </span>
       ))}
      </div>
    </div>
  );
};

export default ImagesCard;
