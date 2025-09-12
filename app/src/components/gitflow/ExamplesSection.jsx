import { LuCalendar , LuZap, LuShield, LuShoppingCart, LuBuilding2 } from "react-icons/lu";
import { GoPeople } from "react-icons/go";
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';

const ExamplesSection = () => {
  const examples = [
    {
      title: 'Sistema Bancário',
      icon: LuBuilding2,
      description: 'Sistema com múltiplas regulamentações e necessidade de releases controladas',
      features: [
        'Múltiplos times (frontend, backend, mobile)',
        'Releases mensais com aprovações rigorosas',
        'Hotfixes para correções de segurança',
        'Integração com sistemas legados'
      ],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      title: 'E-commerce Enterprise',
      icon: LuShoppingCart,
      description: 'Plataforma de vendas com alta disponibilidade e múltiplas integrações',
      features: [
        'Times de produto, pagamento e logística',
        'Releases semanais em horários específicos',
        'Hotfixes para problemas críticos de vendas',
        'A/B testing e feature flags'
      ],
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      title: 'Aplicação SaaS',
      icon: LuZap,
      description: 'Software como serviço com clientes empresariais e SLA rigoroso',
      features: [
        'Equipes distribuídas globalmente',
        'Releases quinzenais programadas',
        'Rollback rápido em caso de problemas',
        'CI/CD com pipelines automatizados'
      ],
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Exemplos de Projetos Complexos</h2>
          <p className="text-xl text-gray-600">Cenários reais onde o Git Flow é altamente recomendado</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {examples.map((example, index) => (
              <Card key={index} className={`border-2 ${example.borderColor} ${example.bgColor} hover:shadow-lg transition-all duration-300`}>
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <example.icon className={`w-12 h-12 ${example.color}`} />
                  </div>
                  <CardTitle className="text-xl text-gray-800">{example.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-6 text-center">{example.description}</p>
                  
                  <div className="space-y-3">
                    {example.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <div className={`w-2 h-2 rounded-full ${example.color.replace('text', 'bg')} mr-3 mt-2 flex-shrink-0`}></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="mt-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">Por que Git Flow funciona nesses cenários?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <GoPeople className="w-10 h-10 mx-auto mb-3 text-indigo-200" />
                <h4 className="font-semibold mb-2">Coordenação de Times</h4>
                <p className="text-sm text-indigo-100">Estrutura clara para múltiplas equipes trabalharem simultaneamente</p>
              </div>
              <div className="text-center">
                <LuCalendar className="w-10 h-10 mx-auto mb-3 text-purple-200" />
                <h4 className="font-semibold mb-2">Releases Programadas</h4>
                <p className="text-sm text-purple-100">Controle rigoroso de versões e cronogramas de lançamento</p>
              </div>
              <div className="text-center">
                <LuShield className="w-10 h-10 mx-auto mb-3 text-pink-200" />
                <h4 className="font-semibold mb-2">Estabilidade</h4>
                <p className="text-sm text-pink-100">Branch main sempre estável para correções urgentes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExamplesSection;