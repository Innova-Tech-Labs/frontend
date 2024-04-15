#Schema
1. User Table
UserID: Integer - Uniquely identifies each user.
Username: String - The user's chosen username.
Email: String - The user's email address.
Password: String - Stored in encrypted form for security.

2. Item Table
ItemID: Integer - Unique identifier for each item.
Name: String - Name of the item.
Description: String - A brief description of the item.

3. Walk Table
WalkID: Integer - Unique identifier for each walk.
UserID: Integer (References User.UserID) - Links the walk to a specific user.
StartLocation: String - Starting coordinates of the walk.
EndLocation: String - Ending coordinates of the walk.
StartTime: DateTime - Start time of the walk.
EndTime: DateTime - End time of the walk.

4. Image Table
ImageID: Integer - Unique identifier for each image.
WalkID: Integer (References Walk.WalkID) - Connects the image to a specific walk.
ItemID: Integer (References Item.ItemID) - Indicates which item was photographed.
URL: String - URL where the image is stored.

5. WalkItems Table
WalkItemID: Integer - Unique identifier for each walk-item association.
WalkID: Integer (References Walk.WalkID) - Links to a specific walk.
ItemID: Integer (References Item.ItemID) - Links to a specific item.
Found: Boolean - Indicates whether the item was found during the walk.

Relationships
- User-Walk Relationship: One-to-Many (One user can initiate multiple walks, but each walk is associated with one user).
- Walk-Image Relationship: One-to-Many (Each walk can have multiple images, each image belongs to one walk).
- Item-Image Relationship: One-to-Many (An item can be photographed multiple times in different walks, but each image is of one specific item).
- Walk-WalkItems Relationship: One-to-Many (Each walk can include searching for multiple items).
- Item-WalkItems Relationship: One-to-Many (Items can be included in multiple walks through the WalkItems association, representing a many-to-many relationship facilitated by WalkItems).



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



