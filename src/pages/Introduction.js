import emojiPaper from "../assets/images/emoji/emoji-paper.webp";

export default function Introduction() {
  return (
    <div className="flex flex-column gap-50">
      <section className="flex flex-column gap-10">
        <h1 className="flex items-center gap-3">
          <img src={emojiPaper} alt="Emoji Paper" />
          Introduction
        </h1>

        <p>
          Bienvenue dans la mini documentation de mon template CSS réutilisable.
          J'ai conçu ce template selon ma propre manière de structurer et
          d'organiser mes projets web. Pour l'instant, je l'utilise uniquement
          dans mes projets personnels, car il me permet de démarrer rapidement
          avec une base solide et cohérente, sans utiliser de framework
          extérieur comme Bootstrap ou Tailwind.
        </p>
      </section>

      <section className="flex flex-column gap-10">
        <h1>Système de Conception</h1>

        <div>
          <h2>Philosophie</h2>
          <p>
            J’ai adopté une approche utility-first pour optimiser l'efficacité,
            en utilisant un ensemble minimal de classes CSS utilitaires afin
            d'éviter les répétitions et accélérer le développement. Cependant,
            cette base n'étant pas exhaustive, elle pourra nécessiter des
            ajustements ou des ajouts en fonction de vos besoins.
          </p>
        </div>

        <div>
          <h2>Structure des fichiers</h2>
          <p>
            Le fichier principal (globals.css) importe les sous-fichiers
            essentiels (components.css et utilities.css), qui définissent les
            styles réutilisables dans tous vos layouts.
            <br />
            <br />
            Un quatrième fichier (layout.css) gère spécifiquement la mise en
            page. Comme plusieurs variantes peuvent exister (selon les sections
            ou pages), il permet une organisation flexible tout en restant
            modulaire.
          </p>
        </div>

        <div>
          <h2>Composants</h2>
          <p>
            Le template ne contient aucun composant prédéfini pour l'instant,
            offrant ainsi une liberté totale de personnalisation. Cette approche
            minimaliste permet d'éviter toute surcharge inutile et de n'intégrer
            que les éléments réellement nécessaires à votre projet.
          </p>
        </div>
      </section>

      <section className="flex flex-column gap-10">
        <h1>Bonnes pratiques</h1>

        <p>
          Privilégiez systématiquement les variables CSS pour une cohérence
          globale et des modifications simplifiées. Pour les mises en page
          complexes, combinez intelligemment les classes utilitaires existantes
          afin de limiter la duplication de code. Enfin, intégrez tout nouveau
          composant dans (components.css) pour maintenir une architecture propre
          et évolutive.
        </p>
      </section>

      <section className="flex flex-column gap-10">
        <h1>Roadmap</h1>
        <p>
          Un template alternatif viendra compléter l'actuel, proposant des
          éléments préconfigurés tels que :
        </p>

        <ul>
          <li>Thèmes clair/sombre</li>
          <li>Composants de base (boutons, tableaux, formulaires)</li>
          <li>Grille utilitaire responsive</li>
        </ul>

        <p>
          Cette version alternative conservera la philosophie minimaliste tout
          en offrant une prise en main plus rapide pour les projets standards.
        </p>
      </section>
    </div>
  );
}
