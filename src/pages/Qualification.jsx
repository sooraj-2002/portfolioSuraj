import React, { useState } from 'react';
import { BookOutlined, CalendarOutlined } from '@ant-design/icons';
import { GoBriefcase } from "react-icons/go";

function Qualifications() {
  const [activeTab, setActiveTab] = useState('education');

  const educationData = [
    {
      title: 'Bachelor of Arts',
      institution: 'Indira Gandhi National Open University',
      years: '2022 - 2024',
    },
    {
      title: 'Web Development ',
      institution: '(DICS) Delhi Institute of Computer Science ',
      years: '2020 - 2021',
    },
  ];

  const workData = [
    {
      title: 'Frontend Work',
      company: 'Alokya Institute',
      description: 'Building responsive web interfaces and applications.',
      years: '2023 - Present',
    },
    {
      title: 'Remote Trail',
      company: 'Collab Project Gaurav and Me(Suraj)',
      description: 'Developed a web application using React and Node.js.',
      years: '2023 - 2024',
    },
  ];


  return (
    // Qualifications My personal journey 
    <div className=" h-[80vh] flex justify-center items-start">
      <div className="max-w-4xl w-full rounded-lg p-6">
        {/* Header */}
       <div className="header-section m-auto text-center">
          <h1 className="text-4xl font-bold text-center text-[#3e8e41]">
              Qualifications
            </h1>
            <span className="text-gray-500 text-center text-xl font-bold m-auto mb-8">My personal journey</span>

       </div>
        {/* Tabs */}
        <div className="flex justify-center space-x-8 mb-6 mt-10">
          <button
            onClick={() => setActiveTab('education')}
            className={`flex items-center space-x-2 px-4 py-2 border-b-2 ${
              activeTab === 'education' ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-500'
            }`}
          >
            <BookOutlined />
            <span>Education</span>
          </button>
          <button
            onClick={() => setActiveTab('work')}
            className={`flex items-center space-x-2 px-4 py-2 border-b-2 ${
              activeTab === 'work' ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-500'
            }`}
          >
            <GoBriefcase/>
            <span>Work</span>
          </button>
        </div>

        {/* Content */}
        <div>
          {activeTab === 'education' && (
            <div>
              {educationData.map((edu, index) => (
                <div key={index} className="flex space-x-6 mb-6">
                  {/* Dot and Line */}
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-[#3e8e41] rounded-full"></div>
                    {index < educationData.length - 1 && (
                      <div className="w-1 bg-[#3e8e41] flex-grow"></div>
                    )}
                  </div>
                  {/* Details */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{edu.title}</h3>
                    <p className="text-sm text-blue-500">{edu.institution}</p>
                    <p className="text-sm text-gray-500">{edu.grade}</p>
                    <div className="flex items-center space-x-2 text-gray-400 text-sm">
                      <CalendarOutlined />
                      <span>{edu.years}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'work' && (
            <div>
              {workData.map((work, index) => (
                <div key={index} className="flex space-x-6 mb-6">
                  {/* Dot and Line */}
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-[#3e8e41] rounded-full"></div>
                    {index < workData.length -1 && (
                      <div className="w-1 bg-[#3e8e41] flex-grow"></div>
                    )}
                  </div>
                  {/* Details */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{work.title}</h3>
                    <p className="text-sm text-blue-500">{work.company}</p>
                    <p className="text-sm text-gray-500">{work.description}</p>
                    <div className="flex items-center space-x-2 text-gray-400 text-sm">
                      <CalendarOutlined />
                      <span>{work.years}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Qualifications;
