import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';  // Home 전용 CSS 불러오기
import logo from './assets/logo.svg';  // 로고 이미지 불러오기

function Home({ groupData, handleDelete }) {
  const [filter, setFilter] = useState('공개');  // 기본 필터를 '공개'로 설정

  // 필터에 따라 그룹을 분류하여 반환
  const filteredGroups = groupData.filter(group => 
    filter === '공개' ? group.isPublic : !group.isPublic
  );

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="visibility-buttons">
          <button 
            className={`visibility-btn ${filter === '공개' ? 'active' : ''}`} 
            onClick={() => setFilter('공개')}
          >
            공개
          </button>
          <button 
            className={`visibility-btn ${filter === '비공개' ? 'active' : ''}`} 
            onClick={() => setFilter('비공개')}
          >
            비공개
          </button>
        </div>
        <Link to="/">
          <img src={logo} alt="조각집 로고" className="logo" />
        </Link>
        <Link to="/create-group">
          <button className="create-group-btn">그룹 만들기</button>
        </Link>
      </header>

      <div className="search-container">
        <input type="text" className="search-input" placeholder="그룹명을 검색해 주세요" />
        <select className="sort-select">
          <option value="like">공감순</option>
          <option value="date">최신순</option>
        </select>
      </div>

      <div className="card-grid">
        {filteredGroups.length > 0 ? filteredGroups.map((group) => (
          <div key={group.id} className="card">
            {/* 비공개 그룹일 경우 그룹명만 표시 */}
            {group.isPublic ? (
              <>
                <img src={group.image ? URL.createObjectURL(group.image) : 'placeholder.jpg'} alt="그룹 대표 이미지" className="card-image" />
                <div className="card-content">
                  <p>D+265 | 공개</p>
                  <h2>{group.name}</h2>
                  <p>{group.description}</p>
                  <div className="card-stats">
                    <span>획득 배지 {group.badges}</span>
                    <span>추억 {group.memories}</span>
                    <span>그룹 공감 {group.likes}K</span>
                  </div>
                  <button className="delete-btn" onClick={() => handleDelete(group)}>삭제하기</button>
                </div>
              </>
            ) : (
              <div className="card-content">
                <h2>{group.name}</h2>
                <p>(비공개 그룹)</p>
                <button className="delete-btn" onClick={() => handleDelete(group)}>삭제하기</button>
              </div>
            )}
          </div>
        )) : (
          <p>해당 그룹이 없습니다. "그룹 만들기"를 클릭하여 그룹을 생성해보세요.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
