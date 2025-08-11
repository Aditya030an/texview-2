const PrivacyPolicy = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
        Privacy Policy
      </h1>

      {/* Privacy Policy Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          1. Privacy Policy – TaxView
        </h2>
        <p className="text-sm text-gray-500 mb-2">
          Effective Date: 10 August 2025
        </p>

        <p className="mb-4">
          Welcome to <strong>TaxView</strong> (“we,” “our,” “us”). We are
          committed to protecting your personal information and respecting your
          privacy. This Privacy Policy explains how we collect, use, disclose,
          and safeguard your information when you use our website
          <a
            href="https://www.taxview.in"
            className="text-blue-500 underline ml-1"
          >
            www.taxview.in
          </a>
          , mobile application, or our professional services.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">
          Information We Collect
        </h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Personal Information:</strong> Name, contact details,
            identity details (PAN, Aadhaar, GSTIN, etc.), address, billing
            details.
          </li>
          <li>
            <strong>Non-Personal Information:</strong> Browser type, IP address,
            device details, cookies, and analytics data.
          </li>
          <li>
            <strong>Financial & Compliance Data:</strong> Income details, bank
            account info, business documents, tax filings.
          </li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-2">
          How We Use Your Information
        </h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Providing tax, compliance, and advisory services.</li>
          <li>Responding to queries and support requests.</li>
          <li>Processing payments and generating invoices.</li>
          <li>Sending updates, reminders, and communications.</li>
          <li>Legal and regulatory compliance.</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-2">
          Sharing of Information
        </h3>
        <p>
          We do not sell or rent your personal information. We may share data
          with:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Government authorities (as required by law).</li>
          <li>Payment gateway providers.</li>
          <li>
            Auditors, associates, and service partners on a need-to-know basis.
          </li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-2">Data Security</h3>
        <p>
          We implement appropriate security measures to protect your data from
          unauthorized access, alteration, or disclosure.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">Cookies</h3>
        <p>
          We use cookies to enhance your browsing experience. You can manage
          cookie preferences in your browser settings.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">Your Rights</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Request a copy of your personal data.</li>
          <li>Correct or update your data.</li>
          <li>Request deletion of your data (subject to legal obligations).</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-2">Contact Us</h3>
        <p className="mb-2">
          📧{" "}
          <a href="mailto:info@taxview.in" className="text-blue-500">
            info@taxview.in
          </a>
        </p>
        <p className="mb-2">📞 +91 9867997206</p>
        <p>
          📍 Shop No. 26, First Floor, Kedy Shopping Centre, Jahangir Boman
          Behram Marg, Nagpada, Mumbai Central, Mumbai – 400 008, India
        </p>
      </section>

    </div>
  );
};

export default PrivacyPolicy;
