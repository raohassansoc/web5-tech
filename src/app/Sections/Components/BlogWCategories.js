import React, { useState , useEffect } from "react";
import ArticleCard from "./ArticleCard";
import Link from "next/link";

import { useLanguage } from "@/contexts/LanguageContext";
import en from "../../../translations/en.json"
import es from "../../../translations/es.json"
import fr from "../../../translations/fr.json"
import vi from "../../../translations/vi.json"
const translations = {
  en,
  es,
  fr,
  vi
}


function BlogWCategories() {

  const { locale } = useLanguage();
  const t = translations[locale];

  const categories = t?.BlogsCategories
  // [
  //   { name: "all" },
  //   { name: "technology" },
  //   { name: "design" },
  //   { name: "marketing" },
  //   { name: "weekly" },
  //   { name: "announcements" },
  //   { name: "job postings" },
  //   { name: "leadership" },
  //   { name: "blockchain" },
  // ];

  let initialArticles = new Array(1).fill(null).map((e, i) => ({
    author: t?.BlogAuthor.author,
    description: t?.BlogAuthor.description,
    image: t?.BlogAuthor.image,
    link: t?.BlogAuthor.link,
    date: t?.BlogAuthor.date,
    categories: [categories[i % categories.length].name],
  }));
 


  

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredArticles, setFilteredArticles] = useState(initialArticles);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (category === "all") {
      setFilteredArticles(initialArticles);
    } else {
      const filtered = initialArticles.filter((article) =>
        article.categories.includes(category)
      );
      console.log(initialArticles[0].categories, category);
      setFilteredArticles(filtered);
    }
  };
  useEffect(() => {
    setFilteredArticles(initialArticles);
  },[t]);
  return (
    <div className="m-auto p-5 w-full">
      <div className="w-full flex flex-col md:flex-row m-auto">
        <div className="pl-2 w-[100vw] lg:w-[17vw] sm:w-[100vw] md:w-[17vw]">
          <p className="p-3 border-2  border-[#353539] border-opacity-[0.6] w-fit sm:w-fit md:w-fit lg:w-full min-w-fit">
            Categories
          </p>
        </div>
        <div className="flex flex-wrap border-2  border-[#353539] border-opacity-[0.6] min-w-[290px] w-fit md:w-[66vw]">
          {categories.map((category, i) => (
            <div key={i} className="px-2">
              <p
                className={`p-2 border-2 m-1  border-[#353539] text-[#999] border-opacity-[0.6] ${
                  selectedCategory === category.name
                    ? "text-[#fff] border-white"
                    : ""
                }`}
                onClick={() => handleCategoryClick(category.name)}
              >
                {category.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="m-auto flex flex-wrap justify-center md:justify-start items-center w-full lg:w-[66%]">
        {filteredArticles?.map((article, i) => (
          <Link key={i} href={"/blog"}>
            <ArticleCard index={i} article={article} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BlogWCategories;
