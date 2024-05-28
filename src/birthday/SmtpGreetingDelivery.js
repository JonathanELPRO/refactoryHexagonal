export class SmtpGreetingDelivery {
  constructor(SMTP_PORT, SMTP_URL, transport) {
    this.SMTP_PORT = SMTP_PORT;
    this.SMTP_URL = SMTP_URL;
    this.transport = transport;
  }

  sendGreetingToEmployee(employee) {
    const message = {
        host: this.SMTP_URL,
        port: this.SMTP_PORT,
        from: "sender@here.com",
        to: [employee.getEmail()],
        subject: "Happy Birthday!",
        text: `Happy Birthday, dear ${employee.getFirstName()}!`,
      };
      this.transport.sendMail(message);
  }

  
}
