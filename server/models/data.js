const mongoose = require("mongoose");
const mapSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  id: {
    type: Number,
  },
  description:{
    type: String,
  },
  imgUrl: {
    type: String
  }
}, {
  timestamps: true
});
let Data = mongoose.model("data", mapSchema);
module.exports = {Data};


//Change schema to this:
//Correct Schema I think:

//Every address has its own default percent, and an array of referralCode objects, then we also have a collection of referralcodes that stores the address and percent they have.
// first schema 
// Address {
//     address: 0xihjedsf...
//     defaultPercent: 50,
//     referralCodes: [
//         {
//             code: referralCode1,
//             percent: 25
//         },
//         {
//             code: referralCode2,
//             percent: 30
//         },
//         {
//             code: referralCode3,
//             percent: 35
//         },
//         {
//             code: referralCode4,
//             percent: 40
//         },

//     ]
// second schema
// }
// referralCodes { 
// referralcode1 {
//     address: 0xihjedsf,
//     percent: 45
// }, 
// referralcode2{
//     address: 0xihjedsf,
//     percent: 45
// },

// }


// Need to have a better data structure I believe but I dont know how mongo db works.
// We are building a referral system/affiliate system so people can refer their friends but have more then 1 referral code (refCode). The referrals will be linked to the persons address (address)

// So someone will be able to type in the persons referral code (refCode) then it will give them a discount (percent)

// If someone types in the referral code or address then I need to be able to pull up their percent.

// On the backend as a dashboard I need to be able to see what referral codes (refCode) belong to what addresses (address).

// For example:

// Hema has 1 address but wants to offer 2 discounts to his friends and family.

// The FamilyCode gives a 50% dicount and the friend code only gives 25% discount.

// I need to be able to show on the dashboard which codes belong to Hema.

// So in the end on his dash board it will show:

// Hema's Address: 0x79982770C0145bF9a00ab1B90c64388Cf86606bD

// Hemas referral Codes:

// FamilyCode: 50
// FriendCode: 20
// ...

// Our current method is not scalable. You would have to filter through the entire database. which can get very large!
