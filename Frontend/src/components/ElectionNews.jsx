import React, { useState } from "react";
import { FaCalendar, FaVoteYea, FaPoll } from "react-icons/fa";
import tinubuImg from "../assets/img/tinubu.png";

const AccordionItem = ({ title, children, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full text-left py-3 px-4 text-lg sm:text-md md:text-xl lg:text-2xl font-semibold text-gray-800 bg-gray-50 hover:bg-gray-100"
        onClick={onClick}
      >
        {title}
      </button>
      {isOpen && <div className="p-4 bg-gray-50 text-gray-700">{children}</div>}
    </div>
  );
};

const ElectionNews = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Introduction Section */}
        <section className="p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Introduction
          </h1>
          <p className="text-gray-700 mb-4">
            The Nigeria Elections 2024 will be a landmark event, featuring both
            presidential and governorship elections. This is a crucial moment
            for the country's democratic process.
          </p>
        </section>

        {/* President's Speech Section */}
        <section className="p-6 border-t border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            President's Speech
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="text-gray-700 px-1 py-1 md:px-3 md:py-2 ">
              <p className="mb-4  md:leading-relaxed text-justify">
                Dear fellow citizens, as we approach this pivotal election, I
                want to commend all voters for your engagement and commitment to
                our democratic process. Your participation is crucial in shaping
                the future of our nation. Please come out in mass to vote
                rightly and responsibly. Let’s ensure that every vote counts and
                that we choose leaders who will serve our country with integrity
                and dedication. Remember, our conscience is our guiding
                light—never sell it for any reason. Together, we can build a
                better Nigeria for all.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <img
                src={tinubuImg}
                alt="President Tinubu"
                className="w-full max-w-sm h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gray-50 p-6 border-t border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Stats</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
              <FaPoll className="text-blue-500 text-3xl mr-3" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Political Parties
                </h3>
                <p className="text-gray-600">10</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
              <FaVoteYea className="text-green-500 text-3xl mr-3" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Voters Registered
                </h3>
                <p className="text-gray-600">93,469,008</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
              <FaCalendar className="text-red-500 text-3xl mr-3" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Polling Units
                </h3>
                <p className="text-gray-600">176,846</p>
              </div>
            </div>
          </div>
        </section>

        {/* Election Day Accordion Section */}
        <section className="p-6 border-t border-gray-200">
          <h2 className=" text-xl md:text-2xl font-semibold text-gray-800 mb-4">
            What Happens on Election Day?
          </h2>
          <AccordionItem
            title="1. What are the polling unit hours?"
            isOpen={openIndex === 0}
            onClick={() => handleAccordionClick(0)}
          >
            <p>
              On each Election Day, polling stations will open for Accreditation
              and Voting from 8:00am to 2:00pm. However, voters on the queue
              before the close of poll at 2:00pm will be accredited and allowed
              to vote.
              <br />
              <span className="font-bold">IMPORTANT:</span> No person will be
              allowed to vote at a polling unit other than the one where he/she
              registered and got accredited.
            </p>
          </AccordionItem>
          <AccordionItem
            title="2. Eligibility criteria for voting"
            isOpen={openIndex === 1}
            onClick={() => handleAccordionClick(1)}
          >
            <p>
              To vote in the elections, one must:
              <ul className="list-disc pl-5">
                <li className="mb-2">Be a Nigerian citizen.</li>
                <li className="mb-2">Be 18 years and above.</li>
                <li className="mb-2">Possess a Permanent Voter Card (PVC).</li>
                <li>
                  Be in the Register of Voters where he/she is assigned to vote.
                </li>
              </ul>
              <br />
              <span className="font-bold">Remember:</span> Voters who do not
              possess PVC will not be accredited and, consequently, will not be
              able to vote.
            </p>
          </AccordionItem>
          <AccordionItem
            title="3. How do I report vote buying and other election malpractices?"
            isOpen={openIndex === 2}
            onClick={() => handleAccordionClick(2)}
          >
            <p>
              Report election offences to the INEC situation room on election
              day. The number to reach the situation room will be communicated
              to the public before the election day.
              <br />
              You can also download the myINEC App from the Google Play Store to
              report incidents to the Commission.
            </p>
          </AccordionItem>
        </section>
      </div>
    </div>
  );
};

export default ElectionNews;
