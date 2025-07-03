import { CalendarDays, Target, Clock, CheckCircle, BarChart3, ArrowRight, ChevronDown } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                FocusFlow
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Your weekly and daily productivity companion. Plan intentionally, 
              execute focused, and reflect meaningfully.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 flex items-center gap-2 group">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-200">
                Learn More
              </button>
            </div>
          </div>
          
          {/* Animated scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-gray-400" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transform Your Productivity
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              FocusFlow guides you through a proven workflow system that helps you plan, 
              execute, and reflect on your goals with intention and clarity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Weekly Planning */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <CalendarDays className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 ml-4">Weekly Planning</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Start each week with intention. Set goals, choose focus areas, and define what success looks like for the upcoming week.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Set weekly goals and intentions</li>
                <li>• Select focus areas (Deep Work, Admin, Learning)</li>
                <li>• Plan key weekly tasks</li>
              </ul>
            </div>

            {/* Daily Planning */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-green-600 rounded-lg">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 ml-4">Daily Planning</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Begin each day with clarity. Review your weekly goals and select today&apos;s priorities with focused intention.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Review weekly goals</li>
                <li>• Select today&apos;s focus tasks</li>
                <li>• Set daily intention</li>
                <li>• Optional time-blocking</li>
              </ul>
            </div>

            {/* Task Logging */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl border border-purple-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-purple-600 rounded-lg">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 ml-4">Task Logging</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Track your activities throughout the day. Log tasks with time spent, categories, and notes for complete visibility.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Start/end time tracking</li>
                <li>• Categorize activities</li>
                <li>• Add context notes</li>
                <li>• Real-time progress view</li>
              </ul>
            </div>

            {/* Daily Review */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl border border-orange-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-orange-600 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 ml-4">Daily Review</h3>
              </div>
              <p className="text-gray-600 mb-4">
                End each day with reflection. Review accomplishments, identify blockers, and extract lessons for tomorrow.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Compare planned vs completed</li>
                <li>• Identify what was missed</li>
                <li>• Note lessons learned</li>
                <li>• Record blockers</li>
              </ul>
            </div>

            {/* Weekly Review */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl border border-teal-100 hover:shadow-lg transition-all duration-300 md:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-teal-600 rounded-lg">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 ml-4">Weekly Review</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Close each week with insights. Analyze your progress, time allocation, and plan improvements for the next week.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Goal completion summary</li>
                <li>• Time breakdown by category</li>
                <li>• Reflection prompts</li>
                <li>• Continuous improvement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Weekly Productivity Cycle
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              FocusFlow follows a proven cycle that builds momentum and creates sustainable productivity habits.
            </p>
          </div>

          <div className="relative">
            {/* Flow diagram */}
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-4">
              <div className="flex flex-col items-center text-center max-w-xs">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">1</div>
                <h3 className="font-semibold text-gray-900 mb-2">Plan Your Week</h3>
                <p className="text-sm text-gray-600">Set intentions and goals every Sunday</p>
              </div>
              
              <ArrowRight className="w-6 h-6 text-gray-400 rotate-90 lg:rotate-0" />
              
              <div className="flex flex-col items-center text-center max-w-xs">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">2</div>
                <h3 className="font-semibold text-gray-900 mb-2">Execute Daily</h3>
                <p className="text-sm text-gray-600">Plan, track, and review each day</p>
              </div>
              
              <ArrowRight className="w-6 h-6 text-gray-400 rotate-90 lg:rotate-0" />
              
              <div className="flex flex-col items-center text-center max-w-xs">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">3</div>
                <h3 className="font-semibold text-gray-900 mb-2">Reflect & Improve</h3>
                <p className="text-sm text-gray-600">Weekly review and planning for next cycle</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Productivity?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of focused individuals who have transformed their productivity with FocusFlow&apos;s proven planning and reflection system.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 flex items-center gap-2 mx-auto group">
            Start Your Free Trial
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">FocusFlow</h3>
            <p className="text-gray-400 mb-4">Your weekly and daily productivity companion</p>
            <p className="text-gray-500 text-sm">
              Built with Next.js, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
