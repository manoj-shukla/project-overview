import { Users, Wrench, GitMerge, Lightbulb, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

interface Person {
  name: string;
  role: string;
}

interface ProductLine {
  name: string;
  status: 'solo' | 'team' | 'paused' | 'sponsored';
  resources: string;
  sponsor?: string;
  subItems?: string[];
  deliveryManager?: string;
}

export function OrgDiagram() {
  const productLines: ProductLine[] = [
    { name: 'Template Builder', status: 'solo', resources: 'Principal (solo)', sponsor: 'HoP', deliveryManager: 'Malik' },
    { name: 'Resume Guard', status: 'team', resources: 'HoP + Principal', sponsor: 'HoP', deliveryManager: 'Malik' },
    { name: 'Parser', status: 'team', resources: 'CTO & John', sponsor: 'CTO', deliveryManager: 'Malik' },
    {
      name: 'Integration',
      status: 'sponsored',
      resources: 'Principal / HoE / Delivery Mgr',
      sponsor: 'CTO',
      subItems: ['Algomindset', 'Datapipeline', 'Voice CV', 'Agentic Resume'],
      deliveryManager: 'Malik',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'solo': return 'bg-blue-500/20 text-blue-700 border-blue-300';
      case 'team': return 'bg-green-500/20 text-green-700 border-green-300';
      case 'paused': return 'bg-gray-500/20 text-gray-700 border-gray-300';
      case 'sponsored': return 'bg-purple-500/20 text-purple-700 border-purple-300';
      default: return 'bg-gray-500/20 text-gray-700 border-gray-300';
    }
  };

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-50 to-slate-100 p-8 overflow-auto">
      <div className="max-w-[1600px] mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-slate-900">Allsorter Product Roadmap & Dev Accountability</h1>
          <p className="text-lg text-slate-600">Three-Lane Product Delivery Model</p>
        </div>

        {/* Executive Oversight */}
        <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-indigo-900">
              <Users className="w-6 h-6" />
              Executive Oversight
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center gap-4">
              {/* Top: CEO */}
              <div className="text-center space-y-1">
                <div className="w-32 h-32 rounded-full bg-indigo-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  <div className="text-center">
                    <div className="text-sm">CEO</div>
                    <div>Declan</div>
                  </div>
                </div>
                <p className="font-semibold text-slate-800">Chief Executive</p>
              </div>
              {/* Connector line */}
              <div className="w-px h-6 bg-slate-300" />
              {/* Bottom row: HoP + CTO */}
              <div className="flex items-start gap-12">
                <div className="text-center">
                  <div className="w-28 h-28 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold shadow-lg">
                    <div className="text-center text-sm">
                      <div>Head of</div>
                      <div>Product</div>
                      <div className="text-xs mt-1">James</div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-28 h-28 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold shadow-lg">
                    <div className="text-center">
                      <div>CTO</div>
                      <div className="text-sm">Waqas</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Three Lanes */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Lane 1: Product Line Portfolio */}
          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300 shadow-xl">
            <CardHeader className="bg-purple-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="w-6 h-6" />
                🟣 Product Line Portfolio
              </CardTitle>
              <p className="text-sm text-purple-100 mt-1">Build new products or major features</p>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              {/* Oversight */}
              <div className="space-y-2">
                <h3 className="font-semibold text-purple-900 flex items-center gap-2">
                  Oversight (Shared)
                </h3>
                <div className="space-y-2 pl-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center text-xs font-bold">
                      W
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-slate-800">Waqas - CTO</p>
                      <p className="text-xs text-slate-600">Technical direction</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center text-xs font-bold">
                      J
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-slate-800">James - Head of Product</p>
                      <p className="text-xs text-slate-600">Business value & roadmap</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Integration Oversight */}
              <div className="space-y-2">
                <h3 className="font-semibold text-purple-900 flex items-center gap-2">
                  Integration Oversight
                </h3>
                <div className="space-y-2 pl-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold">
                      J
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-slate-800">Jahanzaib - Head of Engineering</p>
                      <p className="text-xs text-slate-600">Integration oversight</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Execution */}
              <div className="space-y-2">
                <h3 className="font-semibold text-purple-900">Execution</h3>
                <div className="space-y-2 pl-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">
                      M
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-slate-800">Manoj - Principal Engineer</p>
                      <p className="text-xs text-slate-600">Solo or project lead</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-slate-400 text-white flex items-center justify-center text-xs font-bold">
                      D
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-slate-800">Developers</p>
                      <p className="text-xs text-slate-600">Added from 🟢 Maintenance &amp; 🟢 Integration as &amp; when required</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs font-bold">
                      DO
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-slate-800">DevOps</p>
                      <p className="text-xs text-slate-600">Abdul</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center text-xs font-bold">
                      QA
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-slate-800">QA Team As per requirement</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Delivery */}
              <div className="space-y-2">
                <h3 className="font-semibold text-purple-900">Delivery</h3>
                <div className="space-y-2 pl-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold">
                      M
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-slate-800">Malik - Delivery Manager</p>
                      <p className="text-xs text-slate-600">Tracking & transparency</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Current Product Lines */}
              <div className="pt-4 border-t border-purple-200">
                <h3 className="font-semibold text-purple-900 mb-3">Current Pipeline</h3>
                <div className="space-y-2">
                  {productLines.map((pl, index) => (
                    <div key={index} className={`p-3 rounded-lg border ${getStatusColor(pl.status)}`}>
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-semibold text-sm">{pl.name}</p>
                        {pl.sponsor && (
                          <Badge variant="outline" className="text-xs">
                            {pl.sponsor}
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs">{pl.resources}</p>
                      {pl.subItems && (
                        <ul className="mt-2 space-y-1">
                          {pl.subItems.map((item, i) => (
                            <li key={i} className="text-xs flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-current inline-block flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                      {pl.deliveryManager && (
                        <div className="mt-2 flex items-center gap-1 pt-2 border-t border-current/20">
                          <span className="w-4 h-4 rounded-full bg-orange-500 text-white flex items-center justify-center text-[9px] font-bold flex-shrink-0">M</span>
                          <p className="text-xs font-medium">{pl.deliveryManager} · Delivery Mgr</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Lane 2: Product Integration */}
          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-300 shadow-xl">
            <CardHeader className="bg-blue-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2">
                <GitMerge className="w-6 h-6" />
                🔵 Product Integration
              </CardTitle>
              <p className="text-sm text-blue-100 mt-1">Merge product-line output into core</p>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              {/* Oversight */}
              <div className="space-y-2">
                <h3 className="font-semibold text-blue-900">Oversight</h3>
                <div className="space-y-2 pl-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold">
                      J
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-slate-800">James - Head of Product</p>
                      <p className="text-xs text-slate-600">Priority alignment</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Leadership */}
              <div className="space-y-2">
                <h3 className="font-semibold text-blue-900">Technical Leadership</h3>
                <div className="space-y-2 pl-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold">
                      J
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-slate-800">Jahanzaib - Head of Engineering</p>
                      <p className="text-xs text-slate-600">Integration owner</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Execution */}
              <div className="space-y-2">
                <h3 className="font-semibold text-blue-900">Execution</h3>
                <div className="space-y-2 pl-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold">
                      D
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-slate-800">Developers</p>
                      <p className="text-xs text-slate-600">Salman</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-cyan-600 text-white flex items-center justify-center text-xs font-bold">
                      IE
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-slate-800">Integration Engineer</p>
                      <p className="text-xs text-slate-600">If needed</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center text-xs font-bold">
                      QA
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-slate-800">QA Team</p>
                      <p className="text-xs text-slate-600">Irfan, Others</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs font-bold">
                      DO
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-slate-800">DevOps</p>
                      <p className="text-xs text-slate-600">Abdul</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Delivery */}
              <div className="space-y-2">
                <h3 className="font-semibold text-blue-900">Delivery</h3>
                <div className="space-y-2 pl-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold">
                      M
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-slate-800">Malik - Delivery Manager</p>
                      <p className="text-xs text-slate-600">Capacity alignment</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Integration Process */}
              <div className="pt-4 border-t border-blue-200">
                <h3 className="font-semibold text-blue-900 mb-3">Integration Steps</h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-2 p-2 bg-white/50 rounded">
                    <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                      1
                    </div>
                    <p className="text-sm text-slate-700">HoE meets Principal + sponsor</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 bg-white/50 rounded">
                    <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                      2
                    </div>
                    <p className="text-sm text-slate-700">Integration scope defined</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 bg-white/50 rounded">
                    <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                      3
                    </div>
                    <p className="text-sm text-slate-700">Resources assigned & merge executed</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Lane 3: Product Maintenance */}
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 shadow-xl">
            <CardHeader className="bg-green-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2">
                <Wrench className="w-6 h-6" />
                🟢 Product Maintenance
              </CardTitle>
              <p className="text-sm text-green-100 mt-1">Keep core product healthy</p>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              {/* Oversight */}
              <div className="space-y-2">
                <h3 className="font-semibold text-green-900">Oversight</h3>
                <div className="space-y-2 pl-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-bold">
                      J
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-slate-800">James - Head of Product</p>
                      <p className="text-xs text-slate-600">Priority setting</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Leadership */}
              <div className="space-y-2">
                <h3 className="font-semibold text-green-900">Technical Leadership</h3>
                <div className="space-y-2 pl-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold">
                      J
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-slate-800">Jahanzaib - Head of Engineering</p>
                      <p className="text-xs text-slate-600">Execution lead</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Execution */}
              <div className="space-y-2">
                <h3 className="font-semibold text-green-900">Execution</h3>
                <div className="space-y-2 pl-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold">
                      D
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-slate-800">Developers</p>
                      <p className="text-xs text-slate-600">Muez, Rashid, John</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-cyan-600 text-white flex items-center justify-center text-xs font-bold">
                      IE
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-slate-800">Integration Engineer</p>
                      <p className="text-xs text-slate-600">If needed</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center text-xs font-bold">
                      QA
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-slate-800">QA Team</p>
                      <p className="text-xs text-slate-600">Irfan, Others</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs font-bold">
                      DO
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-slate-800">DevOps</p>
                      <p className="text-xs text-slate-600">Abdul</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Delivery */}
              <div className="space-y-2">
                <h3 className="font-semibold text-green-900">Delivery</h3>
                <div className="space-y-2 pl-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold">
                      M
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-slate-800">Malik - Delivery Manager</p>
                      <p className="text-xs text-slate-600">Delivery coordination</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Maintenance Focus */}
              <div className="pt-4 border-t border-green-200">
                <h3 className="font-semibold text-green-900 mb-3">Focus Areas</h3>
                <div className="space-y-2">
                  <div className="p-2 bg-white/50 rounded">
                    <p className="text-sm font-semibold text-slate-800">Bug Fixes & Support</p>
                    <p className="text-xs text-slate-600">Keeping product stable</p>
                  </div>
                  <div className="p-2 bg-white/50 rounded">
                    <p className="text-sm font-semibold text-slate-800">Minor Enhancements</p>
                    <p className="text-xs text-slate-600">Incremental improvements</p>
                  </div>
                  <div className="p-2 bg-white/50 rounded">
                    <p className="text-sm font-semibold text-slate-800">Technical Debt</p>
                    <p className="text-xs text-slate-600">Code health & refactoring</p>
                  </div>
                  <div className="p-2 bg-white/50 rounded">
                    <p className="text-sm font-semibold text-slate-800">Performance</p>
                    <p className="text-xs text-slate-600">Optimization & monitoring</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Flow Arrows */}
        <div className="flex items-center justify-center gap-4 py-4">
          <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg border-2 border-purple-300">
            <span className="font-semibold text-purple-700">Product Line Portfolio</span>
          </div>
          <ChevronRight className="w-8 h-8 text-slate-400" />
          <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg border-2 border-blue-300">
            <span className="font-semibold text-blue-700">Product Integration</span>
          </div>
          <ChevronRight className="w-8 h-8 text-slate-400" />
          <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg border-2 border-green-300">
            <span className="font-semibold text-green-700">Product Maintenance</span>
          </div>
        </div>

        {/* Delivery Manager - Single Source of Truth */}
        <Card className="bg-gradient-to-r from-orange-50 to-amber-50 border-2 border-orange-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-orange-900">
              <Users className="w-6 h-6" />
              Delivery Manager - Single Source of Truth
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center gap-8">
              <div className="text-center space-y-2">
                <div className="w-32 h-32 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-xl shadow-lg">
                  <div>
                    <div className="text-sm">Delivery</div>
                    <div>Manager</div>
                    <div className="text-base mt-1">Malik</div>
                  </div>
                </div>
                <p className="font-semibold text-slate-800">Accountable to: Declan, Waqas, James</p>
              </div>
              <div className="flex-1 max-w-2xl">
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow border border-orange-200">
                    <p className="font-semibold text-sm text-slate-800 mb-1">Tracking</p>
                    <p className="text-xs text-slate-600">All product lines & milestones</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow border border-orange-200">
                    <p className="font-semibold text-sm text-slate-800 mb-1">Transparency</p>
                    <p className="text-xs text-slate-600">Status visibility for leadership</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow border border-orange-200">
                    <p className="font-semibold text-sm text-slate-800 mb-1">Capacity</p>
                    <p className="text-xs text-slate-600">Resource allocation insights</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Principles */}
        <Card className="bg-gradient-to-r from-slate-50 to-slate-100 border-2 border-slate-300">
          <CardHeader>
            <CardTitle className="text-slate-900">Key Principles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                <p className="font-semibold text-slate-800 mb-2">✅ Multiple Parallel Bets</p>
                <p className="text-xs text-slate-600">Run several product lines simultaneously</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                <p className="font-semibold text-slate-800 mb-2">👁️ Shared Visibility</p>
                <p className="text-xs text-slate-600">CTO & HoP oversee entire portfolio</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                <p className="font-semibold text-slate-800 mb-2">🎯 High Impact Focus</p>
                <p className="text-xs text-slate-600">Principal Engineer deployed strategically</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                <p className="font-semibold text-slate-800 mb-2">🛡️ Core Stability</p>
                <p className="text-xs text-slate-600">Product maintenance ensures reliability</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}