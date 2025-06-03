function getPastEvent() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const events = [
        { year: 1990, name: "World Wide Web Invented" },
        { year: 2001, name: "Wikipedia Launched" },
        { year: 1969, name: "Moon Landing" },
        { year: 2020, name: "Global Pandemic" },
        { year: 1989, name: "Fall of Berlin Wall" }
      ];
      const randomIndex = Math.floor(Math.random() * events.length);
      resolve(events[randomIndex]);
    }, Math.random() * 1000);
  });
}

async function travelThroughHistory() {
    
    const valori = [5, 10, 100, 1000];
    const N = valori[Math.floor(Math.random() * valori.length)];
    const promises = Array(N).fill().map(() => getPastEvent());
    const array = await Promise.all(promises);
    const eventi = array.filter((evento, i, eventi) =>
        i === eventi.findIndex(e => 
            e.year === evento.year && e.name === evento.name
        )
    );
    eventi.sort((a, b) => a.year - b.year);
    return eventi.filter(event => event.year < 2000);

}

console.log(travelThroughHistory().then(eventi => {
    eventi.forEach(eventi => {
        console.log(`${eventi.year}: ${eventi.name}`);
    });
}));