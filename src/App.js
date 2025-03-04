import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import SubjectForm from './SubjectForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/subjectform" element={<SubjectForm />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
