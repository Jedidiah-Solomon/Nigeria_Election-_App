// Switch to the electionApp database
use("electionApp");

// Aggregate to count the total number of governors
const totalGovernors = db.parties
  .aggregate([
    {
      $group: {
        _id: null,
        totalGovernors: { $sum: "$elected_seats.governors" },
      },
    },
  ])
  .toArray();

// Print the result
totalGovernors;

// Aggregate to count the total number of chairperson
// const totalChairperson = db.parties
//   .aggregate([
//     {
//       $group: {
//         _id: null,
//         totalChairperson: { $sum: "$elected_seats.lga" },
//       },
//     },
//   ])
//   .toArray();

// // Print the result
// totalChairperson;

db.voters.find({
  firstName: "Olivia",
  email: "olivia.johnson@example.com",
  NIN: "234567890123456",
});
