/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Card } from "../ui/Card";

const DiagramSection = () => {
  const [selectedBranch, setSelectedBranch] = useState(null);
  const branches = {
    main: {
      color: "bg-red-500",
      description:
        "Branch principal de produção. Contém apenas código estável e pronto para release.",
      example: "Código que está rodando em produção",
    },
    develop: {
      color: "bg-blue-500",
      description:
        "Branch de desenvolvimento. Integra todas as features concluídas para a próxima release.",
      example: "Código em desenvolvimento, pronto para testes",
    },
    feature: {
      color: "bg-green-500",
      description:
        "Branches temporárias para desenvolvimento de novas funcionalidades.",
      example: "feature/login, feature/dashboard, feature/api-integration",
    },
    release: {
      color: "bg-yellow-500",
      description:
        "Branch para preparar uma nova release. Permite correções de bugs e ajustes finais.",
      example: "release/1.2.0, release/2.0.0",
    },
    hotfix: {
      color: "bg-orange-500",
      description: "Branch para correções urgentes em produção.",
      example: "hotfix/1.1.1, hotfix/security-patch",
    },
  };
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Diagrama Interativo do Fluxo
          </h2>
          <p className="text-xl text-gray-600">
            Clique nas branches para entender sua função
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative bg-gray-50 rounded-2xl p-8 mb-8">
            <svg viewBox="0 0 800 400" className="w-full h-80">
              {/* Main branch */}
              <line
                x1="50"
                y1="350"
                x2="750"
                y2="350"
                stroke="#ef4444"
                strokeWidth="4"
              />
              <circle cx="100" cy="350" r="8" fill="#ef4444" />
              <circle cx="650" cy="350" r="8" fill="#ef4444" />
              <text
                x="100"
                y="375"
                textAnchor="middle"
                className="text-sm font-semibold fill-gray-700"
              >
                main
              </text>

              {/* Develop branch */}
              <line
                x1="50"
                y1="250"
                x2="750"
                y2="250"
                stroke="#3b82f6"
                strokeWidth="4"
              />
              <circle cx="150" cy="250" r="8" fill="#3b82f6" />
              <circle cx="600" cy="250" r="8" fill="#3b82f6" />
              <text
                x="150"
                y="275"
                textAnchor="middle"
                className="text-sm font-semibold fill-gray-700"
              >
                develop
              </text>

              {/* Feature branches */}
              <line
                x1="200"
                y1="250"
                x2="350"
                y2="150"
                stroke="#22c55e"
                strokeWidth="3"
              />
              <line
                x1="350"
                y1="150"
                x2="450"
                y2="250"
                stroke="#22c55e"
                strokeWidth="3"
              />
              <circle cx="350" cy="150" r="6" fill="#22c55e" />
              <text
                x="350"
                y="140"
                textAnchor="middle"
                className="text-sm font-semibold fill-gray-700"
              >
                feature/*
              </text>

              {/* Release branch */}
              <line
                x1="500"
                y1="250"
                x2="550"
                y2="300"
                stroke="#eab308"
                strokeWidth="3"
              />
              <line
                x1="550"
                y1="300"
                x2="600"
                y2="250"
                stroke="#eab308"
                strokeWidth="3"
              />
              <line
                x1="550"
                y1="300"
                x2="600"
                y2="350"
                stroke="#eab308"
                strokeWidth="3"
              />
              <circle cx="550" cy="300" r="6" fill="#eab308" />
              <text
                x="550"
                y="290"
                textAnchor="middle"
                className="text-sm font-semibold fill-gray-700"
              >
                release/*
              </text>

              {/* Hotfix branch */}
              <line
                x1="700"
                y1="350"
                x2="750"
                y2="250"
                stroke="#f97316"
                strokeWidth="3"
              />
              <line
                x1="750"
                y1="250"
                x2="750"
                y2="350"
                stroke="#f97316"
                strokeWidth="3"
              />
              <circle cx="750" cy="300" r="6" fill="#f97316" />
              <text
                x="750"
                y="290"
                textAnchor="start"
                className="text-sm font-semibold fill-gray-700"
              >
                hotfix/*
              </text>

              {/* Interactive areas */}
              {Object.entries(branches).map(([key, branch]) => {
                let x, y, width, height;
                switch (key) {
                  case "main":
                    x = 50;
                    y = 335;
                    width = 700;
                    height = 30;
                    break;
                  case "develop":
                    x = 50;
                    y = 235;
                    width = 700;
                    height = 30;
                    break;
                  case "feature":
                    x = 200;
                    y = 140;
                    width = 250;
                    height = 120;
                    break;
                  case "release":
                    x = 500;
                    y = 240;
                    width = 100;
                    height = 120;
                    break;
                  case "hotfix":
                    x = 700;
                    y = 240;
                    width = 80;
                    height = 120;
                    break;
                  default:
                    x = 0;
                    y = 0;
                    width = 0;
                    height = 0;
                }

                return (
                  <rect
                    key={key}
                    x={x}
                    y={y}
                    width={width}
                    height={height}
                    fill="transparent"
                    className="cursor-pointer hover:fill-black/5"
                    onClick={() =>
                      setSelectedBranch(selectedBranch === key ? null : key)
                    }
                  />
                );
              })}
            </svg>
          </div>

          {selectedBranch && (
            <Card className="p-6 animate-fade-in">
              <div className="flex items-center mb-4">
                <div
                  className={`w-4 h-4 rounded-full ${branches[selectedBranch].color} mr-3 transition-all`}
                ></div>
                <h3 className="text-2xl font-bold text-gray-800 capitalize transition-all">
                  {selectedBranch}
                </h3>
              </div>
              <p className="text-gray-600 mb-4 transition-all">
                {branches[selectedBranch].description}
              </p>
              <div className="bg-gray-100 rounded-lg p-4">
                <span className="text-sm font-semibold text-gray-500">
                  Exemplo:
                </span>
                <p className="text-gray-700 mt-1 transition-all">
                  {branches[selectedBranch].example}
                </p>
              </div>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default DiagramSection;
