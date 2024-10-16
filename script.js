document.getElementById('copy-link').addEventListener('click', function() {
    const donationLink = 'https://pages.razorpay.com/pl_NUcVhpQzK8rI1b/view'; // Replace with your actual link
    navigator.clipboard.writeText(donationLink).then(() => {
        alert('Donation link copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
});

document.getElementById('share-whatsapp').addEventListener('click', function() {
    const donationLink = 'https://pages.razorpay.com/pl_NUcVhpQzK8rI1b/view'; 
    const message = `Hi, I am raising funds for NayePankh Foundation. Please support me by donating through this link ${donationLink} and make a difference!`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
});

// for sidebar
document.querySelector('.toggle-sidebar').addEventListener('click', function() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.width = sidebar.style.width === '0px' || sidebar.style.width === '' ? '200px' : '0px';
});
