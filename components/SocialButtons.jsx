
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";


const SocialButtons = () => {
  return (
    <span className="flex gap-4 justify-center items-center ">
    <Link
      href={"https://www.linkedin.com/in/sharath-poojari-057589264/"}
    >
      <FaLinkedin className={` social-btn `} />
    </Link>
    

    <Link href={"https://github.com/sharathpjry"}>
      <FaGithub
        className={` social-btn `}
      />
    </Link>
  </span>
  )
}

export default SocialButtons