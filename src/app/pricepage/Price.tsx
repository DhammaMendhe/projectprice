export default function Price() {
  return (
    <div>
      <div className="maincontainer bg-gradient-to-br from-dark-500 via-voilet-400 to-black-300 ">
        <div className=" flex-col  items-center justify-center text-center px-2 py-5 ">
          <div className="pb-2">
            <h1 className="py-4 flex justify-center text-2xl font-semibold">
              Pricing
            </h1>
            <p className=" px-7 ">All AI Models for 27x less than what</p>
            <p> you would pay to access them all</p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <button className="border text-sm">btn</button>
            <h3> Billed yearly</h3>{" "}
          </div>
        </div>
        <div className="border grid grid-cols-1 p-2 md:grid-cols-3">
          {/* for Basic section */}

          <div className=" border m-2 mb-6 ">
            <div className="Basic px-3 py-6   ">
              <h1 className="text-xl font-bold"> Basic </h1>
              <h2 className="text-sm">$15/mo</h2>
            </div>
            <hr className="w-[350px] ml-6 sm:w-[550px]" />
            <div className="info  px-3 pt-6 pb-6 text-sm">
              <ul>
                <p className="p-1"> Advanced Queries | 500</p>
                <p className="p-1">Basic Queries | 1000</p>
                <p className="p-1">
                  Access to all Basic and Advanced AI Models
                </p>
                <p className="p-1">
                  AI Playground, AI Everywhere, Enhanced Search, Side panel
                </p>
              </ul>
            </div>
            <div className="info mb-6 border-r-0 md:mt-24 ">
              <button className="  bottom-1 border rounded-lg w-10/12 px-10 py-2 ml-6 text-sm font-medium shadow-lg sm:px-5">
                Claim you 7-day free trial
              </button>
            </div>
          </div>
          <div className=" border m-2 mb-6 ">
            {/* for pro section */}
            <div className="Pro px-3 py-6 ">
              <h1 className="text-xl font-bold"> Pro </h1>
              <h2 className="text-sm">$27/mo</h2>
            </div>
            <hr className="w-[350px] ml-6 sm:w-[550px]" />

            <div className="info  px-3 pt-6 pb-6 text-sm">
              <p className="p-1">Advanced Queries | 1000 *</p>
              <p className="p-1">Basic Queries | 3000 *</p>
              <p className="p-1">Access to all Basic and Advanced AI Models</p>
              <p className="p-1">
                AI Playground, AI Everywhere, Enhanced Search, Side panel
              </p>
              <p className="p-1">Support for larger chat inputs *</p>
              <p className="p-1">Priority Customer Supporton *</p>
            </div>
            <div className="info mb-6 border-r-0 md:mt-10 ">
              <button className=" border rounded-lg w-10/12 px-10 py-2 ml-6 text-sm font-medium shadow-lg sm:px-5">
                Claim you 7-day free trial
              </button>
            </div>
          </div>

          {/* for Business section */}

          <div className=" border m-2 mb-6 ">
            <div className="Business px-3 py-6">
              <h1 className="text-xl font-bold">Business</h1>
              <h2 className="text-sm">Minimum of 5 seats</h2>
            </div>
            <hr className="w-[350px] ml-6 sm:w-[550px]" />

            <div className="info  px-3 pt-6 pb-6 text-sm">
              {" "}
              <p className="p-1">Advanced Queries | Unlimted *</p>
              <p className="p-1">Basic Queries | Unlimited *</p>
              <p className="p-1">
                Manage team from dashboard (invite team, revoke access, etc.)
              </p>
              <p className="p-1">Monthly reports</p>
              <p className="p-1">Content suggestions</p>
              <p className="p-1">
                Enterprise-level security with SOC2, ISO, GDPR compliance
              </p>
              <p className="p-1">Multi-user access</p>
              <p className="p-1">API integration</p>
            </div>

            <div className="info mb-6 border-r-0  ">
              <button className=" border rounded-lg w-10/12 px-10 py-2 ml-6 text-sm font-medium shadow-lg hover:shadow-md sm:px-5">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
