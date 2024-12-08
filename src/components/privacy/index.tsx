import React from "react";
import styled from "styled-components";

const PrivacyPolicyWrapper = styled.div`
  padding: 2rem;
  margin: 2rem auto;
  max-width: 800px;
  font-family: "Arial", sans-serif;
  line-height: 1.6;
  color: #333;

  h1, h2 {
    text-align: center;
    margin-bottom: 1rem;
    color: #007BFF;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
    margin-top: 1.5rem;
  }

  p {
    margin-bottom: 1rem;
  }

  ul {
    margin: 1rem 0;
    padding-left: 1.5rem;

    li {
      margin-bottom: 0.5rem;
    }
  }

  a {
    color: #007BFF;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const PrivacyPolicy: React.FC = () => {
  return (
    <PrivacyPolicyWrapper>
      <h1>Privacy Policy</h1>
      <p><strong>Effective Date:</strong> [Insert Date]</p>

      <h2>1. Information We Collect</h2>
      <p>We may collect the following types of information:</p>
      <ul>
        <li><strong>Personal Information:</strong> Name, email address, phone number, or details provided through forms.</li>
        <li><strong>Usage Data:</strong> Information about website interaction, such as IP address and pages visited.</li>
        <li><strong>Cookies:</strong> Data files stored on your device to enhance your browsing experience.</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>We use your information to:</p>
      <ul>
        <li>Respond to inquiries and provide customer support.</li>
        <li>Deliver and improve our services.</li>
        <li>Send updates, newsletters, or promotional materials (with your consent).</li>
        <li>Analyze website usage for better user experience.</li>
      </ul>

      <h2>3. Sharing Your Information</h2>
      <p>We do not sell or share your information, except to:</p>
      <ul>
        <li>Comply with legal obligations.</li>
        <li>Protect our rights, users, or partners.</li>
        <li>Work with service providers who help deliver our services.</li>
      </ul>

      <h2>4. Data Security</h2>
      <p>We implement industry-standard security measures, but no method of transmission is 100% secure.</p>

      <h2>5. Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Access, update, or delete your personal information.</li>
        <li>Opt-out of receiving promotional communications.</li>
        <li>Disable cookies in your browser settings.</li>
      </ul>

      <h2>6. Third-Party Links</h2>
      <p>
        Our site may contain links to third-party websites. We are not responsible for their privacy practices. Please review their policies.
      </p>

      <h2>7. Updates to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Changes will be posted with the updated effective date.
      </p>

      <h2>8. Contact Us</h2>
      <p>If you have any questions, contact us at:</p>
      <ul>
        <li>Email: <a href="mailto:your-email@example.com">your-email@example.com</a></li>
        <li>Phone: [Insert Phone Number]</li>
      </ul>
    </PrivacyPolicyWrapper>
  );
};

export default PrivacyPolicy;
