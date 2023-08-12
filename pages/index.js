import Link from 'next/link';
import { useTheme } from '@components/theme'
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

export default function Home() {
  useTheme();
  return (
    <div className="container">
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&amp;display=swap" rel="stylesheet"></link>
      <header>
        <NavigationBar />
      </header>
      <main>
        <div className='h1'>Hi, I'm Ashwin 👋</div>
        <p className='p1'>
          A software solutions architect who builds in <strong>Go Programming + AWS</strong> Stack.
          <br /> <br />
          I specialize in building services that run on <strong><a href="https://www.youtube.com/watch?v=STKCRSUsyP0" target="_blank" rel="noreferrer">Event-driven Architecture</a></strong> using <strong><a href="https://www.youtube.com/watch?v=XWTrcBqXi6s" target="_blank" rel="noreferrer">CQRS</a> & <a href="https://www.youtube.com/watch?v=_g6DA9WM7RE" target="_blank" rel="noreferrer">Microservices</a></strong>.<br /><br />
          Away from the code, my soul resonates with anything that relates to Tamil, the pulse of technology, global history, science and economics. I love spending quality time in the shared-responsibility model I call, 'my family' and I occasionally engage in my traditional occupation - farming. This blend of tech and tradition leads my shape of life between the bytes on my screen and the soil under my feet.
        </p>
        <p className='p2'>
          You can connect with me on: {' '}
          <a href="https://wwww.linkedin.com/in/ashwin2125" target="_blank" rel="noreferrer">LinkedIn</a> | {' '}
          <a href="https://www.x.com/ashwin2125" target="_blank" rel="noreferrer">Twitter (𝕏)</a>
        </p>
        <p className='p3'>
          In the meantime, feel free to checkout my {' '}
          <a href="https://hashnode.com/@ashwin2125" target="_blank" rel="noreferrer">blogs</a>, {' '}
          <a href="https://leetcode.com/ashwin2125/" target="_blank" rel="noreferrer">leetcode</a> and {' '}
          <a href="https://stackoverflow.com/users/12538720/ashwin2125" target="_blank" rel="noreferrer">stack-overflow</a>
        </p>
      </main>
    </div>
  );
}
