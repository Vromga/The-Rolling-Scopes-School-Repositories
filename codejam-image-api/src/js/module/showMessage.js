const messageBlock = document.querySelector('.div_message');
function showMessage(text) {
    messageBlock.textContent = text;
    messageBlock.classList.remove('hidden');
    messageBlock.classList.add('message');
    setTimeout(() => {
        messageBlock.classList.remove('message');
        messageBlock.classList.add('hidden');
    }, 2000);
}
export default showMessage;