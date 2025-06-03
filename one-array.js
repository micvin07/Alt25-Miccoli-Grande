// Ordinare i codici fiscali in ordine alfabetico
// Suddividere l'array padre in n (iniziale)
const cf = [
    "RSSMRA85M01H501Z",
    "BNCLRD90A22F205X",
    "VRDLNZ75B12D612Y",
    "FRNGPP80C11L219W",
    "MNLGLD70D15H501Z",
    "BRRMLT85E01F205X",
    "CNRMRA88F22G219Y",
    "PZZLNN90G18D612W",
    "TSTMRA78H15L219Z",
    "VLDLND85J21F205X",
    "SGRLNZ70K01G612Y",
    "RCCMRA65L11H219W",
    "BLZNDR80M22F219Z",
    "MRTGPP75N12D205X",
    "DNLFRA90P11G501Y",
    "CRLVND88Q21H219W",
    "PPLMRA70R15F612Z",
    "LZZMRA85S01D205X",
    "FRNGPP75T22G501Y",
    "MNLGPP90U18H219W",
    "BRTGPP80V11F219Z",
    "CNRLNZ85W21D205X",
    "VRDLND75X15G501Y",
    "SGRMRA90Y01H219W",
    "RSSMRN80Z12F612Z"
];

// stampa array originale
console.log(cf);

// 1 - Ordinamento dell'array in ordine alfabetico e stampa
cf.sort();
console.log(cf);

// 2 - Suddivisione dell'array in n parti e stampa
let cfDivisi = {};
cf.filter(cfs => {
    let iniziale = cfs.charAt(0);
    if (!cfDivisi[iniziale]) {
        cfDivisi[iniziale] = [];
        cfDivisi[iniziale].push(cfs);
    } else
        cfDivisi[iniziale].push(cfs);
})
console.log(cfDivisi);