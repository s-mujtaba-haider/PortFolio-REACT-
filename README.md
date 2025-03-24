1. Data Entry Page
 Purpose:
All the content displayed in the portfolio must be provided by the user on a preceding page.
 Features:
o Input fields to capture all necessary data including:
 Student’s name, bio, and other introductory details.
 About Me information (profile picture, skills, interests, and detailed
description).
 Project details (title, description, image, GitHub link for each project).
 Social media links where each link includes a “Name” and “URL”.
o An "Add Social Media" button that allows the user to add multiple social media entries.
o A "Submit/Generate" button that, when pressed, generates the portfolio page using the
entered data.

2. Navigation Bar (Navbar Component)
 Features:
o A responsive navigation bar that adjusts to different screen sizes.
o Contains links to major sections of the page (e.g., Home, About, Projects, Contact).
o Implements a hamburger menu or dropdown for mobile views using useState to
toggle its visibility.

3. Hero Section
 Features:
o A welcoming section displaying the student’s name, a short bio, and a call-to-action
button (e.g., "View My Work" or "Contact Me").
o Receives dynamic data (name and description) via props.

4. About Me Section
 Features:
o A section detailing personal information, skills, and interests.
o Customizable using props to pass in:
 Profile picture.
 List of skills.
 Short description or extended biography.

5. Projects Section
 Features:
o Displays at least 3 projects using a ProjectCard component.
o Each ProjectCard should receive as props:
 Project title.
 Description.
 Image.
 GitHub link.
o The projects data should be stored in an array in the parent component and mapped
over to render multiple ProjectCard components.
o Draggable Cards:
 The project cards should be draggable, enabling users to rearrange them (move

up, down, etc.). External libraries (e.g., react-draggable or react-
beautiful-dnd) can be used to implement this functionality.

o Dynamic Data Fetching:
 It is mandatory to fetch project data dynamically (e.g., from a drive or GitHub).
 Use useEffect to retrieve this data and update the Projects section
automatically as changes occur.

6. Contact Section
 Features:
o A contact form with input fields for name, email, and message.
o Utilizes useState to manage the form’s input values.
o Uses useEffect to display a success message upon successful form submission.
o Search google for linking a form with your website.

7. Footer

 Features:
o A simple footer that includes social media links (e.g., LinkedIn, GitHub, Twitter).

8. Extra Features
8.1 Dark Mode Toggle
 Features:
o Implement a button using useState that toggles between light and dark themes.

8.2 Dynamic Data Fetching for Projects
 Features:
o Mandatory dynamic fetching of project data.
o Data can be fetched from external sources such as Google Drive or GitHub.
o Utilize useEffect to fetch and update the Projects section as changes occur.

8.3 Animated Elements
 Features:
o Enhance user experience by integrating CSS animations or a library such as Framer
Motion for smooth transitions and interactive feedback.
