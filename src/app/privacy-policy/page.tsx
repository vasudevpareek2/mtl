import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a1a] to-[#0f0f23] text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#00f0ff] via-[#b22cff] to-[#ff4d8d] bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-300">Last updated: September 30, 2025</p>
        </div>

        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="mb-6">
              Welcome to Modern Tech Lab. We respect your privacy and are committed to protecting your personal data. 
              This privacy policy will inform you about how we look after your personal data when you visit our website 
              and tell you about your privacy rights and how the law protects you.
            </p>

            <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
            <p className="mb-4">We may collect, use, store, and transfer different kinds of personal data about you which we have grouped together as follows:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
              <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
              <li><strong>Usage Data</strong> includes information about how you use our website and services.</li>
              <li><strong>Marketing and Communications Data</strong> includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">3. How We Use Cookies</h2>
            <p className="mb-4">
              Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.
            </p>
            <p className="mb-6">
              A cookie is a small file of letters and numbers that we store on your browser or the hard drive of your computer. You can find more information about the types of cookies we use and the purposes for which we use them below:
            </p>

            <h3 className="text-xl font-semibold mb-2">Essential Cookies</h3>
            <p className="mb-4">These are cookies that are required for the operation of our website.</p>

            <h3 className="text-xl font-semibold mb-2">Analytical/Performance Cookies</h3>
            <p className="mb-4">
              These allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it. 
              This helps us to improve the way our website works, for example, by ensuring that users are finding what they are looking for easily.
            </p>

            <h3 className="text-xl font-semibold mb-2">Functionality Cookies</h3>
            <p className="mb-6">
              These are used to recognize you when you return to our website. This enables us to personalize our content for you, greet you by name, and remember your preferences.
            </p>

            <h2 className="text-2xl font-bold mb-4">4. Your Legal Rights</h2>
            <p className="mb-4">Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Request access to your personal data</li>
              <li>Request correction of your personal data</li>
              <li>Request erasure of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing your personal data</li>
              <li>Request transfer of your personal data</li>
              <li>Right to withdraw consent</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">5. Contact Us</h2>
            <p className="mb-2">If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
            <p className="mb-6">
              Email: <a href="mailto:privacy@moderntechlap.com" className="text-[#00f0ff] hover:underline">privacy@moderntechlap.com</a>
            </p>

            <div className="border-t border-white/10 pt-6 mt-8">
              <Link href="/" className="inline-flex items-center text-[#00f0ff] hover:underline">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
