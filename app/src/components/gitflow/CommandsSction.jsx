import { useState } from 'react';
import { LuCopy, LuCopyCheck , LuTerminal } from "react-icons/lu";
import { Card } from '../ui/Card';
import { Button } from '../ui/Buttom';

const CommandsSection = () => {
  const [copiedCommand, setCopiedCommand] = useState(null);

  const commands = [
    {
      command: 'git flow init',
      description: 'Inicializa o Git Flow no repositório atual',
      example: 'git flow init',
      details: 'Configura as branches padrão e prepara o repositório para usar o Git Flow.'
    },
    {
      command: 'git flow feature start',
      description: 'Inicia uma nova feature branch',
      example: 'git flow feature start tela-login',
      details: 'Cria uma nova branch baseada na develop para desenvolvimento de uma funcionalidade.'
    },
    {
      command: 'git flow feature finish',
      description: 'Finaliza uma feature e faz merge na develop',
      example: 'git flow feature finish tela-login',
      details: 'Faz o merge da feature na develop e remove a branch da feature.'
    },
    {
      command: 'git flow release start',
      description: 'Inicia um ciclo de release',
      example: 'git flow release start 1.0.0',
      details: 'Cria uma branch de release baseada na develop para preparar uma nova versão.'
    },
    {
      command: 'git flow release finish',
      description: 'Finaliza a release (merge em main e develop)',
      example: 'git flow release finish 1.0.0',
      details: 'Faz merge na main, cria uma tag da versão e faz merge de volta na develop.'
    },
    {
      command: 'git flow hotfix start',
      description: 'Inicia um hotfix urgente',
      example: 'git flow hotfix start 1.0.1',
      details: 'Cria uma branch de hotfix baseada na main para correções urgentes.'
    },
    {
      command: 'git flow hotfix finish',
      description: 'Finaliza o hotfix',
      example: 'git flow hotfix finish 1.0.1',
      details: 'Faz merge na main e develop, cria uma tag da correção.'
    }
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedCommand(text);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Principais Comandos do Git Flow</h2>
          <p className="text-xl text-gray-600">Guia prático com exemplos de uso</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6">
            {commands.map((cmd, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <LuTerminal className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-800">{cmd.command}</h3>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{cmd.description}</p>
                
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between">
                    <code className="text-green-400 font-mono text-sm">{cmd.example}</code>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(cmd.example)}
                      className="text-gray-400 hover:text-white"
                    >
                      {copiedCommand === cmd.example ? (
                        <LuCopyCheck className="w-4 h-4" />
                      ) : (
                        <LuCopy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm text-blue-800">{cmd.details}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommandsSection;
