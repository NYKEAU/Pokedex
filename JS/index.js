async function getPokemons(i) {
    return fetch("https://pokeapi.co/api/v2/pokemon/"+i)
    .then(response => response.json())
    .then(data => data)
    .catch(function(error) {
    console.log("Erreur : " + error.message);
});
};

const showPokemons = (pokemon) => {
    displayPokemons(pokemon);
}

const main = async() => {
    for(let i=1; i<=50; i++)
    {
        const pokemon = await getPokemons(i);
        showPokemons(pokemon);
    };
}

const displayPokemons = (pokemon) => {
    let main = document.getElementById("main");
    main.innerHTML += `<article class="card">
                            <img class="img" src="${pokemon.sprites.front_default}" />
                            <span class="span">${upperCaseFirst(pokemon.name)}</span>
                            <article id="container">${getTypes(pokemon.types)}</article>
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
        html += `<span class="type">${type}</span>`
    }
    return html
}

main();