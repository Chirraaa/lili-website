import React from "react"
import { ReactElement } from "react"
import styles from "./FAQ.module.css"

interface Question {
  title: string
  description: ReactElement
}

const data: Question[] = [
  {
    title: "How can it help me ?",
    description: (
      <>
        - <b>Low cost </b>of entry. No need to invest in heavy AI processes, give <b>liliFLUX</b> a whirl to see if AI can help in your task. <br />
        - <b>Quick</b> and <b>Easy</b>. No cutsom build setup, no need to hold a phd to get things going. Just install and go! <br />
        - Extremely <b>flexible</b>. We provide many tools to change and customise your prompts to be <b>perfect</b>. No more trial and error with long build steps. Just jump in! <br />
        - No lock in. All chat history and messages can be <b>easily</b> exported and imported into other tools.
      </>
    ),
  },
  {
    title: "Future plans ?",
    description: (
      <>
        Our plans aligns with features that provide more flexibility in AI choice and anything which speeds up the development of new AI integration or experimentation.<br />
        - LLAMA2 API <br />
        - Share prompts online <br />
        - Import/export prompts <br />
        - More workspace control <br />
        - More AI "memory" control

      </>
    ),
  },
  {
    title: "Techy side",
    description: (
      <>
        <b>Where's the data ?</b> <br />
        - We store all data in flat filein the UserData folder <br />
        <b>What is the app made in ?</b><br />
        - Typescript/JS, Electron, VueJS<br />
        <b>Does the app use a database ?</b><br />
        - No databases are used. Only JSON files.
      </>
    ),
  },
]

const Question = ({ title, description }: Question) => {
  return (
    <div className={styles.question}>
      <h3 className={styles.title}>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

const FAQ = () => {
  return (
    <section id="faq" className={styles.faq}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            {data[0] && <Question {...data[0]} />}
            {data[1] && <Question {...data[1]} />}
          </div>

          <div className="col col--6">
            {data[2] && <Question {...data[2]} />}
            {data[3] && <Question {...data[3]} />}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
