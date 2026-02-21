import styles from "./page.module.css";
import Tag from "@/components/Tag/Tag";
import Link from "next/link";
import projectsData from "@/data/projects.json"

export const metadata = {
  title: "Les projets de Sébastien VIOLANTE",
  description: "Liste de tous les projets que j'ai conçus",
};

export default function Projects() {
  return (
    <div className="container">
      <h1 className="title">Mes Projets</h1>
      <p className="description">
        Découvrez les projets sur lesquels j&apos;ai travaillé
      </p>
      <div className={styles.grid}>
      {projectsData.map(project => (
        <Link key={project.id} href={`/projets/${project.slug}`} className={styles.card}>
            <h2>{project.title}</h2>
            <p>{project.shortDescription}</p>
            <div className={styles.tags}>
              {project.tags.map((tag,index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </div>
        </Link>
      ))}
      
        

       
      </div>
    </div>
  );
}
