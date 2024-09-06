import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';  // Home 컴포넌트
import GroupCreatePage from './GroupCreatePage';  // 그룹 만들기 페이지

function App() {
  const [groupData, setGroupData] = useState([]);

  const deleteGroup = (groupId) => {
    const updatedGroups = groupData.filter(group => group.id !== groupId);
    setGroupData(updatedGroups);
  };

  const handleDelete = (group) => {
    if (!group.password) {
      if (window.confirm("정말 삭제하시겠습니까?")) {
        deleteGroup(group.id);
      }
    } else {
      const enteredPassword = prompt("비밀번호를 입력하세요.");
      if (enteredPassword === group.password) {
        deleteGroup(group.id);
      } else {
        alert("비밀번호가 일치하지 않습니다.");
      }
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home groupData={groupData} handleDelete={handleDelete} />} />
        <Route path="/create-group" element={<GroupCreatePage setGroupData={setGroupData} groupData={groupData} />} />
      </Routes>
    </Router>
  );
}

App.listen(process.nev.PORT || 3000, () => {
  console.log('Server is listening...');
});

export default App;
