import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './GroupCreatePage.css';
import logo from './assets/logo.svg';

function GroupCreatePage({ setGroupData, groupData }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');
  const [isPublic, setIsPublic] = useState(true);  // 공개/비공개 상태 관리
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    const input = e.target.value;
    if (!/^\d*$/.test(input)) {
      setPasswordError('숫자만 입력하세요.');
    } else {
      setPasswordError('');
      setPassword(input);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (passwordError) {
      alert('비밀번호에 문제가 있습니다.');
      return;
    }

    const newGroup = {
      id: groupData.length + 1,
      name,
      image,
      description,
      isPublic,  // 공개 여부 저장
      password,
      badges: 2, // 임의 값 설정
      memories: 8, // 임의 값 설정
      likes: 1.5 // 임의 값 설정
    };

    setGroupData([...groupData, newGroup]);

    navigate('/');
  };

  return (
    <div className="group-create-container">
      <Link to="/">
        <img src={logo} alt="조각집 로고" className="logo" />
      </Link>
      <h1>그룹 만들기</h1>
      <form className="group-create-form" onSubmit={handleSubmit}>
        <label htmlFor="group-name">그룹명</label>
        <input
          type="text"
          id="group-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="그룹명을 입력해 주세요"
          required
        />

        <label htmlFor="group-image">대표 이미지</label>
        <input
          type="file"
          id="group-image"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />

        <label htmlFor="group-description">그룹 소개</label>
        <textarea
          id="group-description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="그룹을 소개해 주세요"
          required
        ></textarea>

        <label htmlFor="group-public">그룹 공개 선택</label>
        <div className="toggle-container">
          <label className="toggle-label">
            공개
            <div className="toggle-switch" onClick={() => setIsPublic(!isPublic)}>
              <input type="checkbox" checked={isPublic} onChange={() => setIsPublic(!isPublic)} />
              <span className="slider"></span>
            </div>
          </label>
        </div>

        <label htmlFor="group-password">비밀번호 (숫자만 입력 가능)</label>
        <input
          type="text"
          id="group-password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="비밀번호를 입력해 주세요"
        />
        {passwordError && <p className="error-message">{passwordError}</p>}

        <button type="submit" className="submit-btn">만들기</button>
      </form>
    </div>
  );
}

export default GroupCreatePage;
