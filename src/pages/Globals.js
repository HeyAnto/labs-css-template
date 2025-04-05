import emojiPaint from "../assets/images/emoji/emoji-paint.webp";

export default function Globals() {
  return (
    <div className="flex flex-column gap-50">
      <section className="flex flex-column gap-10">
        <h1 className="flex items-center gap-3">
          <img src={emojiPaint} alt="Emoji Paper" />
          Globals
        </h1>

        <p>
          Ce fichier définit les styles globaux du projet. Il contient les
          imports des autres fichiers CSS, la déclaration des polices de
          caractères, ainsi que les variables CSS pour les couleurs, les tailles
          de texte, les espacements et les styles de base pour les éléments HTML
          (titres, paragraphes, liens, boutons...).
        </p>
      </section>
    </div>
  );
}
