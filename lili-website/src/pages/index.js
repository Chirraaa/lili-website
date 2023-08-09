import React, { useEffect, useState } from 'react';
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
      label: translate({ message: 'Why liliFLUX and not just ChatGPT?' }),
      description: translate({
        message: "Simplify your day to day workload with quick content generation relevant to your product."
      }),
      imageUrl: ''
    },
    {
      label: translate({ message: 'Students' }),
      description: translate({
        message: "Access to an AI which can directly assist and create experiments directly on your computers."
      }),
      imageUrl: ''
    },
    {
      label: translate({ message: 'Engineers' }),
      description: translate({
        message: "Handle code relevant to your real projects. Direct the AI to your existing code and enable it to make changes, document it and much more."
      }),
      imageUrl: ''
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
      <main>
        <section className="container">
          <div className={classNames(styles.row)}>
            <Cards />
          </div>
        </section>

      </main>
      <header className={classNames('hero', styles.hero)}>

<div className={classNames(styles.heroContainer)}>
  <div className={classNames(styles.heroSubtitle, 'hero__subtitle')}>
    <Translate>
      liliFLUX empowers users with their own data, to work faster.
    </Translate>
  </div>
  <div className={classNames(styles.commandContainer)}>
    <CodeBlocks />
  </div>
</div>

</header>
    </Layout>
  );
}
