import Link from 'next/link';
import { useRouter } from 'next/router';

const NavigationItem = ({ path, label }) => {
  const router = useRouter();
  return (
    <li>
      <Link href={path}>
        <a className={router.pathname === path ? 'active' : ''}>{label}</a>
      </Link>
    </li>
  );
};

const NavigationBar = () => (
  <nav>
    <ul>
      <NavigationItem path="/" label="home" />
      <NavigationItem path="/projects" label="projects" />
      <NavigationItem path="/links" label="links" />
      <li><a href="https://www.rsm.io/ashwingopalsamy" target="_blank" rel="noopener noreferrer" className="resume-link">resume<span className="arrow"></span></a></li>
    </ul>
  </nav>
);

export default NavigationBar;
