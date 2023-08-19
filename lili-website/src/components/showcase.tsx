import clsx from "clsx";
import React from "react";
import styles from "./showcase.module.css";

export default function ShowCase(): JSX.Element {
  return (
    <section className="padding-vert--xl container">
      <div className={clsx("row row--no-gutters shadow--md", styles.item)}>
        <div
          className="col col--6"
          aria-hidden="true"
          style={{
            backgroundImage: "url('/img/index/showcase.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
        <div className={clsx("col col--6", styles.item__inner)}>
          <div>
            <h1 className={clsx("margin-bottom--md", styles.item__title)}>
              The power of AI at your fingertips
            </h1>
            <p className="margin-bottom--md">
              liliFLUX was created by two developers who make games
              in their space time. They used AI to fill gaps in their
              projects such as documentation writing, UI and much more.
              Nothing off the shelf existed, and so liliFLUX was born.
            </p>
            <a className="button button--secondary" href="/docs/features/run-tasks">
              Documentation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
