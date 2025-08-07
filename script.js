const reflexoes = [
    "A IA pode transformar a forma como aprendemos e ensinamos.",
      "É importante usar a tecnologia com responsabilidade nas escolas.",
        "A inteligência artificial nunca substituirá um bom professor.",
          "Será que estamos preparados para as mudanças que a IA traz?",
            "A educação precisa evoluir junto com a tecnologia."
            ];

            function mostrarReflexao() {
              const indice = Math.floor(Math.random() * reflexoes.length);
                document.getElementById("reflexao").textContent = reflexoes[indice];
                }
]