import './styles/Links.css'

const Links = () => {
  return (
    <div style={{ marginTop: '40px'}} className="links">
      <p>Links</p>
      <div className="links-box">
        <div className="links-descriptions">
          <div className="link-item">
            <div className="link-name">
              <p>GitHub</p>
            </div>
            <div className="link-url">
              <a href='https://github.com/exworldcreator'>@exworldc</a>
            </div>
          </div>
          <div className="link-item">
            <div className="link-name">
              <p>Twitter</p>
            </div>
            <div className="link-url">
              <a href='https://x.com/exworldcreator'>@exworldc</a>
            </div>
          </div>
          <div className="link-item">
            <div className="link-name">
              <p>Telegram</p>
            </div>
            <div className="link-url">
              <a href='https://t.me/exworldc'>@exworldc</a>
            </div>
          </div>
            </div>
          </div>
        </div>
  );
}

export default Links;
