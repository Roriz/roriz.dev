<template>
  <div v-if="isPreview" class="post-preview">
    <img src="assets/posts/tropical_on_rails_2026_cover.optimized.jpeg" alt="Tropical on Rails 2026" />
    <span>{{ post.title }}</span>
  </div>
  <section v-else class="post">
    <div class="tldr">
      <p>Uma das maiores surpresas desta edição foi a quantidade de palestras abordando, direta ou indiretamente, o uso de IA, um contraste interessante com os focos do ano passado. Mas, acima do hype, ficou um consenso claro e uníssono: a engenharia de software não vai acabar. Pelo contrário, ela será mais necessária do que nunca.</p>

      <p>Se o nosso papel está garantido, a grande divergência na comunidade gira em torno de <strong>como</strong> utilizar a IA no dia a dia. Em suma, o debate se dividiu entre um dilema de controle: <strong>microgerenciar</strong> a IA (como uma produtora estrita de código) versus <strong>macrogerenciar</strong> a IA (tratando-a como um dev júnior com mais autonomia, onde nós atuamos como guias e estabelecemos os limites).</p>
    </div>

    <p>No evento, duas referências ilustraram perfeitamente esses dois caminhos: o projeto do Rodrigo Serradura e a produtividade insana do Fabio Akita. Que fica claro se olharmos para as trajetórias de carreira deles, de onde essas filosofias vieram.</p>

    <h2>1. O Microgerenciamento (A Visão do Serradura)</h2>
    <p>Atuando como Principal Engineer e com uma longa história de debates sobre arquitetura e <em>design patterns</em> na comunidade, Serradura defende uma abordagem estruturada. O foco aqui é o microgerenciamento do código, isolamento de camadas e o <em>ownership</em> do longo prazo de um produto.</p>

    <p>Essa organização acumulada através dos anos (em processos, documentação e padrões arquiteturais) é exatamente o que traz previsibilidade e crescimento sustentável para empresas, blindando o código contra a rotatividade de funcionários. Ao integrar a IA num cenário assim, ela ganha praticamente um super poder. Podemos perceber isso em benchmarks como o do <a href="https://autocodebench.github.io/">AutoCodeBench</a>, onde o Elixir, por exemplo, atinge cerca de 82% de taxa de sucesso, contra uma média geral de 50%. Isso ocorre graças à filosofia de "one obvious way" e ao paradigma funcional, que reduzem drasticamente o contexto que a IA precisa entender.</p>

    <p>O "A-ha! Moment" de sua palestra ficou cravado quando ele exibiu o diagrama de evolução da sua arquitetura. O slide mostrava separações rigorosas de conceitos nas <em>branches</em>, aliadas a métricas de qualidade aferidas implacavelmente pelo <em>Rubycritic</em>:</p>

    <ul>
      <li>Family 1-2: Controller Architecture</li>
      <li>Family 3: Domain Structure</li>
      <li>Family 4: Entry Point Separation</li>
      <li>Family 5: Model Authority</li>
      <li>Family 6: Domain Naming</li>
      <li>Family 7: Bounded Contexts</li>
    </ul>

    <img src="assets/posts/tropical_on_rails_2026_serradura.optimized.jpeg" alt="Diagrama da Evolução da Arquitetura do Serradura" />
    <p><em class="caption">Diagrama da evolução da arquitetura e métricas de qualidade.</em></p>

    <p>Trazer essa disciplina e limites restritos para qualquer linguagem aumenta imensamente a eficácia da IA para a empresa a longo prazo.</p>
    <p><blockquote>Mais detalhes da visão do Serradura em seu projeto: <a href="https://github.com/railswhey/app">railswhey/app</a></blockquote></p>

    <h2>2. O Macrogerenciamento (A Visão do Akita)</h2>
    <p>Do outro lado, Akita traz a perspectiva de fundador e diretor da consultoria Codeminer 42. No mundo da consultoria, o que manda é resolver a dor do cliente, onde o foco está na entrega de valor e na métrica contratada.</p>

    <p>Nessa filosofia, a tecnologia e a programação são focadas e medidas através do ROI. O negócio e o produto andam lado a lado com o código. É o ambiente perfeito para delegar mais contexto à IA e macrogerenciá-la, focando em entregar o valor final para o usuário. É uma abordagem parecida com a que acompanhamos nos grandes sucessos de iniciativas como OpenClaw e na linha de pensamento que a própria Anthropic deixou transparecer quando o Claude Code vazou.</p>

    <p>Para o Akita, o ápice da quebra de paradigma veio no slide em que exibiu o painel de projetos de sua "maratona" de 2 meses: 8 projetos construídos e entregues em tempo recorde utilizando IA.</p>

    <img src="assets/posts/tropical_on_rails_2026_akita_1.optimized.jpeg" alt="Slide dos 8 Projetos em 2 Meses do Akita" />
    <p><em class="caption">Oito projetos entregues em tempo recorde com auxílio de IA.</em></p>

    <p>Como isso é possível? Ele explicou em outro momento focado em <strong>"aceitar a imperfeição"</strong>. Quando o custo de gerar código cai drasticamente graças aos agentes, errar passa a ser barato. Múltiplos exemplos práticos deixaram claro que a iteração ganha tanta velocidade que consertar falhas não gera o gargalo do passado, pavimentando o caminho perfeito para entregas insanamente rápidas e contínuas.</p>

    <img src="assets/posts/tropical_on_rails_2026_akita_2.optimized.jpeg" alt="Slide Aceitando a Imperfeição do Akita" />
    <p><em class="caption">Aceitando a imperfeição: a velocidade de correção supera o custo do erro.</em></p>

    <p><blockquote>Mais detalhes sobre o "Akita way": <a href="https://akitaonrails.com/en/2026/04/11/vs-code-is-the-new-punch-card/">VS Code is the new punch card</a></blockquote></p>

    <h2>Qual o melhor caminho?</h2>
    <p>Fica claro que estamos apenas no início desta onda, e todos nós precisamos amadurecer e descobrir a rota correta, se é que existe apenas uma. Pessoalmente, muito por conta da minha carreira possuir similaridades com a trajetória do Serradura, eu tendo a seguir pelo caminho focado no microgerenciamento e nos fundamentos mais estritos de código.</p>

    <p>Porém, sejamos sinceros sobre o ambiente que nos cerca. O ecossistema Ruby respira o lema "<em>Convention Over Configuration</em>" da cultura Rails desde a sua concepção. Essa tendência da comunidade de preferir o pragmatismo e a velocidade aponta que o âmbito geral penderá mais para o lado de Akita.</p>

    <h2>Acabou o Espaço para a Fauna Dev</h2>
    <p>Independentemente de qual caminho usamos para chegar em produção, seja esculpindo arquiteturas ou maratonando deploys, estamos vendo um aviso claro para uma parte dos devs.</p>

    <p>A era daqueles que chamávamos de "fauna dev"<sup>2</sup> ou de "programador ruim"<sup>3</sup>, chegou ao fim. Chegou a hora em que não existe mais espaço no mercado para quem apenas sobrevive fazendo CRUD ou mantendo monopólio de áreas do sistema. Estacionar virou sinônimo de demissão programada.</p>

    <p>Um <em>vibe code</em> não especializado, sem review e sem <em>ownership</em>, pode enganar em curtos prazos, mas quebra com o mundo real. Apenas uma base firme em engenharia garante a estabilidade de longo prazo de um sistema. Não importa qual atalho a IA consiga pegar, ser capaz de orquestrar um ambiente de produção no longo prazo não será absorvido autonomamente tão cedo. E é por isso que, independentemente da ferramenta que tenhamos à disposição, a sobrevivência é para quem entende que a responsabilidade, como sempre, será inteiramente nossa.</p>

    <hr />

    <p id="footnote-2"><small><sup>2</sup> Termo que usávamos quando trabalhei em consultoria (não a Codeminer), para quando encontrávamos soluções exóticas, como um calendário feito manualmente, dia a dia, ao invés de um simples loop; ou uma autenticação não determinística, onde o mesmo usuário e senha davam certo ou errado dependendo do servidor em que batiam.</small></p>

    <p id="footnote-3"><small><sup>3</sup> Termo utilizado pelo Akita para se referir a programadores comodados que estão sendo demitidos em <em>layoffs</em>.</small></p>
  </section>
</template>

<script setup>
const props = defineProps({
  post: {
    type: Object,
    required: true
  },
  isPreview: {
    type: Boolean,
    default: false
  }
})

if (!props.isPreview) {
  useHead({
    title: 'Tropical on Rails 2026',
    meta: [
      {
        name: 'description',
        content: 'Uma reflexão sobre o Tropical on Rails 2026: a engenharia de software não vai acabar, mas o papel do dev está mudando. O dilema entre microgerenciar a IA para arquiteturas sólidas vs macrogerenciar para entregas rápidas.'
      },
      { name: 'keywords', content: 'Tropical on Rails, AI, IA, Rails, Ruby, Serradura, Akita, Engenharia de Software, Blog, Radamés Roriz' },
      { name: 'author', content: 'Radamés Roriz' },
      { property: 'og:title', content: 'Tropical on Rails 2026' },
      { property: 'og:description', content: props.post.description },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: props.post.url },
      { property: 'og:image', content: 'assets/posts/tropical_on_rails_2026_cover.optimized.jpeg' },
    ]
  })
}
</script>
<style scoped>
.post em {
  display: inline;
  margin: 0;
  text-align: inherit;
  font-size: inherit;
  font-style: italic;
}

.post em.caption {
  display: block;
  text-align: center;
  margin: var(--spacing) auto;
  font-size: 0.9rem;
  color: var(--tx-secondary);
}
</style>
