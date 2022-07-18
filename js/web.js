const sr = ScrollReveal({
    origin: "top",
    distance: "-80px",
    duration: 1500,
    reset: false,
  });

  sr.reveal(
    `
  .social-icons,.education, .heading
  `,
    {
      interval: 300,
    }
  );

  const sr2 = ScrollReveal({
    origin: "right",
    duration: 2000,
    distance: "50%",
  });
  
  sr2.reveal(
    `
      #rightani
      `
  );

  const sr3 = ScrollReveal({
    origin: "left",
    duration: 2000,
    
    distance: "50%",
  });
  
  sr3.reveal(
    `
      #leftani
      `
  );