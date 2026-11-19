"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import styles from "./page.module.css";

type Step = "email" | "code" | "password" | "complete";

const logo = "https://kortexcluster2.blob.core.windows.net/odysseum/common/images/logo.png";
const demoCode = "123456";

export default function Home(): React.JSX.Element {
  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");

  function changeStep(next: Step) {
    setError("");
    setStatus("");
    setStep(next);
  }

  function sendCode(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setCode("");
    changeStep("code");
  }

  function verifyCode(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (code !== demoCode) {
      setError("Code de démonstration incorrect. Utilisez 123456.");
      return;
    }
    changeStep("password");
  }

  function finishDemo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (password !== confirmation) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }
    setPassword("");
    setConfirmation("");
    setShowPassword(false);
    setShowConfirmation(false);
    changeStep("complete");
  }

  function goBack() {
    if (step === "code") {
      setCode("");
      changeStep("email");
    } else if (step === "password") {
      setPassword("");
      setConfirmation("");
      setShowPassword(false);
      setShowConfirmation(false);
      changeStep("code");
    } else {
      setEmail("");
      changeStep("email");
    }
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <a href="https://odysseum.klepierre.fr" aria-label="Odysseum - accueil">
          <img src={logo} alt="Odysseum" className={styles.logo} />
        </a>
      </header>
      <main className={styles.main}>
        <section className={styles.card} aria-labelledby="reset-title">
          {step === "email" ? (
            <a className={styles.back} href="https://odysseum.klepierre.fr" aria-label="Retour au site Odysseum">&#8249;</a>
          ) : (
            <button type="button" className={styles.back} onClick={goBack} aria-label="Étape précédente">&#8249;</button>
          )}
          <h1 id="reset-title">Réinitialiser mon mot de passe</h1>
          <p className={styles.notice} role="note">
            Démonstration uniquement : aucun e-mail n’est envoyé et aucun mot de passe n’est modifié. N’utilisez pas de vraies informations.
          </p>

          {step === "email" && (
            <>
              <p className={styles.description}>
                Il est temps de changer votre mot de passe ! Indiquez votre adresse email, nous pourrons vous envoyer la marche à suivre par email. Suivez ensuite les indications pour réinitialiser votre mot de passe.
              </p>
              <form className={styles.form} onSubmit={sendCode}>
                <label className={styles.srOnly} htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="Email*" autoComplete="email" required value={email} onChange={(event) => setEmail(event.target.value)} />
                <button type="submit" className={styles.send}><span aria-hidden="true">&#9656;</span> ENVOYER LE CODE</button>
                <button type="button" className={styles.continue} disabled><span aria-hidden="true">&#9656;</span> CONTINUER</button>
              </form>
            </>
          )}

          {step === "code" && (
            <>
              <p className={styles.description}>Code de démonstration : <strong>{demoCode}</strong>. Aucun e-mail n’a été envoyé.</p>
              <form className={styles.form} onSubmit={verifyCode}>
                <label htmlFor="verification-code">Code de vérification</label>
                <input id="verification-code" inputMode="numeric" autoComplete="off" required value={code} onChange={(event) => { setCode(event.target.value); setError(""); }} />
                {error && <p className={styles.error} role="alert">{error}</p>}
                {status && <p className={styles.status} role="status">{status}</p>}
                <button type="submit" className={styles.send}><span aria-hidden="true">&#9656;</span> VÉRIFIER LE CODE</button>
                <button type="button" className={styles.send} onClick={() => { setCode(""); setError(""); setStatus("Simulation : utilisez toujours le code 123456. Aucun e-mail n’a été envoyé."); }}>ENVOYER UN NOUVEAU CODE</button>
                <button type="button" className={styles.secondary} onClick={goBack}>CHANGER L’ADRESSE E-MAIL</button>
              </form>
            </>
          )}

          {step === "password" && (
            <>
              <p className={styles.description}>Choisissez deux valeurs identiques pour simuler la réinitialisation. Ne saisissez pas un vrai mot de passe.</p>
              <form className={styles.form} onSubmit={finishDemo}>
                <label htmlFor="new-password">Nouveau mot de passe de démonstration</label>
                <input id="new-password" type={showPassword ? "text" : "password"} autoComplete="off" required value={password} onChange={(event) => { setPassword(event.target.value); setError(""); }} />
                <label className={styles.toggle}><input type="checkbox" checked={showPassword} onChange={(event) => setShowPassword(event.target.checked)} /> Afficher le mot de passe</label>
                <label htmlFor="confirm-password">Confirmer le mot de passe</label>
                <input id="confirm-password" type={showConfirmation ? "text" : "password"} autoComplete="off" required value={confirmation} onChange={(event) => { setConfirmation(event.target.value); setError(""); }} />
                <label className={styles.toggle}><input type="checkbox" checked={showConfirmation} onChange={(event) => setShowConfirmation(event.target.checked)} /> Afficher la confirmation</label>
                {error && <p className={styles.error} role="alert">{error}</p>}
                <button type="submit" className={styles.send}><span aria-hidden="true">&#9656;</span> CONTINUER</button>
              </form>
            </>
          )}

          {step === "complete" && (
            <div className={styles.form} role="status">
              <p>Fin de la démonstration. Aucun mot de passe n’a été enregistré ni modifié.</p>
              <button type="button" className={styles.send} onClick={goBack}>RECOMMENCER</button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
