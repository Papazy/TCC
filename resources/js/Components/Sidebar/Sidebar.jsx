import { useEffect, useState } from 'react';
// import { useEffect, useState } from 'react';
// import { personsImgs } from 'assets/image/person_two.jpg';
import personsImgs  from '/public/assets/images/person_three.jpg';
import { navigationLinks } from '@/Data/data';
import { useContext } from 'react';
import { SidebarContext } from './SidebarContext';

// Ini semenatara aja
import './Sidebar.css';

const Sidebar = () => {
  const [activeLinkIdx] = useState(1);
  const [sidebarClass, setSidebarClass] = useState('');
  const { isSidebarOpen } = useContext(SidebarContext);

  useEffect(() => {
    if (isSidebarOpen) {
      setSidebarClass('sidebar-change');
    } else {
      setSidebarClass('');
    }
  }, [isSidebarOpen]);

  return (
    <div className={`sidebar ${sidebarClass}`}>
      <div className="user-info text-white">
        <div className="info-img img-fit-cover">
          <img src={personsImgs} alt="profile image" />
        </div>
        <span className="info-name ">alice-doe</span>
      </div>

      <nav className="navigation">
        <ul className="nav-list text-white">
          {navigationLinks.map((navigationLink) => (
            <li className="nav-item" key={navigationLink.id}>
              <a href={navigationLink.link} className={`nav-link ${navigationLink.id === activeLinkIdx ? 'active' : null}`}>
                <img src={navigationLink.image} className="nav-link-icon" alt={navigationLink.title} />
                <span className="nav-link-text">{navigationLink.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {/* <div className="side-content">
      </div> */}
    </div>
  );
};

export default Sidebar;
