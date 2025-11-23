# SVCEMUN'26 Registration Form Setup Guide

## Google Form Creation Instructions

Follow these steps to create the registration form for SVCEMUN'26:

### 1. Create the Google Form

1. Go to [Google Forms](https://forms.google.com)
2. Click on "Blank" to create a new form
3. Title: **SVCEMUN'26 Registration**
4. Description: **Register for Sri Venkateswara College of Engineering Model United Nations 2026**

### 2. Form Questions (Required Fields)

Add the following questions in order:

#### Personal Information
1. **Full Name** (Short answer, Required)
2. **Email Address** (Short answer, Required, Email validation)
3. **Phone Number** (Short answer, Required)
4. **College/University Name** (Short answer, Required)
5. **Year of Study** (Multiple choice, Required)
   - First Year
   - Second Year
   - Third Year
   - Fourth Year
   - Postgraduate

#### MUN Experience
6. **Previous MUN Experience** (Multiple choice, Required)
   - This is my first MUN
   - 1-2 conferences
   - 3-5 conferences
   - 6+ conferences

7. **Committee Preferences** (Checkboxes, Required, Select up to 3)
   - UNSC (United Nations Security Council)
   - UNHRC (UN Human Rights Council)
   - DISEC (Disarmament & International Security)
   - UNODC (UN Office on Drugs and Crime)

8. **Country/Portfolio Preference** (Short answer, Optional)
   - "Please list 2-3 countries you'd prefer to represent"

#### Accommodation & Dietary Requirements
9. **Require Accommodation?** (Multiple choice, Required)
   - Yes (outstation delegate)
   - No (local delegate)

10. **Dietary Restrictions** (Multiple choice, Optional)
    - None
    - Vegetarian
    - Vegan
    - Other (please specify)

11. **Any Accessibility Requirements?** (Long answer, Optional)

#### Emergency Contact
12. **Emergency Contact Name** (Short answer, Required)
13. **Emergency Contact Number** (Short answer, Required)

#### Agreement
14. **Terms & Conditions** (Checkboxes, Required)
    - [ ] I have read and agree to the SVCEMUN'26 Code of Conduct
    - [ ] I understand the dress code requirements
    - [ ] I consent to being photographed/recorded during the event for promotional purposes

### 3. Form Settings

1. Click on **Settings** (gear icon)
2. **General Tab:**
   - ✓ Limit to 1 response
   - ✓ Collect email addresses
3. **Presentation Tab:**
   - Progress bar: ON
   - Shuffle question order: OFF
   - Confirmation message: "Thank you for registering! You will receive a confirmation email within 48 hours with your committee allocation and further details."
4. **Quizzes Tab:**
   - Leave as default (not a quiz)

### 4. Customize Theme

1. Click on **Customize theme** (palette icon)
2. **Header:** Upload SVCE MUN logo or use a maroon/gold banner
3. **Theme color:** #8B0000 (Maroon) or #B28241 (Gold)
4. **Background color:** White or light cream (#F5F5DC)
5. **Font style:** Choose a formal, readable font

### 5. Get the Form Link

1. Click **Send** button (top right)
2. Click the **Link** icon (</>)
3. ✓ Check "Shorten URL"
4. Copy the link
5. **Paste this link in the HTML file** at line 1545:

```html
<a href="YOUR_GOOGLE_FORM_LINK_HERE">
  <button class="register_btn">Register NOW!</button>
</a>
```

Replace `google.com` with your actual Google Form URL.

### 6. Set Up Response Notifications

1. In the form, click on **Responses** tab
2. Click on **More** (three dots)
3. Select **Get email notifications for new responses**
4. Also set up a Google Sheet:
   - Click the Google Sheets icon
   - Create a new spreadsheet: "SVCEMUN'26 Registrations"

### 7. Post-Form Actions

After creating the form:

1. **Test the form** - Submit a test response
2. **Share with team** - Give editing access to organizing committee
3. **Monitor responses** - Check the linked spreadsheet regularly
4. **Send confirmation emails** - Create an email template for confirmations

### 8. Optional: Form Add-ons

Consider these Google Forms add-ons:
- **Email Notifications** - Auto-send custom confirmation emails
- **Form Limiter** - Auto-close form after reaching capacity
- **FormRanger** - Advanced form logic and conditional questions

---

## Important Notes

- **Registration Deadline:** Set a clear deadline (e.g., 7 days before event)
- **Payment:** If there's a registration fee, add payment instructions in form description
- **Capacity:** SVCEMUN'26 capacity should be decided (e.g., 100-200 delegates)
- **Data Privacy:** Ensure GDPR/data protection compliance
- **Committee Allocation:** Responses should be reviewed within 48 hours

## Contact

For form-related queries:
- Email: sf@svce.ac.in
- Phone: [Add contact number]

---

**Last Updated:** November 2025
**Created for:** SVCEMUN'26 - January 2, 2026
