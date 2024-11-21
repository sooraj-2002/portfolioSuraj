import React from 'react';
import { Collapse, Progress } from 'antd';
import { DatabaseOutlined, CodeOutlined } from '@ant-design/icons';
import { FaReact } from "react-icons/fa";
const { Panel } = Collapse;

function SkillsAccordion() {
  const skills = [
    {
      category: 'Programming Languages',
      icon: <CodeOutlined style={{ fontSize: '20px', color: '#4c6ef5' }} />,
      items: [
        { name: 'C#', percent: 50 },
        { name: 'C++', percent: 50 },
        { name: 'JAVASCRIPT', percent: 60 },
        { name: 'NODEJS', percent: 60 },
      ],
    },
    {
      category: 'Technologies',
      icon: <FaReact style={{ fontSize: '20px', color: '#4c6ef5' }} />,
      items: [
        { name: 'React.js', percent: 58 },
        { name: 'HTML', percent: 80 },
        { name: 'Tailwind CSS', percent: 80 },
      ],
    },
    {
      category: 'Database Systems',
      icon: <DatabaseOutlined style={{ fontSize: '20px', color: '#4c6ef5' }} />,
      items: [
        { name: 'MySQL', percent: 75 },
      ],
    },
  ];

  return (
    <div className="min-h-screen w-full flex justify-center items-start pt-10">
    <div className="w-full max-w-8xl rounded-md mt-28">
      <h1 className="text-4xl font-bold text-center mb-6">
        <span className="text-[#3e8e41] text-center">Skills </span> <br />
        <span className=' text-2xl text-gray-500 font-bold'>
        My technical level</span>
      </h1>
      <Collapse accordion className='bg-transparent  border-none'>
        {skills.map((skillCategory, index) => (
          <Panel
            header={
              <div className="flex items-center space-x-4">
                <div>
                  <div className="flex items-center">
                    {skillCategory.icon}
                  <h3 className="text-lg font-semibold mb-0">{skillCategory.category}</h3>
                  </div>
                  <p className="text-sm text-gray-500">Several years of experience</p>
                </div>
              </div>
            }
            key={index}
          >
            {skillCategory.items.map((skill, idx) => (
              <div key={idx} className="mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-800">{skill.name}</span>
                  <span className="text-gray-500">{skill.percent}%</span>
                </div>
                <Progress
                  percent={skill.percent}
                  showInfo={false}
                  strokeColor="#4c6ef5"
                  trailColor="#e0e7ff"
                />
              </div>
            ))}
          </Panel>
        ))}
      </Collapse>
    </div>
  </div>

  );
}

export default SkillsAccordion;
