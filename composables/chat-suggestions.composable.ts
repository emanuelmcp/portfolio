export function useChatSuggestions() {
  const messages = [
    {
      author: "assistant",
      content: "¿Cuál es tu lenguaje de programación favorito y por qué?",
    },
    {
      author: "assistant",
      content: "¿Has trabajado con frameworks de JavaScript modernos como Vue o React?",
    },
    {
      author: "assistant",
      content: "¿Tienes experiencia con TypeScript y qué opinas sobre él comparado con JavaScript?",
    },
    {
      author: "assistant",
      content: "¿Cómo evalúas la conveniencia de usar Go en proyectos de back-end?",
    },
    {
      author: "assistant",
      content:
        "¿Has implementado aplicaciones utilizando el framework Spring y qué te parece frente a otras opciones como NestJS?",
    },
    {
      author: "assistant",
      content: "¿Prefieres trabajar en el front-end, back-end o te sientes cómodo en ambos?",
    },
    {
      author: "assistant",
      content: "¿Qué framework de CSS prefieres utilizar en tus proyectos front-end?",
    },
    {
      author: "assistant",
      content: "¿Tienes experiencia integrando bases de datos SQL en aplicaciones web?",
    },
    {
      author: "assistant",
      content: "¿Has utilizado Nuxt para desarrollar aplicaciones universales con Vue?",
    },
    {
      author: "assistant",
      content: "¿Qué herramientas de desarrollo de software consideras indispensables en tu flujo de trabajo?",
    },
    {
      author: "assistant",
      content: "¿Cómo te mantienes actualizado con las últimas tendencias y tecnologías en el desarrollo fullstack?",
    },
  ];
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
}
