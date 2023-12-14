import { useEffect } from "react";

import "../css/TextShpere.css";

import TagCloud from "TagCloud";

const TextShpere = () => {
  useEffect(() => {
    const container = ".tagcloud";
    const texts = [
      'NodeJS', 'ReactJS', 'JavaScript',
      'HTML', 'CSS', 'C++',
      'Cisco', 'JUnit', 'Java',
      'Arduino', 'SQL', 'MongoDB',
      'PostgreSQL', 'RabbitMQ', 'Git',
      'Github', 'PHP'
    ];
    const options = {};

    // Coloque o código do TagCloud dentro do useEffect
    const tagCloudElement = document.querySelector(container);

    if (tagCloudElement) {
      TagCloud(tagCloudElement, texts, options);
    }
  }, []); // Adicione um array vazio para garantir que o useEffect só seja executado uma vez (após a montagem inicial do componente)

  return (
    <div className="text-shpere">
      {/* A span tag className deve ser "tagcloud" */}
      <span className="tagcloud"></span>
    </div>
  );
};

export default TextShpere;