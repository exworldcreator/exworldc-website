import { ReactComponent as SunIcon } from '../assets/icons/sun.svg';
import { ReactComponent as MoonIcon } from '../assets/icons/moon.svg';
import profileImage from '../assets/images/miladyimage.png';
import './styles/Header.css';
import { useTheme } from '../hooks/useTheme';

const Header = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <div className="header">
      <div className="headerBox">
        <div className="headerImage">
          <img src={profileImage} alt="Profile Image" width="100" height="100" />
        </div>
        <div className="header-text-wrapped">
          <div className="theme-button-box">
            <p style={{ fontSize: '25px' }}>exworldc</p>
            <button
              id="changeThemeButton"
              className={isDarkTheme ? 'dark-theme' : 'light-theme'}
              onClick={toggleTheme}
            >
              {isDarkTheme ? (
                <MoonIcon width="14px" height="14px" />
              ) : (
                <SunIcon width="14px" height="14px" />
              )}
            </button>
          </div>
          <p>Web3 Full Stack Engineer</p>
          <a href="https://twitter.com/exworldcreator">@exworldc</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
