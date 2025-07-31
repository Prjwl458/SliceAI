document.addEventListener('DOMContentLoaded', () => {
    const noteInput = document.getElementById('note-input');
    const summarizeBtn = document.getElementById('summarize-btn');
    const summaryOutput = document.getElementById('summary-output');

    summarizeBtn.addEventListener('click', async () => {
        const noteText = noteInput.value;
        if (noteText.trim() === '') {
            alert('Please write some notes before summarizing.');
            return;
        }

        summaryOutput.textContent = 'Summarizing...';

        try {
            // This is a placeholder for the actual API call.
            // In a real application, you would send the noteText to your backend API.
            const summary = await getSummary(noteText);
            summaryOutput.textContent = summary;
        } catch (error) {
            summaryOutput.textContent = 'Error summarizing the note.';
            console.error('Summarization error:', error);
        }
    });

    async function getSummary(text) {
        try {
            const response = await fetch('/summarize', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text }),
            });

            if (!response.ok) {
                throw new Error('Failed to get summary from the server.');
            }

            const data = await response.json();
            return data.summary;
        } catch (error) {
            console.error('Error fetching summary:', error);
            return 'Failed to get summary.';
        }
    }
});
