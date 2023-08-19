import React from "react";
import styles from './write-effect.module.css';
import clsx from "clsx";
import Typewriter from "typewriter-effect";

function WriteEffect() {
    return (
        <h1 className={clsx("margin-bottom--lg", styles.hero__title)}>
            <Typewriter onInit={(typewriter) => {
                typewriter.typeString("Why liliFLUX ?").pauseFor(2000).deleteAll().typeString("Why us ?").pauseFor(2000).deleteAll().start();
            }}
                options={{ loop: true }}
            />
        </h1>
    )
}

export default WriteEffect;