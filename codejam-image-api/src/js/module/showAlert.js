const messageBlock = document.querySelector('.div_message');
function showAlert(text) {
    messageBlock.textContent = text;
    messageBlock.classList.remove('hidden');
    messageBlock.classList.add('alert');
    setTimeout(() => {
        messageBlock.classList.remove('alert');
        messageBlock.classList.add('hidden');
    }, 2000);
}
export default showAlert;