import React, { useState } from 'react';

function TabComponent() {
    const [activeTab, setActiveTab] = useState('Skills');

    function handleTabClick(tabName) {
        setActiveTab(tabName);
    }

    return (
        <div>
            <div className="tabtitle">
                <p className={`tablinks ${activeTab === 'Skills' ? 'activelink' : ''}`} onClick={() => handleTabClick('Skills')}>Skills</p>
                <p className={`tablinks ${activeTab === 'Experience' ? 'activelink' : ''}`} onClick={() => handleTabClick('Experience')}>Experience</p>
                <p className={`tablinks ${activeTab === 'Education' ? 'activelink' : ''}`} onClick={() => handleTabClick('Education')}>Education</p>
            </div>

            <div className={`tabcont ${activeTab === 'Skills' ? 'activetab' : ''}`} id="Skills">
                <ul>
                    <li><span>UI/UX</span><br />Designer Web/App interfaces</li>
                    <li><span>Web Development</span><br />Webpage Development</li>
                    <li><span>App Development</span><br />Building Android/IOS apps</li>
                </ul>
            </div>

            <div className={`tabcont ${activeTab === 'Experience' ? 'activetab' : ''}`} id="Experience">
                <ul>
                    <li><span>Portfolio</span><br />Working under Lydia Jane G</li>
                </ul>
            </div>

            <div className={`tabcont ${activeTab === 'Education' ? 'activetab' : ''}`} id="Education">
                <ul>
                    <li><span>Btech-CSE</span><br />Vellore Institute Of Technology,Vellore</li>
                    <li><span>12th</span><br />From-Maharaja Sayajirao Vidyalaya,Satara</li>
                </ul>
            </div>
        </div>
    );
}

export default TabComponent;
