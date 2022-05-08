async function getPokemons(i) {
    return fetch("https://pokeapi.co/api/v2/pokemon/"+i)
    .then(response => response.json())
    .then(data => data)
    .catch(function(error) {
    console.log("Erreur : " + error.message);
});
};

const main = async() => {
    for(let i=1; i<=100; i++)
    {
        const pokemon = await getPokemons(i);
        displayPokemons(pokemon);
    };
}

const displayPokemons = (pokemon) => {
    let main = document.getElementById("main");
    main.innerHTML += `<article class="card">
                            <img class="img" src="${pokemon.sprites.front_default}" />
                            <span class="span">${upperCaseFirst(pokemon.name)}</span>
                            <article id="container">${getTypes(pokemon.types)}</article>
                            <span class="tooltip">
                                <span class="stats">Stats</span>
                                <span class="stats">Hp : ${pokemon.stats[0].base_stat}</span>
                                <span class="stats">Attack : ${pokemon.stats[1].base_stat}</span>
                                <span class="stats">Defense : ${pokemon.stats[2].base_stat}</span>
                                <span class="stats">Speed : ${pokemon.stats[3].base_stat}</span>
                                <span class="stats">Spe-Def : ${pokemon.stats[4].base_stat}</span>
                                <span class="stats">Spe-Att : ${pokemon.stats[5].base_stat}</span>
                            </span>
                        </article>`;
}

const upperCaseFirst = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
}

const getTypes = (types) => {
    let allTypes = [];
    for(let type of types)
    {
        allTypes.push(upperCaseFirst(type.type.name));
    }
    return generateSpans(allTypes);
}

function generateSpans(types) {
    let html = '';
    for(type of types) {
        html += `<span class="type ${type.toLowerCase()}">${type}</span>`
    }
    return html
}

main();