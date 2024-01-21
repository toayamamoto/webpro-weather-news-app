import React, { useState, useEffect } from 'react';

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedGenre, setSelectedGenre] = useState('general');

  const genres = [
    { value: 'general', label: '総合' },
    { value: 'business', label: 'ビジネス' },
    { value: 'entertainment', label: 'エンタメ' },
    { value: 'health', label: '健康' },
    { value: 'science', label: '科学' },
    { value: 'sports', label: 'スポーツ' },
    { value: 'technology', label: 'テクノロジー' },
  ];
  const apiKey = '479c1102ee1f4bbd8aedbd2f7b9cc24f';

  useEffect(() => {
    const fetchNews = async () => {
      const country = 'jp';
      const apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=${selectedGenre}&apiKey=${apiKey}`;

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status === 'ok') {
          setNews(data.articles);
        } else {
          console.error('Failed to fetch news:', data.message);
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [selectedGenre, apiKey]);

  return (
    <div>
      <h2>{genres.find((genre) => genre.value === selectedGenre)?.label}のニュース</h2>
      <label htmlFor="genreSelect">ジャンルを選択: </label>
      <select id="genreSelect" value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
        {genres.map((genre) => (
          <option key={genre.value} value={genre.value}>
            {genre.label}
          </option>
        ))}
      </select>
      {loading ? (
        <p>Loading news...</p>
      ) : (
        <ul>
          {news.map((article, index) => (
            <li key={index}>
              <strong>{article.title}</strong> - {article.description}
              <br />
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                詳細を読む
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default News;
