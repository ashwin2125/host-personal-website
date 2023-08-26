import Head from 'next/head';
import { useTheme } from '@components/theme'
import NavigationBar from '@components/NavigationBar';

export default function Home() {
  useTheme();
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&amp;family=DM+Serif+Display&amp;display=swap" rel="stylesheet"></link>
      </Head>
      <div className="container">
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&amp;display=swap" rel="stylesheet"></link>
      <header>
        <NavigationBar />
      </header>
      <main>
     <div className='main-inner'>
        <div className='h1'>Links 🖇️</div>
        <p className='p1'>
         <strong>I am currently reading these books:</strong> <br/> <br/>

         Personal:
         <ul>
         <li>
            <a href="https://amzn.eu/d/gIwKHpn" target="_blank" rel="noreferrer">IKIGAI</a> - an international bestseller on the people who I admire the most.
          </li>
          <li>
            <a href="https://amzn.eu/d/0alV3mj" target="_blank" rel="noreferrer">Rich Dad Poor Dad</a> - most recommended book to me by fellow peers.
          </li>
          <li>
            <a href="https://amzn.eu/d/d2xwmrt" target="_blank" rel="noreferrer">The Bee, the Beetle and the Money Bug</a> - the Bankbazaar founder's guide to the personal finance.
          </li>
          </ul>
          Professional:
          <ul>
          <li>
            <a href="https://www.amazon.in/dp/1492077216?ref_=cm_sw_r_cp_ud_dp_6Z2X9HW06W3REZV4FDZX" target="_blank" rel="noreferrer">Learning Go - Jon Bodner</a> - perfect start to learning fundamentals of go in an idiomatic way.
          </li>
          <li>
            <a href="https://amzn.eu/d/eDsRuWj" target="_blank" rel="noreferrer">Learn Data Structures and Algorithms with Golang</a> - to up my go + ds skills.
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
        </div>
        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-53PX2GYT8S"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-53PX2GYT8S');
        </script>
      </main>
    </div>
    </>
  );
}
