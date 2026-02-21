import styles from "./page.module.css";
import formationsData from "@/data/formations.json";
import { notFound } from "next/navigation";

export async function generateMetadata({params}) {
  const { slug } = await params
  const formation = formationsData.find(formation => formation.slug === slug)
  if(!formation) {
    return {
      title: 'projet non trouvé'
    }
  }

  return {
    title: `${formation.title} | Portfolio`,
    description: formation.longDescription,
    openGraph: {
      title: formation.title,
      description: formation.shortDescription,
      image: [formation.image]
    }
  }
}
export default async function FormationDetail({ params }) {
  const { slug } = await params;
  // Next.js passe automatiquement le slug dans params
  const formation = formationsData.find((formation) => formation.slug === slug);

  // Si le projet n'existe pas, afficher la page 404
  if (!formation) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>{formation.title}</h1>
        <p className={styles.description}>{formation.longDescription}</p>
      </div>

      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <img
            className={styles.imagePlaceholder}
            src={formation.image}
            alt={formation.title}
          />
        </div>

        <div className={styles.details}>
          <h2>Technologies utilisées</h2>
          <div className={styles.technologies}>
            {formation.tags.map((tech, index) => (
              <span key={index} className={styles.tech}>
                {tech}
              </span>
            ))}
          </div>

          <div className={styles.links}>
            <a
              href={formation.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Voir le code →
            </a>
            <a
              href={formation.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.link} ${styles.linkPrimary}`}
            >
              Voir la démo →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// Cette fonction génère toutes les pages statiques au build
export function generateStaticParams() {
   return formationsData.map((formation) => ({
       slug: formation.slug,
   }))
}