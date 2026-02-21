import Link from "next/link";
import styles from "./page.module.css"
import formationsData from '@/data/formations.json'

export default function Formations() {
    return(
        <div className={styles.container}>
            <h1>Mes formations</h1>
            <p>Pour voir le détail d&apos; une formation, cliquez dessus</p>
            <div className={styles.grid}>
                {console.log(formationsData)}
                {formationsData.map((formation, index) => (
                   <Link key={index} href={`/formations/${formation.slug}`} className={styles.card}>
                        <h2>{formation.title}</h2>
                        <p>{formation.shortDescription}</p>
                    </Link> 
                ))}
            </div>
        </div>
    )
}