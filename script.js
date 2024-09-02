document.addEventListener("DOMContentLoaded", function() {
    const engBtn = document.getElementById("eng-btn");
    const rusBtn = document.getElementById("rus-btn");
    const titleEn = document.getElementById("title-en");
    const titleRu = document.getElementById("title-ru");
    const buyBtn = document.getElementById("buy-btn");
    const notification = document.getElementById("notification");

    function updateTitles(english, russian, buttonText) {
        titleEn.classList.add('hidden');
        titleRu.classList.add('hidden');
        
        setTimeout(() => {
            titleEn.textContent = english;
            titleRu.textContent = russian;
            buyBtn.textContent = buttonText;

            titleEn.classList.remove('hidden');
            titleRu.classList.remove('hidden');

            // Добавляем класс для анимации
            titleEn.classList.add('fade-in-text');
            titleRu.classList.add('fade-in-text');

            // Удаляем класс анимации после завершения, чтобы можно было повторить
            setTimeout(() => {
                titleEn.classList.remove('fade-in-text');
                titleRu.classList.remove('fade-in-text');
            }, 500); // Соответствует времени анимации fadeInText
        }, 500); // Соответствует времени анимации fadeOut
    }

    engBtn.addEventListener("click", function() {
        engBtn.classList.add("active");
        rusBtn.classList.remove("active");
        updateTitles("KIPA PRO+", "Description:", "Buy Now");
        showNotification("Language changed to English");
    });

    rusBtn.addEventListener("click", function() {
        rusBtn.classList.add("active");
        engBtn.classList.remove("active");
        updateTitles("KIPA PRO+", "Описание:", "Купить сейчас");
        showNotification("Язык изменен на русский");
    });

    function showNotification(message) {
        notification.textContent = message;
        notification.style.opacity = 1;
        notification.style.transform = "translateY(0)";
        setTimeout(() => {
            notification.style.opacity = 0;
            notification.style.transform = "translateY(100px)";
        }, 2000);
    }

    const modal = document.getElementById("myModal");
    const span = document.getElementById("close");

    buyBtn.onclick = function() {
        // Плавный переход с задержкой
        buyBtn.style.transform = "scale(1.1)";
        setTimeout(() => {
            window.location.href = "https://t.me/kipa1337";
        }, 500); // Задержка 500ms перед переходом
    };

    span.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };

    // Убираем экран загрузки после загрузки страницы
    const loader = document.getElementById('loader');
    window.addEventListener('load', () => {
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 500);
    });

    // Инициализация AOS
    AOS.init();
});
