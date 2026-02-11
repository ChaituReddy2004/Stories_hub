document.addEventListener('DOMContentLoaded', () => {
    // Handle Manuscript Upload
    const manuscriptZone = document.getElementById('manuscript-upload');
    const manuscriptInput = document.getElementById('manuscript-input');

    if (manuscriptZone && manuscriptInput) {
        manuscriptZone.addEventListener('click', () => manuscriptInput.click());

        manuscriptZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            manuscriptZone.style.borderColor = 'var(--primary-color)';
            manuscriptZone.style.background = '#fff9f0';
        });

        manuscriptZone.addEventListener('dragleave', () => {
            manuscriptZone.style.borderColor = 'var(--border-color)';
            manuscriptZone.style.background = '#fdfdfd';
        });

        manuscriptInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                manuscriptZone.innerHTML = `
                    <div class="upload-icon" style="color: var(--success-color)">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                    </div>
                    <p><strong>Manuscript Uploaded:</strong> ${e.target.files[0].name}</p>
                    <p style="font-size: 0.8rem; color: #888; margin-top: 0.5rem; text-decoration: underline;">Change file</p>
                `;
                manuscriptZone.style.borderColor = 'var(--success-color)';
            }
        });
    }

    // Handle Cover Preview
    const coverInput = document.getElementById('cover-input');
    const coverPreview = document.getElementById('cover-preview');

    if (coverInput && coverPreview) {
        coverInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                const file = e.target.files[0];
                const reader = new FileReader();

                reader.onload = (event) => {
                    coverPreview.innerHTML = `<img src="${event.target.result}" alt="Cover Preview" style="width: 100%; height: 100%; object-fit: cover;">`;
                    coverPreview.style.border = 'none';
                };

                reader.readAsDataURL(file);
            }
        });
    }

    // Handle AI Usage Selection
    const radioItems = document.querySelectorAll('.radio-item');
    radioItems.forEach(item => {
        item.addEventListener('click', () => {
            radioItems.forEach(ri => ri.classList.remove('selected'));
            item.classList.add('selected');
            const radio = item.querySelector('input');
            if (radio) radio.checked = true;
        });
    });

    // Initial state check
    document.querySelectorAll('input[name="ai_usage"]').forEach(radio => {
        if (radio.checked) {
            const radioItem = radio.closest('.radio-item');
            if (radioItem) radioItem.classList.add('selected');
        }
    });
});

