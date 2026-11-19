export default function PasswordReset({ assetHost }: { assetHost: string }): React.JSX.Element {
  return (
    <>
      <link rel="stylesheet" href={`${assetHost}/css/paswordreset.css`} />
      <header>
        <a href="https://odysseum.klepierre.fr">
          <img src={`${assetHost}/images/odysseum-logo.png`} alt="Odysseum" />
        </a>
      </header>
      <div className="container unified_container">
        <div className="login-container-reset">
          <div className="login-section-left" />
          <div className="login-section-right login-section-right-password-reset">
            <div className="login-panel">
              <span className="iconBack" />
              <div className="panel-right">
                <p>Réinitialiser mon mot de passe</p>
                <p className="pd_desc">
                  Il est temps de changer votre mot de passe ! Indiquez votre
                  adresse email, nous pourrons vous envoyer la marche à suivre
                  par email. Suivez ensuite les indications pour réinitialiser
                  votre mot de passe.
                </p>
                <div id="api" />
              </div>
            </div>
            <div className="login-email-success notVisble">
              <span className="iconBack" />
              <img src={`${assetHost}/images/icones/success.svg`} alt="Succès" />
              <p className="title">Vous devriez avoir reçu un email !</p>
              <p className="desc">
                Entrez votre nouveau mot de passe ci-dessous. Assurez-vous que
                le niveau de sûreté soit suffisant en ajoutant des lettres
                majuscules, des numéros ou des symboles.
              </p>
            </div>
            <div className="login-password-success notVisble">
              <span className="iconBack" />
              <img src={`${assetHost}/images/icones/success.svg`} alt="Succès" />
              <p className="title">
                Votre nouveau mot de passe a bien été enregistré !
              </p>
              <a className="btn_signin" href="https://odysseum.klepierre.fr">
                ME CONNECTER
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
