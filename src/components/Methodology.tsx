const Methodology = () => {
  const steps = [
    { number: "1", title: "Discovery", description: "Analyseren van requirements, bestaande systemen en doelen." },
    { number: "2", title: "Architectuur", description: "Ontwerpen van schaalbare technische architectuur en database models." },
    { number: "3", title: "Planning", description: "User stories, sprint planning en een realistische roadmap." },
    { number: "4", title: "Development", description: "Agile sprints met wekelijkse demos en clean code." },
    { number: "5", title: "Schalen", description: "Verankeren wat werkt in teams en processen, verbreden en borgen." },
    { number: "6", title: "Deployment", description: "CI/CD pipelines, monitoring en doorlopend onderhoud." }
  ];

  const tools = ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker", "AWS"];

  return (
    <section id="werkwijze" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Werkwijze</h2>
          <p className="text-xl text-muted-foreground">
            Van idee naar productie - een bewezen development proces
          </p>
        </div>

        {/* Process Steps - Compact inline style */}
        <div className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-primary text-primary-foreground rounded-full font-bold text-sm mb-3">
                  {step.number}
                </div>
                <h3 className="font-semibold mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Methodology Highlight */}
        <div className="bg-gradient-subtle rounded-2xl p-8 text-center shadow-soft mb-12">
          <h3 className="text-xl font-bold mb-3">Slimmer vernieuwen, sneller leren</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Veel organisaties willen vernieuwen, maar weten niet waar te beginnen. 
            Mavix helpt om kansen scherp te stellen en ideeën om te zetten in haalbare, meetbare oplossingen.
          </p>
        </div>

        {/* Tools */}
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-4">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-accent/10 text-accent font-medium rounded-full text-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
