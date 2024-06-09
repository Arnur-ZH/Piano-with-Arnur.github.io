const languagePack = {
    'en': {
        'title': 'Intermediate Piano Courses',
        'description': 'Our intermediate piano courses are designed for students who have a basic understanding of piano playing and wish to improve their skills. These courses will help you refine your technique and expand your repertoire.',
        'example': 'Our Student',
        'register-title': 'Register for Intermediate Piano Courses',
        'name': 'Name',
        'email': 'Email',
        'phone': 'Phone',
        'message': 'Message',
        'register': 'Register'
    },
    'ru': {
        'title': 'Курсы среднего уровня по игре на фортепиано',
        'description': 'Наши курсы среднего уровня по игре на фортепиано предназначены для студентов, которые имеют базовые знания игры на фортепиано и хотят улучшить свои навыки. Эти курсы помогут вам улучшить технику и расширить репертуар.',
        'example': 'Наш Студент',
        'register-title': 'Записаться на курсы среднего уровня',
        'name': 'Имя',
        'email': 'Электронная почта',
        'phone': 'Телефон',
        'message': 'Сообщение',
        'register': 'Записаться'
    }
};

function changeLanguage(lang) {
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        element.textContent = languagePack[lang][key];
    });
}
