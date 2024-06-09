const languagePack = {
    'en': {
        'title': 'Beginner Piano Courses',
        'description': 'Our beginner piano courses are designed to provide a solid foundation in piano playing for students of all ages. Whether you\'re starting from scratch or looking to improve your basic skills, our courses are tailored to meet your needs.',
        'example': 'Our Student',
        'register-title': 'Register for Beginner Piano Courses',
        'name': 'Name',
        'email': 'Email',
        'phone': 'Phone',
        'message': 'Message',
        'register': 'Register'
        
    },
    'ru': {
        'title': 'Курсы для начинающих по игре на фортепиано',
        'description': 'Наши курсы по игре на фортепиано для начинающих предназначены для того, чтобы заложить прочную основу в игре на фортепиано для учеников всех возрастов. Независимо от того, начинаете ли вы с нуля или хотите улучшить свои базовые навыки, наши курсы адаптированы под ваши нужды.',
        'example': 'Наш Студент',
        'register-title': 'Записаться на курсы для начинающих',
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
