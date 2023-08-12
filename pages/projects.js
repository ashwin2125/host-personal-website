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
        <div className='h1'>Projects 💻</div>
        <p className='p1'>
         <strong>Few of my open-source projects that I find worth sharing here:</strong>
         <ul>
         <li>
            <a href="https://www.figma.com/community/file/1028255898372668126/Tweety-%F0%9F%95%8A%EF%B8%8F----Create-Stunning-tweets-!" target="_blank" rel="noreferrer">Figma - Tweety</a> - beautiful & gradient tweets generator for creators. (forked 2k times!!!)
          </li>
          <li>
            <a href="https://github.com/swiggy-2022-bootcamp/cdp-team1" target="_blank" rel="noreferrer">Swiggy Qwik - i++ CDP Project</a> - final project built my our team of developers at <a href="https://bytes.swiggy.com/level-up-with-swiggys-i-a902b73db00a" target="_blank" rel="noreferrer">Swiggy i++</a>.
          </li>
          <li>
            <a href="https://github.com/ashwin2125/opnsrc-machinelearning-itms-ug-graduation-project" target="_blank" rel="noreferrer">Intelligent Traffic Management System</a> - machine learning project for my U.G B.Tech degree.
          </li>
          <li>
            <a href="https://github.com/ashwin2125/opnsrc-microsoft-internship-bud.ai-project" target="_blank" rel="noreferrer">Microsoft - Bud.ai Student Twin</a> - individual project at the end of  <a href="https://www.thehindubusinessline.com/info-tech/microsoft-launches-future-ready-talent-an-internship-program-for-undergraduate-students/article36473306.ece" target="_blank" rel="noreferrer">Microsoft's FRT program</a>.
          </li>
          <li>
            <a href="https://github.com/ashwin2125/opnsrc-devtool-vscode-macos-dark-theme" target="_blank" rel="noreferrer">VSCode - MacOS Dark Theme</a> - dark theme for devs using windows ;) (<a href="https://www.thehindubusinessline.com/info-tech/microsoft-launches-future-ready-talent-an-internship-program-for-undergraduate-students/article36473306.ece" target="_blank" rel="noreferrer">used by 1500+ devs!!!</a>).
          </li>
         </ul>

        </p>
        <p className='p1'>
        <strong>I practice code and build stuffs here:</strong>
         <ul>
          <li>
            <a href="https://github.com/ashwingopalsamy-solaris/practice-leetcode" target="_blank" rel="noreferrer">LeetCode Practice & Solutions </a> - i post solutions explaining my approach and intuition.
          </li>
          <li>
            <a href="https://github.com/ashwingopalsamy-solaris/practice-go-ds" target="_blank" rel="noreferrer">DSA - in Go Programming</a> - i learn and implement data-structures from scratch in go.
          </li>
          <li>
            <a href="https://ashwingopalsamy.in" target="_blank" rel="noreferrer">My personal portfolio</a> - i designed by inspiration from vicvijayakumar's site, hosted in netlify.
          </li>
         </ul>
        </p>
        <br />
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
