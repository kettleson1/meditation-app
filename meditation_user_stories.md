# Meditation User Stories

---

## 1. Login / Registration

### Registration
**Title:** As a user, I want to register by entering my username, email, and password so that I can create an account.

**Acceptance Criteria:**
1. Users can enter valid details and click “Sign Up.”
2. An error message is shown if any input is invalid or missing.

**Story Points:** 3

---

### Login
**Title:** As a user, I want to log in using my email and password so that I can access my account.

**Acceptance Criteria:**
1. Users can log in with correct credentials and are redirected to their dashboard.
2. An error message is displayed for incorrect credentials.

**Story Points:** 3

---

### Validation Feedback
**Title:** As a user, I want to receive feedback when I attempt to sign up or log in without entering details so that I can fix the errors.

**Acceptance Criteria:**
1. Error messages are displayed for missing fields on sign-up or login attempts.

**Story Points:** 2

---

### Local Storage
**Title:** As a user, I want my details to be stored in local storage so that my data persists between sessions.

**Acceptance Criteria:**
1. User details are saved in local storage after registration.
2. Login form uses stored data for authentication.

**Story Points:** 3

---

## 2. Homepage

### Personalized Greeting
**Title:** As a user, I want a personalized greeting with my name and a title so that I feel welcomed and encouraged to meditate.

**Acceptance Criteria:**
1. Display “Hello, [username]” followed by “Find your perfect meditation.”

**Story Points:** 2

---

### Popular Meditations
**Title:** As a user, I want to see popular meditation cards so that I can explore options based on my preferences.

**Acceptance Criteria:**
1. Display cards with images, titles, descriptions, and categories (e.g., calmness, relaxation).
2. Include durations such as 10 or 15 minutes.

**Story Points:** 3

---

### Featured Meditation
**Title:** As a user, I want a daily featured meditation so that I can quickly access a recommended session.

**Acceptance Criteria:**
1. Showcase one meditation in a dedicated section with image, title, category, and duration.

**Story Points:** 2

---

### Navigation Icons
**Title:** As a user, I want intuitive navigation icons so that I can easily move around the app.

**Acceptance Criteria:**
1. Display a logo in the top-left and a settings icon in the top-right corner.

**Story Points:** 2

---

## 3. Detailed Exercise Page

### About Section
**Title:** As a user, I want an “About” section for each exercise so that I can understand its benefits and purpose.

**Acceptance Criteria:**
1. Show a brief description of the meditation and its focus on stress reduction.

**Story Points:** 2

---

### Instructions Section
**Title:** As a user, I want an “Instructions” section for each exercise so that I can perform it correctly.

**Acceptance Criteria:**
1. Provide step-by-step guidance on posture and breathing techniques.

**Story Points:** 2

---

### Add to Favorites
**Title:** As a user, I want an “Add to Favorites” button so that I can easily save an exercise for future practice.

**Acceptance Criteria:**
1. Include a prominent button at the bottom of the detail page that toggles Add/Remove.

**Story Points:** 2

---

### Share & Back Navigation
**Title:** As a user, I want navigation icons for sharing and going back so that I can manage the exercise page easily.

**Acceptance Criteria:**
1. Display a share icon and a back icon at the top of the detail page.

**Story Points:** 1

---

## 4. Favorites Functionality

### Add to Favorites
**Title:** As a user, I want to add an item to my Favorites so that I can save activities for quick access later.

**Acceptance Criteria:**
1. Display a heart icon next to each item.
2. Tapping it adds the item and changes the icon and button text.

**Story Points:** 2

---

### Remove from Favorites
**Title:** As a user, I want to remove an item from my Favorites so that I can manage saved content.

**Acceptance Criteria:**
1. Filled heart icon and “Remove from Favorites” button shown for saved items.
2. Tapping removes the item and updates the icon/text.

**Story Points:** 2

---

### View My Favorites
**Title:** As a user, I want a “My Favorites” screen so that I can view and manage all my saved items in one place.

**Acceptance Criteria:**
1. Display a list of saved items with title, category, and duration.
2. Allow users to tap to view details or start the activity.

**Story Points:** 3

---

## 5. Daily Reminders

### Calendar Navigation
**Title:** As a user, I want to view the calendar for the current month and navigate between months so that I can select dates for reminders.

**Acceptance Criteria:**
1. Show all days of the current month.
2. Include arrows to move forward/backward between months.

**Story Points:** 2

---

### Select Date and Time
**Title:** As a user, I want to select a date and time for a reminder so that I can schedule it properly.

**Acceptance Criteria:**
1. Show “Selected Date: None” and default time.
2. Allow users to choose both values.

**Story Points:** 3

---

### Add Reminder
**Title:** As a user, I want to add a reminder after selecting a time so that I can schedule it for the future.

**Acceptance Criteria:**
1. Clicking “Add Reminder” saves the selection.

**Story Points:** 2

---

### Manage Reminders
**Title:** As a user, I want to see a list of all my reminders so that I can manage them easily.

**Acceptance Criteria:**
1. Display reminders with date/time.
2. Allow deletion via red “Delete” button.

**Story Points:** 2

---

## 6. Share Exercises

### Share Feature
**Title:** As a user, I want to easily share recommended exercises with friends or family so that I can help others discover helpful activities.

**Acceptance Criteria:**
1. Provide a share icon on the detail screen.
2. Allow sharing via social, email, or messaging apps.

**Story Points:** 2

---

## 7. Logout

### Logout Functionality
**Title:** As a user, I want a clear and visible logout button so that I can exit the app securely.

**Acceptance Criteria:**
1. Show a “Logout” button.
2. Tap logs user out, clears session, and returns to login screen.

**Story Points:** 2

---

## 8. Change Settings

### Theme Toggle
**Title:** As a user, I want to switch between light and dark themes so that I can reduce eye strain and personalize the app.

**Acceptance Criteria:**
1. Toggle in settings switches themes.
2. Theme changes instantly with no reload needed.

**Story Points:** 2