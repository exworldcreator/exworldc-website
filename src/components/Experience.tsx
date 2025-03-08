import './styles/Experience.css';

const Experience = () => {
  return (
    <div style={{ marginTop: '40px'}} className="experience">
      <p>Work Experience</p>
      <div className="experience-box">
        <div className="experience-descriptions">
          <div className="experience-item">
            <div className="time-period">
              <p>Present</p>
            </div>
            <div className="description">
              <p>Leading Web Developer - NDA</p>
              <p>We develop a convenient crypto aggregator of market changes based on artificial intelligence of the Transformer model.</p>
              <p>TypeScript - Nest - React</p>
            </div>
          </div>
          <div className="experience-item">
            <div className="time-period">
              <p>2024 Q1-Q3</p>
            </div>
            <div className="description">
              <p>Leading Solidity Developer - <a href="https://pfp3.io/">PFP3</a></p>
              <p>Affordable PFP generator platform empowering creators with royalties and users with $1 minting on Story Protocol.</p>
              <p>Solidity - TypeScript - Ethers</p>
            </div>
          </div>
          <div className="experience-item">
            <div className="time-period">
              <p>2023 - 2024</p>
            </div>
            <div className="description">
              <p>Intern - <a href="https://tech.vk.com/">Vk Tech</a></p>
              <p>VK Tech is a Russian developer of enterprise software.</p>
              <p>Python</p>
            </div>
          </div>
          <div className="experience-item">
            <div className="time-period">
              <p>2022 Q1-Q2</p>
            </div>
            <div className="description">
              <p>Rust Developer - SecureTrans</p>
              <p>A startup developing a platform for secure data transfer and storage for enterprise customers. </p>
              <p>Rust</p>
            </div>
          </div>
          <div className="experience-item">
            <div className="time-period">
              <p>2020-2022</p>
            </div>
            <div className="description">
              <p>Teaching - Freelance</p>
              <p>Taught in my department, successfully worked part-time on freelance work.</p>
              <p>Rust - Python - JavaScript</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
