const emailTemplate = ({ userName, appLink, supportEmail }) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Welcome to Chatify</title>
    <style>
      body {
        margin: 0;
        padding: 0;
        background-color: #f4f6f8;
        font-family: Arial, Helvetica, sans-serif;
      }
      .container {
        max-width: 600px;
        margin: 40px auto;
        background: #ffffff;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      }
      .header {
        background: #4f46e5;
        color: #ffffff;
        text-align: center;
        padding: 20px;
        font-size: 24px;
        font-weight: bold;
      }
      .content {
        padding: 30px;
        color: #333333;
        line-height: 1.6;
      }
      .content h2 {
        margin-top: 0;
        color: #111827;
      }
      .button {
        display: inline-block;
        margin: 20px 0;
        padding: 12px 24px;
        background: #4f46e5;
        color: #ffffff !important;
        text-decoration: none;
        border-radius: 6px;
        font-weight: bold;
      }
      .footer {
        background: #f9fafb;
        text-align: center;
        padding: 15px;
        font-size: 12px;
        color: #6b7280;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        Chatify 💬
      </div>

      <div class="content">
        <h2>Welcome, ${userName} 🎉</h2>

        <p>
          Thanks for joining <strong>Chatify</strong>! We’re excited to have you.
        </p>

        <p>
          Chatify lets you connect instantly, chat securely, and share moments
          with the people who matter most.
        </p>

        <a href="${appLink}" class="button">Open Chatify</a>

        <p>
          If you have any questions or feedback, just reply to this email —
          we’d love to hear from you.
        </p>

        <p>
          Happy chatting! 😊<br />
          <strong>Team Chatify</strong>
        </p>
      </div>

      <div class="footer">
        © 2026 Chatify. All rights reserved.<br />
        Support: ${supportEmail}
      </div>
    </div>
  </body>
  </html>
  `;
};

export default emailTemplate;
