import React, { useEffect, useState, useRef } from 'react';
import clsx from 'clsx';
import classNames from 'classnames';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { useColorMode } from '@docusaurus/theme-common';
import HomepageFeatures from '../components/HomepageFeatures';
import { useLatestVersion } from '@docusaurus/plugin-content-docs/client';
import styles from './index.module.css';
import Translate, { translate } from '@docusaurus/Translate';
import { CodeBlocks } from '../theme/Command';
import SwiperCarousel from '../components/SwiperCarousel';
import AboutLili from "@site/src/components/about-liliflux";
import Test from '@site/src/components/test';
import FAQ from '../components/FAQ';
import ShowCase from '../components/showcase';



function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <span className={classNames(styles.heroImage)}>
        <DynamicHeaderImage />
      </span>
      <div className={styles.heroCarousel}>
        <SwiperCarousel />
      </div>

      <div className={styles.buttons}>
        <Link className="button button--secondary button--lg" to="/docs/getting-started">
          Get Started Now!
        </Link>
      </div>
    </header>
  );
}


function Cards() {
  const cards = [
    {
      label: translate({ message: 'Instant file access' }),
      description: translate({
        message: "Gives AI the power to directly read, change and work with your files."
      }),
      link: '',
      isDoc: true,
      linkText: translate({ message: 'Documentation' }),
      imageUrl: '/images/card1.png'
    },
    {
      label: translate({ message: 'Customizable' }),
      description: translate({
        message: "AI comes with lots of bells and whistles, by default we will hide these. But with one simple click you can access all of the advanced features you need."
      }),
      link: '',
      isDoc: true,
      linkText: translate({ message: 'Documentation' }),
      imageUrl: '/images/card2.png'
    },
    {
      label: translate({ message: 'Chat history editor' }),
      description: translate({
        message: "Manage the history and edit your chats to create new advanced workloads which you can load with ease."
      }),
      link: '',
      isDoc: true,
      linkText: translate({ message: 'Documentation' }),
      imageUrl: '/img/index/showcase1.png'
    }
  ]

  const latestVersion = useLatestVersion()

  return (
    <section className={classNames(styles.cardContainer)}>
      {cards.map((card, index) => (
        <div className={classNames(styles.card, 'card')} key={index}>
          <div className={classNames(styles.cardSide, styles.cardLeading)}>
            <h2>{card.label}</h2>
            <p>{card.description}</p>
            <div className={classNames(styles.cardSpacer)}></div>
            <Link
              className={'button button--primary'}
              href={(card.isDoc ? latestVersion.path : '') + card.link}
            >
              {card.linkText}
            </Link>
          </div>
          <div className={classNames(styles.cardSide, styles.cardImage)}>
            <img src={card.imageUrl} />
          </div>
        </div>
      ))}
    </section>
  )
}

function DynamicHeaderImage() {
  const { colorMode } = useColorMode()
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Pre-fetch images
  useEffect(() => {
    const images = []

    const darkLiliLogo = (new Image().src = '/img/logo_dark.png')
    images.push(darkLiliLogo)

    const lightLiliLogo = (new Image().src = '/img/logo_light.png')
    images.push(lightLiliLogo)
  }, [])

  // // Set dark mode correctly
  useEffect(() => {
    setIsDarkMode(colorMode === 'dark')
  }, [colorMode])

  return (
    <img
      src={
        isDarkMode
          ? '/img/index/logo_dark.png'
          : '/img/index/logo_light.png'
      }
    />
  )
}



export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const latestVersion = useLatestVersion();

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="liliFLUX empowers users with their own data, to work faster.">
      <HomepageHeader />
      <ShowCase />    
      <main>

        <section className="container">

          <div className={classNames(styles.row)}>
            <Cards />
          </div>
        </section>

        <AboutLili />
        <FAQ/>
      </main>
    </Layout>
  );
}
