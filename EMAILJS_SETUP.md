# EmailJS Setup Guide

The contact form is ready to use! Follow these steps to configure it:

## 1. Sign up for EmailJS

- Go to https://www.emailjs.com/
- Create a free account

## 2. Add an Email Service

- In the EmailJS dashboard, go to "Email Services"
- Click "Add New Service" (Gmail, Outlook, or any email provider)
- Connect your email account
- Copy your **Service ID**

## 3. Create an Email Template

- Go to "Email Templates"
- Click "Create New Template"
- Use these template variables:
  ```
  Subject: {{subject}}
  From: {{from_name}} ({{from_email}})
  Message: {{message}}
  ```
- Copy your **Template ID**

## 4. Get Your Public Key

- Go to "Account" → "API Keys"
- Copy your **Public Key**

## 5. Update .env.local

Replace the placeholders in `.env.local`:

```
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
```

## 6. Test the Form

- Run `npm run dev`
- Go to the "Get In Touch" section
- Fill out the form and submit
- Check your connected email inbox

## Form Fields

- **Name** (required)
- **Email** (required)
- **Subject** (optional)
- **Message** (required)

All emails will be sent to: gajjela.a@northeastern.edu
