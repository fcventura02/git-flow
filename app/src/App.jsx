import "./App.css";
import GitFlowIcon from "./components/svg/logoGitFlow";
import { GoPeople } from "react-icons/go";
import { LuClock, LuGitBranch, LuShield, LuZap } from "react-icons/lu";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/Card";
import DiagramSection from "./components/gitflow/DiagramSection";
import CommandsSection from "./components/gitflow/CommandsSction";
import ExamplesSection from "./components/gitflow/ExamplesSection";

function App() {
  return (
    <>
      <section className="relative px-4 py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white after:absolute after:inset-0 after:bg-black/20">
        <div className="container max-w-4xl mx-auto  text-center flex flex-col items-center z-10 relative">
          <div className="flex items-center mb-4 mx-auto">
            <GitFlowIcon
              className="lucide lucide-git-branch w-16 h-16 mr-4 text-blue-200"
              currentColor={"currentColor"}
            />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Git Flow Explicado
            </h1>
          </div>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Guia Visual e Interativo para Desenvolvedores
          </p>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">O que é Git Flow?</h2>
            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              Git Flow é um modelo de ramificação (branching model) que define
              um fluxo de trabalho rigoroso projetado em torno do lançamento de
              projetos. Este modelo é ideal para projetos que têm um ciclo de
              lançamento programado e funciona especialmente bem para equipes de
              desenvolvimento ágeis.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center flex flex-col items-center">
                <GoPeople size={48} className="mb-3 text-green-300" />
                <h3 className="font-semibold mb-2">Times Ágeis</h3>
                <p className="text-sm text-blue-200">
                  Organização clara para equipes grandes
                </p>
              </div>
              <div className="text-center flex flex-col items-center">
                <LuShield size={48} className="mb-3 text-yellow-300" />
                <h3 className="font-semibold mb-2">Releases Controladas</h3>
                <p className="text-sm text-blue-200">
                  Processo estruturado de lançamentos
                </p>
              </div>
              <div className="text-center flex flex-col items-center">
                <LuZap size={48} className="mb-3 text-red-300" />
                <h3 className="font-semibold mb-2">Hotfixes Rápidos</h3>
                <p className="text-sm text-blue-200">
                  Correções urgentes sem impactar o desenvolvimento
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            O que é Git Flow?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Um modelo de branching que define um conjunto rigoroso de regras
            para organizar branches em projetos Git, especialmente útil para
            releases estruturadas
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 my-12">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <LuGitBranch className="w-12 h-12 mx-auto text-blue-600" />
                <CardTitle className="text-lg">Para Times</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Ideal para equipes com múltiplos desenvolvedores trabalhando
                  simultaneamente
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <LuGitBranch className="w-12 h-12 mx-auto text-green-600" />
                <CardTitle className="text-lg">Organização</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Estrutura clara de branches para features, releases e hotfixes
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <LuShield className="w-12 h-12 mx-auto text-purple-600" />
                <CardTitle className="text-lg">Estabilidade</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Branch main sempre estável, pronta para produção
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <LuClock className="w-12 h-12 mx-auto text-orange-600" />
                <CardTitle className="text-lg">Releases</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Controle rigoroso de versões e cronogramas de lançamento
                </p>
              </CardContent>
            </Card>
          </div>
          <Card className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Cenário Real: Time de 5 Desenvolvedores
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-start text-indigo-100">
                  Imagine um time trabalhando em um e-commerce: Maria
                  desenvolvendo o sistema de pagamento, João criando o carrinho
                  de compras, Ana corrigindo bugs de SEO, Pedro preparando uma
                  release, e Carlos fazendo um hotfix urgente na autenticação.
                </p>
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="text-start font-semibold mb-2">
                    Com Git Flow:
                  </h4>
                  <ul className="text-start space-y-1 text-sm text-indigo-100">
                    <li>
                      • Cada um trabalha em sua própria branch sem conflitos
                    </li>
                    <li>
                      • As features são integradas de forma controlada na
                      develop
                    </li>
                    <li>
                      • A release é preparada sem afetar o desenvolvimento
                    </li>
                    <li>
                      • O hotfix é aplicado diretamente na main e sincronizado
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <DiagramSection />
      <CommandsSection />
      <ExamplesSection />
    </>
  );
}

export default App;
