"use client"
import Script from "next/script"
import { useEffect } from "react"
import { Phone, Clock, Shield, CheckCircle, Calendar, Moon, Zap, PhoneCall } from "lucide-react"

function Disclaimer() {
  return (
    <div
      className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-xs text-amber-800 leading-relaxed"
      aria-label="Disclaimer"
    >
      <div className="flex items-start gap-3">
        <div className="w-4 h-4 rounded-full bg-amber-400 flex items-center justify-center mt-0.5 flex-shrink-0">
          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
        </div>
        <div>
          <p className="font-medium mb-1">Demo Setup Information : </p>
          <p className="opacity-90">
            This virtual assistant is designed for demo purposes and is tailored specifically for an out of network clinic - BrightSmile Dental Clinic,
            located at 123 Main Street, New York, NY. It provides information related to appointments and services offered
            at this location only. Doctor availability is as follows: <strong>Dr. Smith</strong> (Monday & Thursday),{" "}
            <strong>Dr. Daniels</strong> (Wednesday), <strong>Dr. Kim</strong> (Saturday), and <strong>Dr. Rivera</strong> (Sunday).
          </p>
        </div>
      </div>
    </div>
  );
}


export default function HomePage() {
  // Add custom styling to the ConvAI widget when it loads
  useEffect(() => {
    const styleConvaiWidget = () => {
      const widgetInterval = setInterval(() => {
        const widgetContainer = document.querySelector("elevenlabs-convai")
        if (widgetContainer) {
          widgetContainer.setAttribute("style", "position: static; margin-top: 2rem;")
          clearInterval(widgetInterval)
        }
      }, 100)
      return () => clearInterval(widgetInterval)
    }

    const timer = setTimeout(styleConvaiWidget, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <header className="w-full py-8 px-4 md:px-8 bg-white/90 backdrop-blur-md border-b border-slate-200/50 sticky top-0 z-50">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent tracking-tight">
              Zenfru
            </h1>
            <div className="hidden sm:flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-indigo-100 px-3 py-1 rounded-full">
              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-semibold text-purple-700">AI-POWERED</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 bg-green-50 px-3 py-2 rounded-full border border-green-200">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-green-700 font-semibold">24/7 Active</span>
            </div>
            <div className="flex items-center space-x-2 bg-blue-50 px-3 py-2 rounded-full border border-blue-200">
              <Shield className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-blue-700 font-semibold">HIPAA Secure</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
                  <Moon className="w-4 h-4" />
                  <span>After-Hours Reception</span>
                </div>

                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[0.9] tracking-tight">
                  Never Miss Another
                  <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent block">
                    Patient Call
                  </span>
                  <span className="text-3xl md:text-4xl lg:text-5xl text-slate-500 font-medium block mt-4">
                    When You're Closed
                  </span>
                </h2>

                <p className="text-xl text-slate-600 leading-relaxed">
                  Your AI receptionist works 24/7 to book appointments, handle rescheduling, confirm visits, and answer
                  patient questions - even when your dental office is closed.
                </p>
              </div>

              {/* Features */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-slate-200">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-slate-900 font-medium">Smart Scheduling</div>
                    <div className="text-sm text-slate-600">Book & reschedule instantly</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-slate-200">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <PhoneCall className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-slate-900 font-medium">Call Confirmations</div>
                    <div className="text-sm text-slate-600">Automated reminders</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-slate-200">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-slate-900 font-medium">HIPAA Secure</div>
                    <div className="text-sm text-slate-600">Patient data protected</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-slate-200">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-slate-900 font-medium">Instant Responses</div>
                    <div className="text-sm text-slate-600">No waiting, no voicemail</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - AI Agent */}
            <div className="relative">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-slate-200/50 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-100 via-indigo-100 to-transparent rounded-full -translate-y-20 translate-x-20 opacity-60"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-100 to-transparent rounded-full translate-y-16 -translate-x-16 opacity-40"></div>

                <div className="relative">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold mb-4 border border-green-200">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>Live AI Demo</span>
                    </div>
                    <h3 className="text-3xl font-black text-slate-900 mb-3 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                      Try Our AI Receptionist
                    </h3>
                    <p className="text-slate-600 font-medium">
                      Experience how patients interact with your after-hours assistant
                    </p>
                  </div>

                  {/* Disclaimer */}
                  <Disclaimer />

                  {/* AI Agent Widget */}
                  <div className="flex justify-center mb-12 p-4 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200">
                    <elevenlabs-convai agent-id="agent_01jxg2af2rfvtvwj55smz5w740"></elevenlabs-convai>
                  </div>

                  {/* Sample Conversation Examples */}
                  <div className="space-y-4">
                    <div className="text-sm text-slate-500 font-bold uppercase tracking-wide">
                      Common After-Hours Requests:
                    </div>
                    <div className="space-y-3">
                      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-4 border-l-4 border-purple-500 hover:shadow-md transition-shadow">
                        <div className="text-sm font-bold text-slate-800">
                          "I need to book a cleaning for next week"
                        </div>
                        <div className="text-xs text-slate-600 mt-1 font-medium">
                          → Checks availability & books instantly
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 border-l-4 border-blue-500 hover:shadow-md transition-shadow">
                        <div className="text-sm font-bold text-slate-800">
                          "Can I reschedule my appointment tomorrow?"
                        </div>
                        <div className="text-xs text-slate-600 mt-1 font-medium">
                          → Finds new slot & confirms change
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-4 border-l-4 border-emerald-500 hover:shadow-md transition-shadow">
                        <div className="text-sm font-bold text-slate-800">
                          "What are your office hours and location?"
                        </div>
                        <div className="text-xs text-slate-600 mt-1 font-medium">→ Provides accurate practice info</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How Zenfru Works After Hours</h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Seamlessly handle patient calls when your office is closed
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto relative">
                <Phone className="w-8 h-8 text-purple-600" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  1
                </div>
              </div>
              <h4 className="text-lg font-semibold text-slate-900">Patient Calls</h4>
              <p className="text-slate-600 text-sm">After-hours call comes in to your practice</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto relative">
                <Zap className="w-8 h-8 text-purple-600" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  2
                </div>
              </div>
              <h4 className="text-lg font-semibold text-slate-900">AI Answers</h4>
              <p className="text-slate-600 text-sm">Zenfru picks up instantly with natural conversation</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto relative">
                <Calendar className="w-8 h-8 text-purple-600" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  3
                </div>
              </div>
              <h4 className="text-lg font-semibold text-slate-900">Books Appointment</h4>
              <p className="text-slate-600 text-sm">Checks your calendar and schedules available slots</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto relative">
                <CheckCircle className="w-8 h-8 text-purple-600" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  4
                </div>
              </div>
              <h4 className="text-lg font-semibold text-slate-900">Confirms & Notifies</h4>
              <p className="text-slate-600 text-sm">Sends confirmation to patient and updates your system</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Stop Losing Patients to Voicemail</h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Turn after-hours calls into confirmed appointments automatically
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 text-center space-y-4">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                <Clock className="w-8 h-8 text-red-600" />
              </div>
              <h4 className="text-xl font-semibold text-slate-900">Capture Every Call</h4>
              <p className="text-slate-600">
                Instead of Voicemail, our agent will handle calls when you are not in office.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Calendar className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-slate-900">Instant Scheduling</h4>
              <p className="text-slate-600">
                Book appointments immediately while patients are motivated, not days later.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 text-center space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold text-slate-900">Professional & Secure</h4>
              <p className="text-slate-600">
                HIPAA compliant with natural conversations that represent your practice perfectly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-8 md:py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-8 space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <h3 className="text-lg md:text-xl lg:text-2xl font-medium leading-tight">
                Never miss another patient call when your office is closed
              </h3>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
            <div className="text-center md:text-left">
              <h4 className="text-base md:text-lg font-medium mb-3">Get in Touch</h4>
              <p className="mb-3 md:mb-4 text-sm md:text-base">info@zenfru.com</p>
              <div className="text-xs md:text-sm opacity-90">
                <p>2025 Kay Eye Technologies</p>
                <p>All rights reserved</p>
              </div>
            </div>

            <div className="flex flex-col space-y-2 text-center md:text-right">
              <a href="#" className="hover:text-purple-200 transition-colors text-sm md:text-base">
                Terms of Service
              </a>
              <a href="#" className="hover:text-purple-200 transition-colors text-sm md:text-base">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-purple-200 transition-colors text-sm md:text-base">
                Support
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Load ElevenLabs ConvAI Script */}
      <Script src="https://elevenlabs.io/convai-widget/legacy.js" strategy="afterInteractive" async />
    </div>
  )
}
