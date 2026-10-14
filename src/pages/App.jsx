
import "../App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <section>
      
        <div className="header p-5 w-full flex flex-row justify-between items-center">
          <div className="left flex items-center">
            <img
              src="https://media.licdn.com/dms/image/v2/D5612AQH_wBNAqIO3Lw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1685507296579?e=2147483647&v=beta&t=zFLpkUROoe9YkiZI9ItntjlY--lM92X6_HhlfaZPS2U"
              alt="LinkedIn"
              className="h-20"
            />
          </div>

          <div className="right flex flex-row items-center gap-8">
            <div className="flex flex-row items-center gap-6 text-slate-500">
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-rocket"></i>
                <h3>Top Content</h3>
              </div>

              <h3>People</h3>
              <h3>Learning</h3>
              <h3>Job</h3>
              <h3>Games</h3>
              <h3>Get the app</h3>
            </div>

            <div className="flex flex-row gap-4">
              <Link
                to="/signin"
                className="border-2 border-indigo-600 rounded-2xl px-5 py-2"
              >
                Sign In
              </Link>

              <Link
                to="/signup"
                className="border-2 border-indigo-600 rounded-2xl bg-blue-700 text-white px-5 py-2"
              >
                Join Now
              </Link>
            </div>
          </div>
        </div>

        <div className="body_upper m-2 p-10 flex flex-row gap-10 items-center">
          <div className="left w-1/2 bg-white">
            <h1 className="tracking-wide text-4xl">
              Build your professional brand & network to get ahead in your
              career
            </h1>
          </div>

          <div className="right w-1/2 h-96">
            <img
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTCHl--5aWfQLCaDeiCNEwyffJagSwSSsl4x7v-m8T7oKXqVhp3"
              alt="Professional networking"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="body_middle bg-[#f7f6f3] px-24 py-16 flex flex-row gap-20">
          <div className="left w-1/3">
            <h1 className="text-4xl font-normal leading-tight">
              Find the right job or internship for you
            </h1>
          </div>

          <div className="right w-2/3">
            <div className="flex flex-wrap gap-3">
              <button className="border border-gray-700 rounded-full px-6 py-3">
                Engineering
              </button>

              <button className="border border-gray-700 rounded-full px-6 py-3">
                Business Development
              </button>

              <button className="border border-gray-700 rounded-full px-6 py-3">
                Finance
              </button>

              <button className="border border-gray-700 rounded-full px-6 py-3">
                Administrative Assistant
              </button>

              <button className="border border-gray-700 rounded-full px-6 py-3">
                Retail Associate
              </button>

              <button className="border border-gray-700 rounded-full px-6 py-3">
                Customer Service
              </button>

              <button className="border border-gray-700 rounded-full px-6 py-3">
                Operations
              </button>

              <button className="border border-gray-700 rounded-full px-6 py-3">
                Information Technology
              </button>

              <button className="border border-gray-700 rounded-full px-6 py-3">
                Marketing
              </button>

              <button className="border border-gray-700 rounded-full px-6 py-3">
                Human Resources
              </button>
            </div>

            <button className="mt-5 border border-gray-700 rounded-full px-5 py-3">
              Show more ↓
            </button>
          </div>
        </div>


        <div className="post_job bg-[#f1ede6] py-20 text-center">
          <h1 className="text-3xl text-[#b74727] mb-8">
            Post your job for millions of people to see
          </h1>

          <button className="border-2 border-blue-600 text-blue-600 rounded-full px-7 py-3 hover:bg-blue-50">
            Post a job
          </button>
        </div>

        <div className="h-96 bg-white flex items-center justify-center">
          <h1 className="text-4xl">More LinkedIn Content</h1>
        </div>
      </section>
    </>
  );
}

export default App;
