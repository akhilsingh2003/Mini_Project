import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Countries</li>
          <li className="fListItem">Regions</li>
          <li className="fListItem">Cities</li>
          <li className="fListItem">Districts</li>
        
        </ul>
        
        
        <ul className="fList">
          <li className="fListItem">FAQ</li>
          <li className="fListItem">Media Centre</li>
          <li className="fListItem">Ways to Watch</li>
          <li className="fListItem">Speed Test </li>
          </ul>
        <ul className="fList">
          <li className="fListItem">Accounts</li>
          <li className="fListItem">Jobs</li>
          <li className="fListItem">Privacy</li>
          <li className="fListItem">ContactUS</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Curtomer Service</li>
          <li className="fListItem">Partner Help</li>
          <li className="fListItem">Careers</li>
          <li className="fListItem">Sustainability</li>
          <li className="fListItem">Press center</li>
          <li className="fListItem">Safety Resource Center</li>
          <li className="fListItem">Investor relations</li>
          <li className="fListItem">Terms & conditions</li>
        </ul>
      </div>
      <div className="fText">Copyright © 2023 Filmy.com.</div>
    </div>
  );
};

export default Footer;