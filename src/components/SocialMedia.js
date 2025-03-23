import React, { useContext } from "react";
import { PortfolioContext } from "../App";
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram, FaGlobe } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


{/* Simple Social MEdia Section*/}  


function SocialMedia() {
  const { portfolioData } = useContext(PortfolioContext);

        
  const getSocialIcon = (platform) => {




    {/* Icons of Social Media Platforms  */}  
    switch (platform.toLowerCase()) {

      case "facebook":
        return <FaFacebook />;
      case "twitter":
      case "x":
        return <FaXTwitter />;
      case "linkedin":
        return <FaLinkedin />;
      case "github":
        return <FaGithub />;
      case "instagram":
        return <FaInstagram />;

      default:
        return <FaGlobe />;
    }
  };




  {/* Social Media Buttons Section*/}  

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4 text-uppercase fw-bold">  Social Media</h2>
      <ul>
        {portfolioData.socialLinks.map((link, index) => (
          <li key={index} className="list-group-item">
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary btn-sm d-flex align-items-center justify-content-center gap-2"
              style={{ width: "150px", margin: "auto" }}
            >
              {getSocialIcon(link.name)} {link.name}
            </a>

            <br/>


          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialMedia;
