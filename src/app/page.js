import styles from "./page.module.css";

const logo = "https://kortexcluster2.blob.core.windows.net/odysseum/common/images/logo.png";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <a href="https://odysseum.klepierre.fr" aria-label="Odysseum - accueil">
          <img src={logo} alt="Odysseum" className={styles.logo} />
        </a>
      </header>

      <main className={styles.main}>
        <section className={styles.card} aria-labelledby="reset-title">
          <a className={styles.back} href="https://odysseum.klepierre.fr" aria-label="Retour au site Odysseum">
            &#8249;
          </a>
          <h1 id="reset-title">Réinitialiser mon mot de passe</h1>
          <p className={styles.description}>
            Il est temps de changer votre mot de passe ! Indiquez votre adresse
            email, nous pourrons vous envoyez la marche à suivre par email.
            Suivez ensuite les indications pour réinitialiser votre mot de passe.
          </p>
          <div className={styles.form}>
            <label className={styles.srOnly} htmlFor="preview-email">Email</label>
            <input id="preview-email" type="email" placeholder="Email*" disabled />
            <button type="button" className={styles.send} disabled>
              <span aria-hidden="true">&#9656;</span> ENVOYER LE CODE
            </button>
            <button type="button" className={styles.continue} disabled>
              <span aria-hidden="true">&#9656;</span> CONTINUER
            </button>
          </div>
          <p className={styles.notice}>
            Aperçu uniquement : la réinitialisation est disponible dans le
            parcours sécurisé B2C.
          </p>
        </section>
      </main>
    </div>
  );
}
