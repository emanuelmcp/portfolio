export function useChatSuggestions() {
  const messages = [
    {
      author: "assistant",
      content: "¿Tu lenguaje de programación favorito?",
    },
    {
      author: "assistant",
      content: "¿Experiencia con Vue o React?",
    },
    {
      author: "assistant",
      content: "¿Opinión sobre TypeScript vs JavaScript?",
    },
    {
      author: "assistant",
      content: "¿Usarías Go en back-end?",
    },
    {
      author: "assistant",
      content: "¿Experiencia con Spring vs NestJS?",
    },
    {
      author: "assistant",
      content: "¿Prefieres front-end, back-end o ambos?",
    },
    {
      author: "assistant",
      content: "¿Framework de CSS preferido?",
    },
    {
      author: "assistant",
      content: "¿Experiencia con bases de datos SQL?",
    },
    {
      author: "assistant",
      concontenttent: "¿Has usado Nuxt o Vue?",
    },
    {
      author: "assistant",
      content: "¿Herramientas esenciales en tu trabajo?",
    },
    {
      author: "assistant",
      content: "¿Cómo te actualizas en desarrollo fullstack?",
    },
  ];
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
}
