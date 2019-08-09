// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const Airtable = require('airtable');

module.exports = function (api, opts) {

  const base = new Airtable({ apiKey: 'key8Gg8ivFTQ0Ji4N' }).base('appZe1cLGkbnfFUYb');

  api.loadSource(async store => {

    const contentType = store.addContentType({
      typeName: 'PokemonEntry',
      route: '/pokemon/:name',
    });

    await base('Pokemon').select().eachPage((records, fetchNextPage) => {
      records.forEach((record) => {
        const item = record._rawJson;

        // console.log(item);

        contentType.addNode({
          id: item.id,
          fields: {
            number: item.fields.number,
            name: item.fields.name,
            description: item.fields.description,
            type_1: item.fields.type_1,
            type_2: item.fields.type_2,
            evolution_1: item.fields.evolution_1,
            evolution_2: item.fields.evolution_2,
            evolution_3: item.fields.evolution_3,
            evolution_requirement: item.fields.evolution_requirement,
            hp: item.fields.hp,
            attack: item.fields.attack,
            defense: item.fields.defense,
            special_attack: item.fields.special_attack,
            special_defense: item.fields.special_defense,
            speed: item.fields.speed,
            image_sm: item.fields.image_sm,
            image_lg: item.fields.image_lg
          }
        });
      });

      fetchNextPage();
    });
  });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api
  })
}
