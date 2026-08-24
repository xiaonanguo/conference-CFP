// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderConferences(conferences);

    const verifiedElement = document.getElementById('dataVerified');
    if (verifiedElement && typeof conferenceDataLastVerified !== 'undefined') {
        const verifiedDate = new Date(conferenceDataLastVerified + 'T00:00:00');
        verifiedElement.textContent = 'Conference information last verified: ' + verifiedDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
    
    // Add event listeners
    document.getElementById('searchInput').addEventListener('input', handleFilter);
    document.getElementById('sortSelect').addEventListener('change', handleFilter);
    document.getElementById('statusFilter').addEventListener('change', handleFilter);
});

function renderConferences(conferencesToRender) {
    const container = document.getElementById('conferenceList');
    const emptyState = document.getElementById('emptyState');
    
    if (conferencesToRender.length === 0) {
        container.innerHTML = '';
        emptyState.style.display = 'block';
        return;
    }
    
    emptyState.style.display = 'none';
    container.innerHTML = conferencesToRender.map(conference => createConferenceCard(conference)).join('');
}

function createConferenceCard(conference) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Calculate urgency based on submission deadline (primary deadline)
    let submissionDeadlineDate = null;
    let submissionDeadlineClass = 'future';
    let submissionUrgencyText = '';
    let cardClass = '';
    
    if (conference.submissionDeadline) {
        submissionDeadlineDate = new Date(conference.submissionDeadline);
        const daysUntilDeadline = Math.ceil((submissionDeadlineDate - today) / (1000 * 60 * 60 * 24));
        
        if (daysUntilDeadline < 0) {
            submissionDeadlineClass = 'past';
            cardClass = 'past';
            submissionUrgencyText = 'Past Deadline';
        } else if (daysUntilDeadline <= 7) {
            submissionDeadlineClass = 'urgent';
            cardClass = 'urgent';
            submissionUrgencyText = `${daysUntilDeadline} day${daysUntilDeadline !== 1 ? 's' : ''} left!`;
        } else if (daysUntilDeadline <= 30) {
            submissionDeadlineClass = 'upcoming';
            submissionUrgencyText = `${daysUntilDeadline} days left`;
        } else {
            submissionUrgencyText = `${daysUntilDeadline} days left`;
        }
    }
    
    // Format abstract deadline (if exists)
    let abstractDeadlineHTML = '';
    if (conference.abstractDeadline) {
        const abstractDeadlineDate = new Date(conference.abstractDeadline);
        const formattedAbstractDeadline = abstractDeadlineDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        const daysUntilAbstract = Math.ceil((abstractDeadlineDate - today) / (1000 * 60 * 60 * 24));
        let abstractDeadlineClass = 'future';
        if (daysUntilAbstract < 0) {
            abstractDeadlineClass = 'past';
        } else if (daysUntilAbstract <= 7) {
            abstractDeadlineClass = 'urgent';
        } else if (daysUntilAbstract <= 30) {
            abstractDeadlineClass = 'upcoming';
        }
        abstractDeadlineHTML = `
            <div class="info-item">
                <span class="info-icon">📋</span>
                <span class="info-label">Abstract:</span>
                <span class="info-value deadline ${abstractDeadlineClass}">
                    ${formattedAbstractDeadline}
                </span>
            </div>
        `;
    }
    
    // Format submission deadline
    let submissionDeadlineHTML = '';
    if (conference.submissionDeadline) {
        const formattedSubmissionDeadline = submissionDeadlineDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        submissionDeadlineHTML = `
            <div class="info-item">
                <span class="info-icon">📝</span>
                <span class="info-label">Submission:</span>
                <span class="info-value deadline ${submissionDeadlineClass}">
                    ${formattedSubmissionDeadline}
                    ${submissionUrgencyText ? `<span style="margin-left: 6px; font-size: 0.75rem;">(${submissionUrgencyText})</span>` : ''}
                </span>
            </div>
        `;
    } else {
        submissionDeadlineHTML = `
            <div class="info-item">
                <span class="info-icon">📝</span>
                <span class="info-label">Submission:</span>
                <span class="info-value" style="color: #999; font-style: italic;">To be announced</span>
            </div>
        `;
    }
    
    // Format registration deadline
    let registrationDeadlineHTML = '';
    if (conference.registrationDeadline) {
        const registrationDeadlineDate = new Date(conference.registrationDeadline);
        const formattedRegistrationDeadline = registrationDeadlineDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        const daysUntilRegDeadline = Math.ceil((registrationDeadlineDate - today) / (1000 * 60 * 60 * 24));
        let regDeadlineClass = 'future';
        if (daysUntilRegDeadline < 0) {
            regDeadlineClass = 'past';
        } else if (daysUntilRegDeadline <= 7) {
            regDeadlineClass = 'urgent';
        } else if (daysUntilRegDeadline <= 30) {
            regDeadlineClass = 'upcoming';
        }
        
        registrationDeadlineHTML = `
            <div class="info-item">
                <span class="info-icon">🎫</span>
                <span class="info-label">Registration:</span>
                <span class="info-value deadline ${regDeadlineClass}">
                    ${formattedRegistrationDeadline}
                </span>
            </div>
        `;
    }
    
    const formattedConferenceDate = conference.conferenceDate
        ? new Date(conference.conferenceDate + 'T00:00:00').toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
        : (conference.conferenceDateText || 'To be announced');
    
    return `
        <div class="conference-card ${cardClass}">
            <div class="conference-header">
                <div>
                    <div class="conference-name">
                        <a href="${conference.cfpLink || conference.website}" target="_blank" class="conference-link">${conference.name}</a>
                    </div>
                    <span class="conference-field">${conference.field}</span>
                </div>
            </div>
            <div class="conference-info">
                ${abstractDeadlineHTML}
                ${submissionDeadlineHTML}
                ${registrationDeadlineHTML}
                <div class="info-item">
                    <span class="info-icon">📍</span>
                    <span class="info-label">Location:</span>
                    <span class="info-value">${conference.location}</span>
                </div>
                <div class="info-item">
                    <span class="info-icon">🗓️</span>
                    <span class="info-label">Conference:</span>
                    <span class="info-value">${formattedConferenceDate}</span>
                </div>
                <div class="info-item">
                    <span class="info-icon">🌐</span>
                    <span class="info-label">Website:</span>
                    <a href="${conference.website}" target="_blank" class="info-value" style="color: #667eea; text-decoration: none;">
                        Visit Website →
                    </a>
                </div>
            </div>
        </div>
    `;
}

function handleFilter() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const sortBy = document.getElementById('sortSelect').value;
    const statusFilter = document.getElementById('statusFilter').value;
    
    let filtered = conferences.filter(conference => {
        const matchesSearch = 
            conference.name.toLowerCase().includes(searchTerm) ||
            conference.location.toLowerCase().includes(searchTerm) ||
            conference.field.toLowerCase().includes(searchTerm);
        
        if (!matchesSearch) return false;
        
        if (statusFilter === 'all') return true;
        
        // Use submission deadline for filtering, fallback to registration deadline if no submission deadline
        const deadlineDate = conference.submissionDeadline ? new Date(conference.submissionDeadline) : 
                            (conference.registrationDeadline ? new Date(conference.registrationDeadline) : null);
        
        if (!deadlineDate) return statusFilter === 'all'; // If no deadline, only show in 'all'
        
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        if (statusFilter === 'upcoming') {
            return deadlineDate >= today;
        } else if (statusFilter === 'past') {
            return deadlineDate < today;
        }
        
        return true;
    });
    
    // Sort conferences
    filtered.sort((a, b) => {
        switch(sortBy) {
            case 'deadline':
                const deadlineA = a.submissionDeadline ? new Date(a.submissionDeadline) : 
                                 (a.registrationDeadline ? new Date(a.registrationDeadline) : new Date('9999-12-31'));
                const deadlineB = b.submissionDeadline ? new Date(b.submissionDeadline) : 
                                 (b.registrationDeadline ? new Date(b.registrationDeadline) : new Date('9999-12-31'));
                return deadlineA - deadlineB;
            case 'deadline-desc':
                const deadlineADesc = a.submissionDeadline ? new Date(a.submissionDeadline) : 
                                     (a.registrationDeadline ? new Date(a.registrationDeadline) : new Date('0001-01-01'));
                const deadlineBDesc = b.submissionDeadline ? new Date(b.submissionDeadline) : 
                                     (b.registrationDeadline ? new Date(b.registrationDeadline) : new Date('0001-01-01'));
                return deadlineBDesc - deadlineADesc;
            case 'name':
                return a.name.localeCompare(b.name);
            case 'location':
                return a.location.localeCompare(b.location);
            default:
                return 0;
        }
    });
    
    renderConferences(filtered);
}

