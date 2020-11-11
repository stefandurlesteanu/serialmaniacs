const axios = require('axios');

const {
	GraphQLObjectType,
	GraphQLInt,
	GraphQLString,
	GraphQLList,
	GraphQLSchema
} = require('graphql');

//Shows
const ShowsType = new GraphQLObjectType({
	name: 'Shows',
	fields: () => ({
		id: { type: GraphQLInt },
		name: { type: GraphQLString },
		genres: { type: new GraphQLList(GraphQLString) },
		rating: { type: RatingType },
		image: { type: PictureSizeType }
	})
});

//Rating Type
const RatingType = new GraphQLObjectType({
	name: 'Rating',
	fields: () => ({
		average: { type: GraphQLString },
	})
});

//Size Type
const PictureSizeType = new GraphQLObjectType({
	name: 'PictureSize',
	fields: () => ({
		medium: { type: GraphQLString },
		original: { type: GraphQLString }
	})
});




//Root Query

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		shows: {
			type: new GraphQLList(ShowsType),
			resolve(parent, args) {
				return axios.get('http://api.tvmaze.com/shows')
					.then(res => res.data);
			}
		}
	}
});

module.exports = new GraphQLSchema({
	query: RootQuery
})