const Projects = ({ lang = "en" }) => {
  const translations = {
    en: {
      project1: {
        title: "Proofolio AI",
        description1: "A hackathon project built in collaboration with",
        description2: "during the",
        description3: "Proofolio AI helps professionals without technical skills create portfolio websites from their resumes using AI.",
        techLabel: "Technologies used:",
        tech: "React/Next.js, OpenAI GPT-5 model, Tailwind CSS",
        statusLabel: "Project status:",
        status: "Beta"
      },
      project2: {
        title: "Electronics E-commerce Store Template",
        description1: "A ready-to-use e-commerce template designed for electronics and tech vendors. It supports product management, inventory tracking, and integrates with",
        description2: "for secure payments.",
        description3: "The template includes an admin dashboard for managing products and transactions with minimal setup required.",
        techLabel: "Technologies used:",
        tech: "React/Next.js, OpenAI GPT-5 model, Tailwind CSS",
        statusLabel: "Project status:",
        status: "Finished"
      }
    },
    fr: {
      project1: {
        title: "Proofolio AI",
        description1: "Un projet de hackathon réalisé en collaboration avec",
        description2: "pendant le",
        description3: "Proofolio AI aide les professionnels sans compétences techniques à créer des sites web de portfolio à partir de leurs CV en utilisant l'IA.",
        techLabel: "Technologies utilisées:",
        tech: "React/Next.js, modèle OpenAI GPT-5, Tailwind CSS",
        statusLabel: "État du projet:",
        status: "Bêta"
      },
      project2: {
        title: "Modèle de Boutique E-commerce d'Électronique",
        description1: "Un modèle de commerce électronique prêt à l'emploi conçu pour les vendeurs d'électronique et de technologie. Il prend en charge la gestion des produits, le suivi des stocks et s'intègre avec",
        description2: "pour des paiements sécurisés.",
        description3: "Le modèle inclut un tableau de bord administrateur pour gérer les produits et les transactions avec une configuration minimale requise.",
        techLabel: "Technologies utilisées:",
        tech: "React/Next.js, modèle OpenAI GPT-5, Tailwind CSS",
        statusLabel: "État du projet:",
        status: "Terminé"
      }
    }
  };

  const t = translations[lang] || translations.en;

  return (
    <div className="flex flex-col my-4">
      <div id="project_card_1" className="flex flex-col md:flex-row    rounded-md  ">
        <div className="md:w-1/2 space-y-2">
          <h2 className="text-xl font-semibold">{t.project1.title}</h2>
          <p>
            {t.project1.description1}
            <a href="https://www.linkedin.com/in/yahya-elouarrak/" className="text-primary underline px-2 hover:no-underline">
              Yahaya Elouarrak
            </a>
            {t.project1.description2}
            <a
              href="https://lablab.ai/event/co-creating-with-gpt-5"
              target="_blank"
              className="text-primary underline hover:no-underline px-2"
            >
              lablab Co-Creating with GPT-5 Hackathon
            </a>
            .
          </p>
          <p>
            {t.project1.description3}
          </p>
          <p>
            <span className="font-medium">{t.project1.techLabel}</span>{" "}
            {t.project1.tech}
          </p>
          <p>
            <span className="font-medium">{t.project1.statusLabel}</span>{" "}
            <span className="text-yellow-500">{t.project1.status}</span>
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center mt-4 md:mt-0">
          <img
            src="/pr1.png"
            alt="Proofolio AI preview"
            className="w-full h-auto rounded-md object-cover"
          />
        </div>
      </div>

      <div id="project_card_2" className="flex flex-col md:flex-row    rounded-md   mt-4">
        <div className="md:w-1/2 space-y-2">
          <h2 className="text-xl font-semibold">
            {t.project2.title}
          </h2>
          <p>
            {t.project2.description1}
            <a
              href="https://stripe.com"
              target="_blank"
              className="text-primary underline hover:no-underline px-2"
            >
              Stripe
            </a>
            {t.project2.description2}
          </p>
          <p>
            {t.project2.description3}
          </p>
          <p>
            <span className="font-medium">{t.project2.techLabel}</span>{" "}
            {t.project2.tech}
          </p>
          <p>
            <span className="font-medium">{t.project2.statusLabel}</span>{" "}
            <span className="text-green-500">{t.project2.status}</span>
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center mt-4 md:mt-0">
          <img
            src="/pr2.webp"
            alt="Electronics e-commerce template preview"
            className="w-full h-auto rounded-md object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;