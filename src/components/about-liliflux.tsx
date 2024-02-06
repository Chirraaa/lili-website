import clsx from "clsx";
import React from "react";
import styles from "./about-liliflux.module.css";
import WriteEffect from '../components/writeeffect';
import { Reveal } from '../components/Reveal';
import {
  BeakerIcon,
  FolderIcon,
  ArrowsRightLeftIcon,
  ArrowPathIcon,
  EyeDropperIcon,
  CommandLineIcon,
  ArrowDownOnSquareStackIcon,
} from "@heroicons/react/24/outline";

interface Callout {
  title: string;
  text: string;
  link: string;
  icon: (props: React.ComponentProps<"svg">) => JSX.Element;
}

const callouts: Callout[] = [
  {
    title: "",
    text: "Made for power users and developers.",
    link: "",
    icon: BeakerIcon,
  },
  {
    title: "",
    text: "Access to your project folders and files.",
    link: "",
    icon: FolderIcon,
  },
  {
    title: "",
    text: "Read and write files directly with AI",
    link: "",
    icon: ArrowsRightLeftIcon,
  },
  {
    title: "",
    text: "Messages which can be repeated or changed.",
    link: "",
    icon: ArrowPathIcon,
  },
  {
    title: "",
    text: "Inject different repeatable contexts.",
    link: "",
    icon: EyeDropperIcon,
  },
  {
    title: "",
    text: "Command Line Tool for repeatable workloads.",
    link: "",
    icon: CommandLineIcon,
  },
  {
    title: "",
    text: "Export and Import messages.",
    link: "",
    icon: ArrowDownOnSquareStackIcon,
  }
];

function Callout(props: Callout): JSX.Element {
  return (
    <div className={clsx("margin-top--xl card shadow--lw", styles.callout)}>
      <div className="card__body">
        <p>
          <props.icon className={styles.callout__icon} stroke="currentColor" aria-hidden="true" />
          <a href={props.link} className={styles.callout__link}>
            <span className="link--inset" aria-hidden="true"></span>
            {props.text}
          </a>
        </p>
      </div>
      <div className={styles.callout__bottom} />
    </div>

  );
}

export default function AboutLili(): JSX.Element {
  return (
    <section className="padding-vert--xl container">
      <div className={clsx("row margin-bottom--xl", styles.hero)}>
        <div className="col col--8">
          <WriteEffect />
        </div>
      </div>
      <Reveal>
        <div className="row">

          {callouts.map((c) => (
            <div key={c.title} className="col col--4">
              <Callout title={c.title} text={c.text} link={c.link} icon={c.icon} />
            </div>
          ))}

        </div>
      </Reveal>
    </section>
  );
}
