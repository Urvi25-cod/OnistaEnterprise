// src/pages/ArticleDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import NewsImg from "../image/News.svg";

const articles = new Array(6).fill({
  title: "The Art of Canvas Print Preparation",
  description:
    "Canvas prints have become a popular choice for home décor and art displays, known for their ability to turn photographs and artwork into stunning visual pieces...",
  fullText: `CONSIDER YOUR LIVING ROOM'S STYLE.

For modern spaces, consider geometric patterns, abstract designs, or black and white photography. Traditional rooms often pair well with landscapes, classical portraits, or ornate framed prints. Eclectic spaces can handle bold, colorful pieces that might incorporate mixed media or unusual subjects.

SIZE AND SCALE MATTER

One of the most common mistakes in selecting wall art is choosing pieces that are too small for the space. As a general rule:
- For large walls, opt for larger pieces or a gallery wall arrangement... - The art should take up approximately 2/3 to 3/4 of the available wall space
- When hanging art above furniture, choose a piece that is about 2/3 to 3/4 the width of the furniture

Remember that oversized art can create a dramatic focal point, while smaller pieces can get lost on a large wall unless grouped together.`,
  image: NewsImg,
  author: "KRUSHANT VAMJA",
  role: "Developer",
  tags: ["Wall Art", "Interior Design", "Decor Tips"]
});

const ArticleDetail = () => {
  const { id } = useParams();
  const article = articles[id];

  if (!article) return <div>Article not found</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-12 py-12 bg-white">
      <div className="mb-6 text-sm">
        <Link to="/">Home</Link> / <Link to="/news">News</Link> / {article.title}
      </div>
      <img src={article.image} alt="Article" className="w-full h-100 object-cover rounded-md mb-8" />
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
        <div className="flex items-center gap-4 mb-4 sm:mb-0">
          <img src="https://i.pravatar.cc/100" alt={article.author} className="w-14 h-14 rounded-full object-cover" />
          <div>
            <h4 className="text-base sm:text-lg">{article.author}</h4>
            <p className="text-sm text-gray-500">{article.role}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {article.tags.map((tag, i) => (
            <span key={i} className="text-xs sm:text-sm px-3 py-1 bg-black text-white rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <p className="text-sm sm:text-base text-gray-700 leading-relaxed whitespace-pre-line">
        {article.fullText}
      </p>
    </div>
  );
};

export default ArticleDetail;
