const languagePack = {
    'en': {
        'title': 'Welcome to Piano School',
        'description': 'Learn to play the piano from the comfort of your home with courses tailored for every level.',
        'beginnerCourses': 'Beginner Courses',
        'beginnerDesc': 'Start your musical journey with our beginner piano courses.',
        'intermediateCourses': 'Intermediate Courses',
        'intermediateDesc': 'Enhance your skills with our intermediate lessons.',
        'advancedCourses': 'Advanced Courses',
        'advancedDesc': 'Master the piano with our advanced courses designed for skilled players.'
    },
    'ru': {
        'title': 'Добро пожаловать в школу фортепиано',
        'description': 'Научитесь играть на фортепиано, не выходя из дома, с курсами, адаптированными для каждого уровня.',
        'beginnerCourses': 'Курсы для начинающих',
        'beginnerDesc': 'Начните свое музыкальное путешествие с наших курсов для начинающих.',
        'intermediateCourses': 'Курсы среднего уровня',
        'intermediateDesc': 'Повышайте свои навыки на наших курсах среднего уровня.',
        'advancedCourses': 'Продвинутые курсы',
        'advancedDesc': 'Станьте мастером игры на фортепиано с нашими продвинутыми курсами для опытных игроков.'
    }
};

function changeLanguage(lang) {
    document.querySelector('h1').textContent = languagePack[lang]['title'];
    document.querySelector('p').textContent = languagePack[lang]['description'];
    document.querySelectorAll('.carousel-item h5')[0].textContent = languagePack[lang]['beginnerCourses'];
    document.querySelectorAll('.carousel-item p')[0].textContent = languagePack[lang]['beginnerDesc'];
    document.querySelectorAll('.carousel-item h5')[1].textContent = languagePack[lang]['intermediateCourses'];
    document.querySelectorAll('.carousel-item p')[1].textContent = languagePack[lang]['intermediateDesc'];
    document.querySelectorAll('.carousel-item h5')[2].textContent = languagePack[lang]['advancedCourses'];
    document.querySelectorAll('.carousel-item p')[2].textContent = languagePack[lang]['advancedDesc'];
}
