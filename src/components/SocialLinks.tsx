import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

interface SocialLinksProps {
  email: string;
  github: string;
  linkedin?: string;
}

const SocialLinks = ({ email, github, linkedin }: SocialLinksProps) => {
  return (
    <div className="flex items-center gap-5">
      <a href={`mailto:${email}`} className="story-link" aria-label="Envoyer un email">
        <span className="sr-only">Email</span>
        <FontAwesomeIcon className="text-xl" icon={faEnvelope} />
      </a>
      <a href={github} target="_blank" rel="noreferrer" className="story-link" aria-label="GitHub">
        <span className="sr-only">GitHub</span>
        <FontAwesomeIcon className="text-xl" icon={faGithub} />
      </a>
      {linkedin && (
        <a href={linkedin} target="_blank" rel="noreferrer" className="story-link" aria-label="LinkedIn">
          <span className="sr-only">LinkedIn</span>
          <FontAwesomeIcon className="text-xl" icon={faLinkedin} />
        </a>
      )}
    </div>
  );
};

export default SocialLinks;
