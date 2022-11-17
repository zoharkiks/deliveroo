export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name:"name",
      type:'string',
      title:'Restaurant Name',
      validation:(Rule)=>Rule.required()
    },

    {
      name:"short_description",
      type:'string',
      title:'Short Description',
      validation:(Rule)=>Rule.max(200)
    },

    {
      name:"image",
      type:'image',
      title:'Image of The Restaurant',
    },
    {
      name:"lat",
      type:'number',
      title:'Latitude of The Restaurant',
    },
    {
      name:"long",
      type:'number',
      title:'Longitude of The Restaurant',
    },
    {
      name:"address",
      type:'string',
      title:'Restaurant Address',
      validation:(Rule)=>Rule.required()
    },

    {
      name:"rating",
      type:'number',
      title:'Enter a Rating from 1 and 5 Stars',
      validation:(Rule)=>Rule.required().min(1).max(5).error("Please Enter A Value Between 1 and 5")
    },

    {
      name:"type",
      type:'reference',
      to:[ {type:'category'}],
      title:'Category',
      validation:(Rule)=>Rule.required(),
    },
    {
      name:"dishes",
      type:'array',
      of:[ {type:'reference', to:[ {type:'dish'}]}],
      title:'Dishes',
      
    },
  ],

  
}
