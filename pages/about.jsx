// pages/about.js
import Head from 'next/head';
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <>
      <Head>
        <title>About - [DJ Event Project Name]</title>
        <meta
          name="description"
          content="[DJ Event Project Name] - Learn more about us, our mission, and our story."
        />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>About [DJ Event Project Name]</h1>
        <p>
          Welcome to [DJ Event Project Name], where music meets energy, and
          unforgettable nights are born! We are a dynamic event production
          company dedicated to curating one-of-a-kind DJ experiences that
          captivate and inspire.
        </p>

        <h2 className={styles.subtitle}>What We Offer</h2>
        <ul>
          <li>
            <strong>World-Class DJs:</strong> Our events feature top-tier local
            and international DJs who bring their unique sound and energy to
            every set.
          </li>
          <li>
            <strong>Immersive Experiences:</strong> From stunning visuals to
            immersive lighting and sound, we focus on creating an atmosphere
            that elevates every moment.
          </li>
          <li>
            <strong>Exclusive Venues:</strong> We partner with some of the
            hottest venues to ensure that our events are as memorable as they
            are exciting.
          </li>
          <li>
            <strong>Vibrant Community:</strong> More than just an event, we
            create a space for music lovers to connect, share, and vibe to the
            beats they love.
          </li>
        </ul>

        <h2 className={styles.subtitle}>Our Story</h2>
        <p>
          Founded in [Year], [DJ Event Project Name] was born out of a shared
          love for electronic music and a passion for creating electrifying
          experiences. Since our first event, we’ve been dedicated to pushing
          the boundaries of what a DJ event can be, focusing on innovation,
          diversity, and unforgettable performances.
        </p>
        <p>
          Our vision is simple: to make every event an unforgettable journey
          through sound, light, and rhythm.
        </p>
      </div>
    </>
  );
};

export default About;
