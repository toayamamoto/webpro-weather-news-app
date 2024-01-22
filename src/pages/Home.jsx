import React from 'react';

const Home = () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <section className="about-section">
          <h2>ページについて</h2>
          <p>このページは今日の気温とニュースとランダムなポケモンを提供します。最新の情報を簡単にチェックできます。</p>
        </section>
  
        <section className="creator-section">
          <h2>作成者</h2>
          <p>このページは日本大学文理学部情報科学科 山本 騰可によって作成されました。</p>
        </section>
      </div>
    );
  };
  

export default Home;
