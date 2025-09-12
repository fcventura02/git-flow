import { LuGitBranch, LuHeart, LuExternalLink, LuTriangleAlert } from "react-icons/lu";

const Footer = () => {

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <LuGitBranch className="w-8 h-8 mr-3 text-blue-400" />
            <h3 className="text-2xl font-bold">Git Flow Explicado</h3>
          </div>

          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Este guia interativo foi desenvolvido para ajudar desenvolvedores a
            entender e aplicar o Git Flow em projetos. Continue aprendendo
            e compartilhe o conhecimento!
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a
              href="https://git-scm.com/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              Documentação Git <LuExternalLink className="w-4 h-4 ml-1" />
            </a>
            <a
              href="https://nvie.com/posts/a-successful-git-branching-model/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              Artigo Original Git Flow <LuExternalLink className="w-4 h-4 ml-1" />
            </a>
            <a
              href="https://github.com/nvie/gitflow"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              Git Flow Tools <LuExternalLink className="w-4 h-4 ml-1" />
            </a>
            <a
              href="https://www.youtube.com/watch?v=xC7frT2JPGE"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              Git Flow em video <LuExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 flex items-center justify-center">
              Feito com <LuHeart className="w-4 h-4 mx-2 text-red-500" /> para a
              comunidade de desenvolvedores
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
