const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./reviews.js")
const default_link = "https://www.istockphoto.com/photo/young-adult-woman-relaxing-on-a-swing-in-a-tropical-paradise-gm1161389146-318225378?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fbeach&utm_medium=affiliate&utm_source=unsplash&utm_term=beach%3A%3A%3A";



const listingSchema = new Schema({
    title: {
        type: String,
    },
    description: String,
    image: {
        url: String,
        filename:String
    },
    price: Number,
    location: String,
    country: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        }
    ],
    owner: {
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    geometry: {
        type: {
          type: String, // Don't do `{ location: { type: String } }`
          enum: ['Point'], // 'location.type' must be 'Point'
          required: true
        },
        coordinates: {
          type: [Number],
          required: true
        }
      }

});

listingSchema.post("findOneAndDelete", async (listing) => {
    if(listing){
        await Review.deleteMany({_id : {$in :listing.reviews}});
    }
}); 

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;