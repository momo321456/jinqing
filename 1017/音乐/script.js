// 获取元素
const messageInput = document.getElementById('message-input');
const submitBtn = document.getElementById('submit-btn');
const chatDisplay = document.getElementById('chat-display');

// 发送消息的函数
function sendMessage() {
    const messageText = messageInput.value.trim();
    if (messageText) {
        // 创建消息元素
        const newMessage = document.createElement('div');
        newMessage.classList.add('message');
        newMessage.textContent = messageText;
        newMessage.style.backgroundColor = '#428bca';
        newMessage.style.color = 'white';
        newMessage.style.padding = '5px 10px';
        newMessage.style.marginBottom = '10px';
        newMessage.style.borderRadius = '5px';

        // 将消息添加到聊天显示区
        chatDisplay.appendChild(newMessage);

        // 清空输入框
        messageInput.value = '';

        // 滚动到最新消息
        chatDisplay.scrollTop = chatDisplay.scrollHeight;
    }
}

// 为发送按钮添加事件监听器
submitBtn.addEventListener('click', sendMessage);

// 允许用户按回车键发送消息
messageInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});
