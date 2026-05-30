export default function About() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-32 px-4 pb-24">
      <div className="w-full max-w-2xl flex flex-col items-stretch">
        
      {/* Header Section */}
      <h1 className="text-4xl font-semibold mb-8 text-gray-900 tracking-tight text-center md:text-left">About</h1>        
      {/* Bio & Profile Section Container */}
      <div className="w-full flex flex-col md:flex-row gap-8 items-center md:items-start mb-6">
        
        {/* Profile Image Square */}
        <div className="w-48 h-48 sm:w-56 sm:h-56 shrink-0 bg-gray-100 rounded-2xl overflow-hidden shadow-sm">
          <img 
            src="/headshot.jpg"
            alt="Dishita the Photographer" 
            className="w-full h-full object-cover"
          />
        </div>  

        {/* Bio Text Section */}
        <div className="text-gray-700 leading-relaxed space-y-4 text-center md:text-left pt-2 flex-grow">
          <p>
            Hello! My name is Dishita. I am a UCSC alumna now based in the Bay Area, CA. I've been taking photographs for the past 7 years. 
            I love shooting portraits, professional headshots, and events, but celebrating college graduates is my favorite. Last grad season, I took over 10,000 photos..
          </p>
          <p className="text-sm text-gray-500 italic">
            More portraits, events, street, and travel content coming on this site soon...
          </p>
        </div>

      </div>

        <hr className="w-full border-gray-200 mb-12" />

        {/* Pricing & Packages Section */}
        <div className="w-full space-y-12">
          
          {/* Quick Options */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2"> Quick Shoots</h2>
            <p className="text-sm text-gray-600 mb-4">
              Strictly <strong> 35 minutes</strong> at <strong> 1-2 on-campus </strong> locations near each another. I was recently a college student too, so I want to make it possible for as many people to get memorable photos as possible. But, please respect my time!!
 
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 bg-gray-50 p-4 rounded-xl">
              <li><span className="font-semibold text-gray-900">Quick Solo (1 person):</span> $65</li>
              <li><span className="font-semibold text-gray-900">Quick Duo (2 people):</span> $100</li>
              <li><span className="font-semibold text-gray-900">Quick Trio (3 people):</span> $150</li>
            </ul>
          </div>

          {/* Standard Options */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2"> Standard Packages</h2>
            <p className="text-sm text-gray-600 mb-4">
              More time, more locations, and a more relaxed pace.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 bg-gray-50 p-4 rounded-xl">
              <li><span className="font-semibold text-gray-900">Fun Solo (1 person):</span> 60 minutes — $150</li>
              <li><span className="font-semibold text-gray-900">Fun Duo (2 people):</span> 60 minutes — $200</li>
              <li><span className="font-semibold text-gray-900">Fun Trio (3 people):</span> 60 minutes — $250</li>
              <li><span className="font-semibold text-gray-900">Fun Squad (4+ people):</span> 90 minutes — $90 per person</li>
            </ul>
          </div>

          {/* Important Details */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Key Details</h2>
            <ul className="list-disc list-inside space-y-3 text-sm text-gray-600 pl-2">
              <li>
                Additional $15 per person for off-campus (let's chat about carpooling ?).
              </li>
              <li>
               You will receive photos within 2 weeks. The pricing includes both shoot time and post-processing time. I won't cap the # of photos. I'll share as many great photos as we can capture in our time slot.
              </li>
              <li>
                Payment accepted via Venmo, Zelle, or cash shortly after the session concludes.
              </li>
            </ul>
          </div>

          <hr className="w-full border-gray-200 my-8" />

          {/* Booking Section */}
          <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 text-center sm:text-left">
            <h2 className="text-xl font-bold text-indigo-900 mb-2">How to Book</h2>
            <p className="text-sm text-indigo-950 mb-4 leading-relaxed">
              My final available weekend to book in <span className="font-semibold">Santa Cruz, CA is June 5-7, 2026</span>. 
              Secure your spot using the Calendar link below, then follow up with an email to confirm.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center pt-2">
              <a 
                href="https://calendar.app.google/NwmtttSAdVUMFyV26" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-2.5 rounded-lg transition"
              >
                📅 Google Calendar - Book Your Time Slot
              </a>
              <p className="text-xs text-gray-500 max-w-xs sm:text-left text-center">
                After reserving, email me: <a href="mailto:dishitajhawar@gmail.com">dishitajhawar@gmail.com </a> 
                 with your preferred package, locations, and to double-confirm timings. Your shoot is officially confirmed once I reply. Thank you! 
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}