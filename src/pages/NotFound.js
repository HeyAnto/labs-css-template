import { Link } from "react-router-dom";
import emojiCyclone from "../assets/images/emoji/emoji-cyclone.webp";

export default function NotFound() {
  return (
    <section class="flex flex-column gap-5">
      <h1 className="flex items-center gap-3">
        <img src={emojiCyclone} alt="Emoji Cyclone" />
        Oups ! Page introuvable (404)
      </h1>

      <p>
        Il semble que la page que vous cherchez se soit envolée comme un CSS mal
        positionné. Peut-être une faute de frappe dans l'URL, ou un lien
        obsolète ?
      </p>

      <Link to="/" className="btn btn-primary">
        Retour à l'accueil
      </Link>
    </section>
  );
}
