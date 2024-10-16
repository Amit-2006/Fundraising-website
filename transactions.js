// for sidebar
document.querySelector('.toggle-sidebar').addEventListener('click', function() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.width = sidebar.style.width === '0px' || sidebar.style.width === '' ? '200px' : '0px';
});
