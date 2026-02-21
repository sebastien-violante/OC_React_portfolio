import styles from "./page.module.css";
import Tag from "../components/Tag/Tag"

const technologies = [
  "PHP",
  "Symfony",
  "Bootstrap",
  "Twig",
  "Javascript",
  "React",
  "Next.js"
]

export default function Home() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Bonjour, je suis <span className={styles.highlight}>John DOE</span>
        </h1>
        <p className={styles.heroSubtitle}>
          Développeur Web Full-Stack
        </p>
        <p className={styles.heroDescription}>
          Je crée des applications web modernes, performantes et accessibles
          avec React, Next.js et Node.js.
        </p>
        <div className={styles.heroButtons}>
          <a href="projets" className={`${styles.btn} ${styles.btnPrimary}`}>
            Voir mes projets
          </a>
          <a href="contact" className={`${styles.btn} ${styles.btnSecondary}`}>
            Me contacter
          </a>
        </div>
        <div className={styles.tagsContainer}>
          {technologies.map((tech,index) => (
            <Tag key={index}>{tech}</Tag>
          ))}
        </div>
      </div>
    </div>
  );
}
