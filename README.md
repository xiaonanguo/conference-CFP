# Conference Deadlines & Locations

A modern, responsive webpage to track conference submission deadlines and locations.

## Data currency

Conference information was last verified against official conference or sponsoring-society sources on **August 24, 2026**. The newest officially announced edition is used for each conference. When a future edition or its CFP has not been published, the latest available official edition remains listed; unannounced dates stay marked as TBA rather than being estimated.

## Features

- 📅 View conference submission deadlines
- 📍 See conference locations
- 🔍 Search conferences by name, location, or field
- 🔄 Sort by deadline, name, or location
- 🎯 Filter by status (upcoming/past)
- ⚠️ Visual indicators for urgent deadlines (within 7 days)
- 📱 Fully responsive design

## Usage

1. Open `index.html` in your web browser
2. Browse the list of conferences
3. Use the search bar to find specific conferences
4. Sort and filter as needed

## Customization

To add or modify conferences, edit the `conferences.js` file. Each conference object can have:

- `name`: Conference name
- `field`: Research field/area
- `submissionDeadline`: Full-paper submission deadline (YYYY-MM-DD)
- `abstractDeadline`: Optional abstract-registration deadline (YYYY-MM-DD)
- `registrationDeadline`: Optional attendee-registration deadline (YYYY-MM-DD)
- `location`: Conference location
- `conferenceDate`: Conference start date (YYYY-MM-DD), or `null` if not announced
- `conferenceDateText`: Optional display text when only a month or partial date is known
- `website`: Official conference website URL
- `cfpLink`: Official call-for-papers URL

Update `conferenceDataLastVerified` whenever the conference data is rechecked.

## Files

- `index.html` - Main HTML structure
- `styles.css` - Styling and layout
- `script.js` - JavaScript functionality
- `conferences.js` - Conference data
