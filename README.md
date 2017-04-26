# Tiny CSS helpers
## CSS бібліотека для швидкого створення сучасних інтерфейсів

#### Коли використовувати?
1. При розробці інтерфейсів стартапів з нестабільними вимогами по дизайну
1. При оптимізації вже існуючих інтерфейсів
1. При створенні адаптивних сайтів
1. Для прототипування інтерфейсів
1. Для інтерфейсів, які проходитимуть A/B тестування

#### Для кого?
1. Для фронтенд розробників
1. Для людей, які не люблять CSS
1. Для бекенд розробників, котрі часто працюють з фронтендом
1. Для студентів, котрі опановують фронтенд розробку
1. Для веб-дизайнерів, котрі опановують фронтенд розробку
1. Для веб-дизайнерів, котрі займаються HTML прототипуванням інтерфейсів

#### Переваги
1. Використання цієї бібліотеки та слідування нашим рекомендаціям допоможе створювати якісні інтерфейси в максимально короткі терміни
1. Завдяки нашій архітектурі бібліотеки, Ваш код буде легко підтримуваним та розширюваним
1. Сторінки створені на основі цієї бібліотеки мають дуже високу швидкість завантаження та рендерінгу
1. Бібліотека активно підтримується і оновлюється командою VarX Systems

## Вивчення документації займе у вас 10 хвилин, але це зекономить сотні годин життя

### Documentation
1. [Download & Install](#library-installation)
1. [Architecture & recommendations](#library-architecture)
1. [Configuration](#library-configuration)
1. [Naming recommendation](#library-naming-recommendation)
1. [Library classes naming](#library-classes-naming)
1. [Library structure](#library-structure)
    1. [Theme](#library-structure--theme)
    1. [Config](#library-structure--config)
    1. [Base stylesheets](#library-structure--base)
        1. [Grids](#base--grids)
        1. [Typography](#base--typography)
            1. [Abbreviations](#typography__abbreviations)
            1. [Addresses](#typography__addresses)
            1. [Blockquote](#typography__blockquote)
            1. [Code](#typography__code)
            1. [Font weight](#typography__font-weight)
            1. [Fonts](#typography__fonts)
            1. [Headings](#typography__headings)
            1. [Inline text elements](#typography__inline-text-elements)
            1. [Line height](#typography__line-height)
            1. [Links](#typography__links)
            1. [Lists](#typography__lists)
            1. [Paragraphs](#typography__paragraphs)
            1. [Size](#typography__size)
            1. [Style](#typography__style)
        1. [Helpers](#base--helpers)
            1. [Border helpers](#border-helpers)
            1. [Box offset helpers](#box-offset-helpers)
            1. [Contextual backgrounds helpers](#contextual-backgrounds)
            1. [Contextual colors helpers](#contextual-colors)
            1. [Display helpers](#display-helpers)
            1. [Float helpers](#float-helpers)
            1. [Height helpers](#height-helpers)
            1. [Image helpers](#image-helpers)
            1. [Position helpers](#position-helpers)
            1. [Text helpers](#text-helpers)
            1. [Width helpers](#width-helpers)
 1. [Rules for web designers](#rules-for-web-designers)
 1. [Maintance](#library-maintance)
 1. [Contribute & develop](#library-contribution)
 
#### <a name="library-architecture"></a> Architecture & recommendations
###### Вам необхідно прочитати цю інформацію, якщо ви плануєте працювати з архітектурою бібліотеки. Якщо ж ви просто хочете використовувати бібліотеку не вдаючись в подробиці пропонованої архітектури - ви можете пропустити цей пункт. <br />
В даній бібліотеці використовується архітектура [SMACSS](https://smacss.com/)-updated. <br />
Ми рекомендуємо використовувати [SASS-lang](http://sass-lang.com/) для написання стилів інтерфейсу. <br />
Також ми рекомендуємо розділяти ваш CSS код на наступні архітектурні складові:
1. **Base** *(Сюди відносяться усі базові стилі, такі як: reset.css, normalize.css, grids, typography, helpers, fonts)*
1. **Modules** *(Сюди повинні відноситись стилі котрі описують зовнішній вигляд buttons, inputs, tables, panels, modals etc.)*
1. **Layout** *(В цю категорію повинні відноситись усі стилі котрі описують структури сторінок, якщо вони не можуть бути покриті можливостями сітки)*
1. **Config** *(Всі значення котрі описують зовнішній вигляд елементів у структурі modules повинні знаходитись у цій частині у вигляді sass/less змінних. Наприклад: margin, padding, font-size, font-weight, line-height, background, color etc.)*
1. **Theme** *(Всі кольори, котрі використовуються в інтерфейсі повинні бути збережені у цій частині у вигляді sass/less змінних)*

#### <a name="library-configuration"></a> Configuration
Для цієї бібліотеки не діє правило - не змінювати код бібліотеки. <br />
Ви можете використовувати, як build цієї бібліотеки у вигляді мініфікованої версії, так і повністю всю структуру файлів. <br />
Якщо ви оберете використання структури файлів, це означає що ви маєте змогу додавати до структури необхідні вам стилі, або видаляти непотрібні <br />
Для кращого розуміння можливостей конфігурації цієї бібліотеки ознайомтесь з [Library structure](#library-structure)

#### <a name="library-naming-recommendation"></a> Naming recommendations
Якщо вам необхідно додати до бібіліотеки нові елементи, ми рекомендуємо використовувати [BEM](https://en.bem.info/methodology/naming-convention/) naming convention 
для іменування CSS класів

#### <a name="library-classes-naming"></a> Library classes naming
Для іменування класів бібліотеки ми використали єдиний підхід. Ми скоротили назви звичайних CSS властивостей і використали їх в назвах класів.
###### Префікс класів, які описують при якій ширині екрану буде застосовуватись стиль. 
###### Класи без префіксів розміру екрану застосовуються до всіх розмірностей
```
[] - prefix (use in css **without** brackets)
[sm] - small (screen width >= 576px)
[md] - medium (screen width >= 768px)
[lg] - large (screen width >= 992px)
[xl] - extra large (screen width >= 1200px)
```
###### Обмежені префікси розмірностей
```
[] - prefix (use in css **without** brackets)
[xs-o] - extra small ONLY (screen width <= 575px)
[sm-o] - small ONLY (screen width >= 576px and width <= 767px)
[md-o] - medium ONLY (screen width >= 768px and width <= 991px)
[lg-o] - large ONLY (screen width >= 992px and width <= 1199px)
```
###### Інші скорочення
```
[] - class part
border - [bord]
padding - [pad]
margin - [marg]
left - [l]
right - [r]
top - [t]
bottom - [b]
vertical - [v]
horizontal - [h]
width - [w]
height - [h]
background - [bg]
color - [c]
display - [d]
none - [n]
position - [pos]
uppercase - [upper]
lowercase - [lower]
min-width - [minw]
max-width - [maxw]
font-size - [fs]
line-height - [lh]
font-weight - [fw]
```

###### Принципи побудови класів
```
[size-prefix|optional]-[only-prefix|optional]-[style-property]-[top/right/bottom/left|optional]-[dimension|optional]
```

###### Приклади класів
```
.xs-o-text-c
.full-w
.bord-w-1
.pad-t-10
.xs-marg-v-5
```

#### <a name="library-structure"></a> Library structure
Структура бібліотеки повністю відповідає правилам описаним в [Library architecture](#library-architecture)

##### <a name="library-structure--theme"></a> Theme
File location: ```tinycsshelpers/sources/stylesheets/theme/theme.scss```
<br />
```
$c-black: #000;
$c-grey-first: #2E2E2E; //or your grey color
$c-grey-second: #424242; 
$c-grey-third: #585858;
$c-grey-fourth: #6E6E6E;
$c-grey-fifth: #848484;
$c-grey-sixth: #A4A4A4;
$c-grey-seventh: #BDBDBD;
$c-grey-eighth: #D8D8D8;
$c-grey-ninth: #E6E6E6;
$c-grey-tenth: #F2F2F2;
$c-white: #fff;

$c-theme-first: // your color;
$c-theme-second: // your color;
$c-theme-third: // your color;
$c-theme-fourth: // your color;
$c-theme-fifth: // your color;
$c-theme-sixth: // your color;
$c-theme-seventh: // your color;
$c-theme-eighth: // your color;
$c-theme-ninth: // your color;
$c-theme-tenth: // your color;

$c-success: #5AA035; //or your success color
$c-warning: #B87D3D; //or your warning color
$c-danger: #B83D3D; //or your danger color
```
Посилання на класи <-----

В результаті досліджень нам вдалось встановити, що використання більше 10 сірих кольорів, або використавння більше 10 корпоративних кольорів призводить до ускладненого сприйняття інтерфейсу користувачем.
Саме тому ми обмежили кількість кольорів в темі. Але, при необхідності, ви з легкістю можете додати додаткові кольори.
*Ми рекомендуємо використовувати не більше 5 корпоративних кольорів. Також рекомендуємо передбачити використання кольорів теми на різних фонах(темних і світлих)*

##### <a name="library-structure--config"></a> Config
File location: ```tinycsshelpers/sources/stylesheets/config/``` <br />
Config structure:
###### base/typography
1. Abbreviations config
1. Address config
1. Blockquote config
1. Code config
1. Headings config
1. Lists config
1. Paragraphs config

Приклад файлу конфігурації:
```
$h-fw: 500;
$h-lh: 1.1;

$h-small-fw: normal;
$h-small-lh: 1;

$h3-small-fs: 65%;
$h3-marg-t: 20px;
$h3-marg-b: 10px;

$h6-small-fs: 75%;
$h6-marg-t: 10px;
$h6-marg-b: 10px;

$h1-fs: 36px;
$h2-fs: 30px;
$h3-fs: 24px;
$h4-fs: 18px;
$h5-fs: 14px;
$h6-fs: 12px;

$small-fs: 85%;
```

#### <a name="library-structure--base"></a> Base stylesheets 
##### <a name="library-structure--base"></a> Grids

Для полегшення інтеграції цієї бібліотеки з вже існуючими в проекті CSS frameworks в структуру бібліотеки ми включили наступні сітки:
- Bootstrap 4 grid **(by default)** ([Documentation](https://v4-alpha.getbootstrap.com/layout/grid/)) 
- Foundation grid ([Documentation](http://foundation.zurb.com/sites/docs/flex-grid.html)) 
- Semantic UI grid ([Documentation](https://semantic-ui.com/collections/grid.html)) 

Ми рекомендуємо використовувати Bootstrap 4 Grid, але також ми можете активувати будь-яку з вище вказаних, або додати свою.

##### <a name="base--typography">Typography</a>
###### <a name="typography__abbreviations">Abbreviations</a>
###### <a name="typography__addresses">Addresses</a>
###### <a name="typography__blockquote">Blockquote</a>
###### <a name="typography__code">Code</a>
###### <a name="typography__font-weight">Font weight</a>
###### <a name="typography__fonts">Fonts</a>
###### <a name="typography__headings">Headings</a>
###### <a name="typography__inline-text-elements">Inline text elements</a>
###### <a name="typography__line-height">Line height</a>
###### <a name="typography__links">Lists</a>
###### <a name="typography__paragraphs">Paragraphs</a>
###### <a name="typography__size">Font size</a>
###### <a name="typography__font-style">Font weight</a>








