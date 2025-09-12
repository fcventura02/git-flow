import { useState } from 'react';
import {LuCopy, LuCircleCheck, LuCircleX, LuCircleCheckBig, LuLightbulb } from 'react-icons/lu'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Button } from '../ui/Buttom';

const CommitPatternsSection = () => {
  const [copiedCommit, setCopiedCommit] = useState(null);

  const commitTypes = [
    {
      type: 'feat:',
      description: 'Nova funcionalidade',
      example: 'feat: adicionar autenticação JWT',
      color: 'text-green-600',
      bgColor: 'border-l-green-600 bg-green-50'
    },
    {
      type: 'fix:',
      description: 'Correção de bug',
      example: 'fix: corrigir erro de login inválido',
      color: 'text-red-600',
      bgColor: 'border-l-green-600 bg-red-50'
    },
    {
      type: 'chore:',
      description: 'Tarefas de manutenção',
      example: 'chore: atualizar dependências',
      color: 'text-gray-600',
      bgColor: 'border-l-green-600 bg-gray-50'
    },
    {
      type: 'docs:',
      description: 'Atualizações de documentação',
      example: 'docs: adicionar instruções de deploy',
      color: 'text-blue-600',
      bgColor: 'border-l-green-600 bg-blue-50'
    },
    {
      type: 'style:',
      description: 'Alterações de formatação/CSS',
      example: 'style: ajustar padding em botões',
      color: 'text-purple-600',
      bgColor: 'border-l-green-600 bg-purple-50'
    },
    {
      type: 'refactor:',
      description: 'Refatorações de código',
      example: 'refactor: melhorar leitura da função de login',
      color: 'text-orange-600',
      bgColor: 'border-l-green-600 bg-orange-50'
    },
    {
      type: 'test:',
      description: 'Adição ou ajuste de testes',
      example: 'test: criar teste unitário para service',
      color: 'text-teal-600',
      bgColor: 'border-l-green-600 bg-teal-50'
    },
    {
      type: 'perf:',
      description: 'Melhorias de performance',
      example: 'perf: otimizar consulta do banco de dados',
      color: 'text-yellow-600',
      bgColor: 'border-l-green-600 bg-yellow-50'
    }
  ];

  const badExamples = [
    {
      bad: 'arrumei o bug',
      good: 'fix: corrigir validação de email no formulário',
      reason: 'Seja específico sobre o que foi corrigido'
    },
    {
      bad: 'update',
      good: 'feat: adicionar filtro por categoria na listagem',
      reason: 'Descreva claramente o que foi adicionado'
    },
    {
      bad: 'mudanças no css',
      good: 'style: ajustar responsividade do header mobile',
      reason: 'Especifique quais mudanças visuais foram feitas'
    }
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedCommit(text);
    setTimeout(() => setCopiedCommit(null), 2000);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Padrões de Nome de Commits</h2>
          <p className="text-xl text-gray-600">Conventional Commits para melhor organização e histórico</p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Commit Types Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {commitTypes.map((commit, index) => (
              <Card key={index} className={`flex flex-col ${commit.bgColor} border-l-4 !border-l-current ${commit.color}`}>
                <CardHeader className="pb-3">
                  <CardTitle className={`text-lg ${commit.color}`}>{commit.type}</CardTitle>
                  <p className="text-sm text-gray-600">{commit.description}</p>
                </CardHeader>
                <CardContent className="pt-0 flex flex-col h-full">
                  <div className="bg-gray-900 rounded-lg p-3 mb-3">
                    <code className="text-green-400 font-mono text-xs">{commit.example}</code>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(commit.example)}
                    className="w-full text-xs mt-auto"
                  >
                    {copiedCommit === commit.example ? (
                      <LuCircleCheck className="w-3 h-3 mr-1" />
                    ) : (
                      <LuCopy className="w-3 h-3 mr-1" />
                    )}
                    Copiar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Good vs Bad Examples */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center">
                <LuLightbulb className="w-6 h-6 mr-3 text-yellow-600" />
                Como Melhorar Seus Commits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {badExamples.map((example, index) => (
                  <div key={index} className="grid md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <LuCircleX className="w-5 h-5 text-red-500 mr-2" />
                        <span className="font-semibold text-red-700">Evite</span>
                      </div>
                      <div className="bg-red-100 rounded p-3">
                        <code className="text-red-800 text-sm">{example.bad}</code>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <LuCircleCheckBig className="w-5 h-5 text-green-500 mr-2" />
                        <span className="font-semibold text-green-700">Prefira</span>
                      </div>
                      <div className="bg-green-100 rounded p-3">
                        <code className="text-green-800 text-sm">{example.good}</code>
                      </div>
                    </div>
                    
                    <div className="text-center md:text-left">
                      <div className="font-semibold text-gray-700 mb-2">Por quê?</div>
                      <p className="text-sm text-gray-600">{example.reason}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Best Practices */}
          <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Regras de Ouro para Commits</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-blue-200">Estrutura:</h4>
                  <ul className="space-y-2 text-sm text-blue-100">
                    <li>• Use inglês para consistência</li>
                    <li>• Máximo de 50 caracteres no título</li>
                    <li>• Use tempo presente: "add" não "added"</li>
                    <li>• Não termine com ponto final</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-indigo-200">Conteúdo:</h4>
                  <ul className="space-y-2 text-sm text-indigo-100">
                    <li>• Seja específico sobre o que mudou</li>
                    <li>• Explique o "por quê", não apenas o "o quê"</li>
                    <li>• Um commit = uma funcionalidade</li>
                    <li>• Teste antes de comitar</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CommitPatternsSection;