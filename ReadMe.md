# Stories Hub

Stories Hub is a comprehensive self-publishing platform designed for authors to publish, manage, and market their eBooks and print books. This project replicates the core functionality and design of a modern publishing dashboard.

## Project Structure

### Core Dashboard
- **index.html**: **Bookshelf**. The central hub where authors view and manage their library of published titles and drafts. Features a list view of books with status indicators and quick actions.

### Publishing Workflow (Kindle eBook)
The eBook creation process is broken down into a multi-step wizard:
1.  **create-selection.html**: **Create Selection**. The entry point for creating new projects, allowing authors to choose between Kindle eBook, Paperback, Hardcover, or Series pages.
2.  **ebook-details.html**: **Step 1: Details**. A form for entering essential book metadata including language, title, author/contributors, description, and publishing rights.
3.  **ebookcontext.html**: **Step 2: Content**. The upload interface for the book manuscript and cover art. Includes drag-and-drop zones and file preview functionality.
4.  **ebook-pricing.html**: **Step 3: Pricing**. Configuration screen for selecting royalty plans (35% vs 70%), setting list prices, and enrolling in Stories Hub Select.

### Author Resources
-   **marketing.html**: **Marketing Dashboard**. Access to promotional tools such as Amazon Ads, Price Promotions, and Author Central management.
-   **community-forum.html**: **Community Forum**. A discussion board for authors to connect, asking questions about publishing and marketing.
-   **forum-topic.html**: **Thread View**. A detailed view of a single forum discussion, displaying posts, user profiles, and replies.
-   **help-center.html**: **Help Center**. A searchable support portal providing guides on formatting, royalties, and account management.
-   **university.html**: **Stories Hub University**. An educational center offering courses and webinars to help authors succeed in self-publishing.

### Assets & Utilities
-   **style.css**: The core stylesheet containing the design system. It defines CSS variables for the color palette (Primary Blue, Amazon Orange, etc.), typography (Inter font), and reusable utility classes.
-   **script.js**: Handles interactive elements such as file upload previews, drag-and-drop areas, and form validation logic.
-   **assets/**: Directory containing project images and logos.