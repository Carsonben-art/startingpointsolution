import './ImpactSection.css'
const ImpactSection = () => {
    const impactData = [
      {
        number: "1000+",
        title: "Empowered Teenagers",
        description: "Our programs have empowered many teenage mothers, providing them with the skills and resources to advocate for their rights.",
        bgColor: "var(--blue-gradient)"
      },
      {
        number: "10,000+",
        title: "Distributed Necessities",
        description: "We have provided essential items such as food, clothing, diapers, and sanitary products to ensure individuals and families have access to the basic necessities they need for daily living.",
        bgColor: "var(--purple-gradient)"
      },
      {
        number: "90%",
        title: "Workshop Success",
        description: "We organize parenting workshops focused on essential topics such as parenting skills, child development, and healthcare, empowering parents with the knowledge and tools to nurture and support their children effectively.",
        bgColor: "var(--orange-gradient)"
      }
    ];
  
    return (
      <section className="impact-section">
        <div className="impact-header">
          <span className="impact-label">Impact</span>
          <h2 className="impact-title">
            <span className="highlight">Transformative</span> Impact
            <br />of Our Hard Work
          </h2>
        </div>
        
        <div className="impact-cards">
          {impactData.map((item, index) => (
            <div 
              className="impact-card" 
              key={index}
              style={{ background: item.bgColor }}
            >
              <h3 className="impact-number">{item.number}</h3>
              <h4 className="impact-card-title">{item.title}</h4>
              <p className="impact-description">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default ImpactSection;