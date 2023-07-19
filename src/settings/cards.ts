import { IArmyMap, ICharMap, ISquadMap } from "./types";

export const ArmiesMap = new Map<number, IArmyMap>([
  [1, { name: 'Войска Колдуна', squad_ids: [11, 12, 16, 17, 18, 23, 26, 27, 28, 29, 32, 35, 36, 37] }], // lion
  [2, { name: 'Легионеры Некроманта', squad_ids: [4, 5, 7, 13, 14, 15, 19, 20, 21, 30, 31, 33, 38, 44, 48, 49] }], // bet
  [3, { name: 'Гвардия Чародея', squad_ids: [1, 3, 6, 10, 22, 34, 39, 45, 46, 47] }], // fire
  [4, { name: 'Гильдия Вольных Стрелков', squad_ids: [2, 8, 9, 24, 25, 40, 41, 42, 43] }], // arrow
])
export const SquadsMap = new Map<number, ISquadMap>([
  [1, { name: 'Легион "Амазонки"', color: '#bb2c51', character_ids: [1, 2, 3, 4, 5] }],
  [2, { name: 'Дружина "Беркут"', color: '#213839', character_ids: [6, 7, 8, 9, 10, 11] }],
  [3, { name: 'Батальон "Бородино"', color: '#bf6c0c', character_ids: [12, 13, 14, 15, 16] }],
  [4, { name: 'Штурм-бат "Ураган"', color: '#222d20', character_ids: [17, 18, 19, 20, 21, 22] }],
  [5, { name: 'Некро-клан "Фобос"', color: '#652b53', character_ids: [23, 24, 25] }],
  [6, { name: 'Легион "Центурион"', color: '#232937', character_ids: [26, 27, 28, 29, 30] }],
  [7, { name: 'Развед-отряд "Цунами"', color: '#20233d', character_ids: [31, 32, 33, 34, 35] }],
  [8, { name: 'Дивизион "Шерауд"', color: '#385385', character_ids: [36, 37, 38, 39, 40] }],
  [9, { name: 'Био-киборги "Шерифы"', color: '#e13e78', character_ids: [41, 42, 43, 44] }],
  [10, { name: 'Батальон "Эспада"', color: '#1d5a1b', character_ids: [45, 46, 47, 48, 49] }],
  [11, { name: 'Отряд "Ятаган"', color: '#4f5161', character_ids: [50, 51, 52] }],
  [12, { name: 'Бессонная стая "Вервольф"', color: '#764953', character_ids: [53, 54, 55, 56] }],
  [13, { name: 'Отряд "Герои Шипен"', color: '#96592e', character_ids: [57, 58, 59, 60, 61] }],
  [14, { name: 'Банда "Гроубаг"', color: '#4f6a35', character_ids: [62, 63, 64, 65, 66] }],
  [15, { name: 'Бригада "Гурог"', color: '#02463b', character_ids: [67, 68, 69, 70] }],
  [16, { name: 'Корпус "Измаил"', color: '#bd8b43', character_ids: [71, 72, 73, 74, 75] }],
  [17, { name: 'Дружина "Конунг"', color: '#bd8b43', character_ids: [76, 77, 78, 79, 80] }],
  [18, { name: 'Отряд "Минотавры"', color: '#733332', character_ids: [81, 82, 83, 84] }],
  [19, { name: 'Бригада "Некрос"', color: '#07293b', character_ids: [85, 86, 87, 88, 89] }],
  [20, { name: 'Легион "Стражи гробниц"', color: '#004d64', character_ids: [90, 91, 92, 93, 94, 95] }],
  [21, { name: 'Отряд "Хикамото"', color: '#5b2d5d', character_ids: [96, 97, 98, 99, 100] }],
  [22, { name: 'Отряд "Элидар"', color: '#b66102', character_ids: [101, 102, 103, 104, 105] }],
  [23, { name: 'Рота "Варяг"', color: '#2a4e81', character_ids: [106, 107, 108, 109, 110] }],
  [24, { name: 'Дозорный отряд "Вепрь"', color: '#6981b2', character_ids: [111, 112, 113, 114, 115] }],
  [25, { name: 'Рота "Версаль"', color: '#876189', character_ids: [116, 117, 118, 119, 120] }],
  [26, { name: 'Рота "Гренадиры"', color: '#713e46', character_ids: [121, 122, 123, 124, 125] }],
  [27, { name: 'Суперкиборги "Гуроны"', color: '#0e7960', character_ids: [126, 127, 128, 129] }],
  [28, { name: 'Орден "Зигфрид"', color: '#9e5c25', character_ids: [130, 131, 132, 133, 134] }],
  [29, { name: 'Дивизион "Кайзер"', color: '#4f4a6b', character_ids: [135, 136, 137] }],
  [30, { name: 'Отряд "Кентавр"', color: '#323560', character_ids: [138, 139, 140, 141, 142] }],
  [31, { name: 'Гоблин-рота "Кобра"', color: '#856496', character_ids: [143, 144, 145, 146] }],
  [32, { name: 'Корпус "Кондор"', color: '#cdb676', character_ids: [147, 148, 149, 150, 151] }],
  [33, { name: 'Легион "Магнум"', color: '#6c6536', character_ids: [152, 153, 154, 155, 156] }],
  [34, { name: 'Рота "Марсель"', color: '#049280', character_ids: [157, 158, 159, 160, 161] }],
  [35, { name: 'Рота "Матадор"', color: '#6b9663', character_ids: [162, 163, 164, 165, 166] }],
  [36, { name: 'Штурм-копус "Нептун"', color: '#973d40', character_ids: [167, 168, 169, 170, 171, 172] }],
  [37, { name: 'Рота "Норман"', color: '#47695b', character_ids: [173, 174, 175, 176] }],
  [38, { name: 'Гоблин-рота "Питон"', color: '#b58941', character_ids: [177, 178, 179, 180] }],
  [39, { name: 'Бригада "Посейдон"', color: '#578e9f', character_ids: [181, 182, 183, 184, 185] }],
  [40, { name: 'Бригада "Псы Войны"', color: '#9e7521', character_ids: [186, 187, 188, 189, 190] }],
  [41, { name: 'Дружина "Пушкари"', color: '#59788b', character_ids: [191, 192, 193, 194, 195] }],
  [42, { name: 'Отряд "Роделин"', color: '#fe4c26', character_ids: [196, 197, 198, 199, 200] }],
  [43, { name: 'Легион "Сатурн"', color: '#7aa6be', character_ids: [201, 202, 203, 204, 205] }],
  [44, { name: 'Некро-киборги "Скелетоны"', color: '#612e33', character_ids: [206, 207, 208, 209] }],
  [45, { name: 'Дружина "Сокол"', color: '#d55353', character_ids: [210, 211, 212, 213, 214] }],
  [46, { name: 'Взвод "Сталинград"', color: '#e36b4b', character_ids: [215, 216, 217, 218] }],
  [47, { name: 'Осадный легион "Тайфун"', color: '#49b38c', character_ids: [219, 220, 221, 222, 223, 224] }],
  [48, { name: 'Ударный взвод "Титан"', color: '#614861', character_ids: [225, 226, 227] }],
  [49, { name: 'Корпус "Торнадо"', color: '#3b8044', character_ids: [228, 229, 230, 231, 232, 233] }]
])

export const CardsMap = new Map<number, ICharMap>([
  [1, {
    name: 'Флориель',
    stats: {
      attack: 2,
      protection: 0,
      health: 2,
      shooting: {
        range: 3,
        accuracy: 3,
      },
      magic: null,
    },
  }],
  [2, {
    name: 'Дара',
    stats: {
      attack: 1,
      protection: 0,
      health: 2,
      shooting: {
        range: 1,
        accuracy: 3,
      },
      magic: null,
    },
  }],
  [3, {
    name: 'Ложаетта',
    stats: {
      attack: 1,
      protection: 0,
      health: 3,
      shooting: {
        range: 1,
        accuracy: 3,
      },
      magic: null,
    },
  }],
  [4, {
    name: 'Дораель',
    stats: {
      attack: 3,
      protection: 2,
      health: 2,
      shooting: null,
      magic: null,
    },
  }],
  [5, {
    name: 'Финика',
    stats: {
      attack: 1,
      protection: 1,
      health: 2,
      shooting: null,
      magic: null,
    },
  }],
  [6, {
    name: 'Мирдиний',
    stats: {
      attack: 2,
      protection: 1,
      health: 1,
      shooting: null,
      magic: null,
    },
  }],
  [7, {
    name: 'Дан Рогатина',
    stats: {
      attack: 1,
      protection: 1,
      health: 1,
      shooting: null,
      magic: null,
    },
  }],
  [8, {
    name: 'Кор Секира',
    stats: {
      attack: 2,
      protection: 1,
      health: 1,
      shooting: null,
      magic: null,
    },
  }],
  [9, {
    name: 'Волк Кулак',
    stats: {
      attack: 2,
      protection: 2,
      health: 1,
      shooting: null,
      magic: null,
    },
  }],
  [10, {
    name: 'Борг',
    stats: {
      attack: 2,
      protection: 1,
      health: 1,
      shooting: null,
      magic: null,
    },
  }],
  [11, {
    name: 'Луч Ярость',
    stats: {
      attack: 0,
      protection: 1,
      health: 2,
      shooting: null,
      magic: null,
    },
  }],
  [12, {
    name: 'Бригантино',
    stats: {
      attack: 1,
      protection: 2,
      health: 2,
      shooting: {
        range: 1,
        accuracy: 3,
      },
      magic: null,
    },
  }],
  [13, {
    name: 'Барабанщик',
    stats: {
      attack: 0,
      protection: 2,
      health: 2,
      shooting: null,
      magic: null,
    },
  }],
  [14, {
    name: 'Ветеран Аустерлица',
    stats: {
      attack: 1,
      protection: 2,
      health: 2,
      shooting: null,
      magic: null,
    },
  }],
  [15, {
    name: 'Капрал',
    stats: {
      attack: 2,
      protection: 2,
      health: 2,
      shooting: {
        range: 1,
        accuracy: 3,
      },
      magic: null,
    },
  }],
  [16, {
    name: 'Фульштер',
    stats: {
      attack: 2,
      protection: 2,
      health: 2,
      shooting: {
        range: 4,
        accuracy: 4,
      },
      magic: null,
    },
  }],
  [17, {
    name: 'Космодесантник',
    stats: {
      attack: 0,
      protection: 1,
      health: 2,
      shooting: {
        range: 5,
        accuracy: 4,
      },
      magic: null,
    },
  }],
  [18, {
    name: 'Снайпер',
    stats: {
      attack: 0,
      protection: 2,
      health: 2,
      shooting: {
        range: 5,
        accuracy: 4,
      },
      magic: null,
    },
  }],
  [19, {
    name: 'Огнеметчик',
    stats: {
      attack: 0,
      protection: 2,
      health: 3,
      shooting: {
        range: 5,
        accuracy: 4,
      },
      magic: null,
    },
  }],
  [20, {
    name: 'Синий Лазер',
    stats: {
      attack: 0,
      protection: 2,
      health: 3,
      shooting: {
        range: 1,
        accuracy: 4,
      },
      magic: null,
    },
  }],
  [21, {
    name: 'Разведчик',
    stats: {
      attack: 1,
      protection: 1,
      health: 2,
      shooting: {
        range: 3,
        accuracy: 4,
      },
      magic: null,
    },
  }],
  [22, {
    name: 'Пулеметчик',
    stats: {
      attack: 0,
      protection: 1,
      health: 2,
      shooting: {
        range: 5,
        accuracy: 4,
      },
      magic: null,
    },
  }],
  [23, {
    name: 'Киборг NX-23',
    stats: {
      attack: 3,
      protection: 3,
      health: 4,
      shooting: null,
      magic: null,
    },
  }],
  [24, {
    name: 'Киборг NX-24',
    stats: {
      attack: 2,
      protection: 2,
      health: 4,
      shooting: null,
      magic: null,
    },
  }],
  [25, {
    name: 'Киборг NX-25',
    stats: {
      attack: 2,
      protection: -1,
      health: 4,
      shooting: null,
      magic: null,
    },
  }],
  [26, {
    name: 'Майор Донаган',
    stats: {
      attack: 0,
      protection: 1,
      health: 2,
      shooting: {
        range: 4,
        accuracy: 4,
      },
      magic: null,
    },
  }],
  [27, {
    name: 'Старший лейтинант Джексон',
    stats: {
      attack: 0,
      protection: 0,
      health: 2,
      shooting: {
        range: 3,
        accuracy: 4,
      },
      magic: null,
    },
  }],
  [28, {
    name: 'Лейтинант Иванов',
    stats: {
      attack: 2,
      protection: 0,
      health: 2,
      shooting: {
        range: 3,
        accuracy: 4,
      },
      magic: null,
    },
  }],
  [29, {
    name: 'Лейтинант Габриель Смит',
    stats: {
      attack: 1,
      protection: 0,
      health: 2,
      shooting: null,
      magic: null,
    },
  }],
  [30, {
    name: 'Лейтинант Джонатан Фогель',
    stats: {
      attack: 1,
      protection: 0,
      health: 2,
      shooting: null,
      magic: null,
    },
  }],
  [31, {
    name: 'Оясан',
    stats: {
      attack: 2,
      protection: 0,
      health: 2,
      shooting: null,
      magic: null,
    },
  }],
  [32, {
    name: 'Ханани',
    stats: {
      attack: 2,
      protection: 1,
      health: 2,
      shooting: null,
      magic: null,
    },
  }],
  [33, {
    name: 'Масамори',
    stats: {
      attack: 2,
      protection: 1,
      health: 2,
      shooting: null,
      magic: null,
    },
  }],
  [34, {
    name: 'Таито',
    stats: {
      attack: 2,
      protection: 0,
      health: 2,
      shooting: null,
      magic: null,
    },
  }],
  [35, {
    name: 'Якудза',
    stats: {
      attack: 2,
      protection: 2,
      health: 2,
      shooting: {
        range: 3,
        accuracy: 3,
      },
      magic: null,
    },
  }],
  [36, {
    name: 'Варниец',
    stats: {
      attack: 2,
      protection: 1,
      health: 2,
      shooting: null,
      magic: null,
    },
  }],
  [37, {
    name: 'Джон Мнузавок',
    stats: {
      attack: 2,
      protection: 3,
      health: 1,
      shooting: null,
      magic: null,
    },
  }],
  [38, {
    name: 'Весельчак Вилли',
    stats: {
      attack: 2,
      protection: 2,
      health: 2,
      shooting: null,
      magic: null,
    },
  }],
  [39, {
    name: 'Скипер',
    stats: {
      attack: 1,
      protection: 2,
      health: 2,
      shooting: {
        range: 1,
        accuracy: 3,
      },
      magic: null,
    },
  }],
  [40, {
    name: 'Йомен',
    stats: {
      attack: 2,
      protection: 1,
      health: 1,
      shooting: null,
      magic: null,
    },
  }],
  [41, {
    name: 'Киборг Лейтинант',
    stats: {
      attack: 2,
      protection: -1,
      health: 4,
      shooting: null,
      magic: null,
    },
  }],
  [42, {
    name: 'Киборг Ковбой',
    stats: {
      attack: 2,
      protection: 0,
      health: 4,
      shooting: {
        range: 2,
        accuracy: 2,
      },
      magic: null,
    },
  }],
  [43, {
    name: 'Киборг Коп',
    stats: {
      attack: 2,
      protection: 0,
      health: 4,
      shooting: null,
      magic: null,
    },
  }],
  [44, {
    name: 'Киборг Лейтинант',
    stats: {
      attack: 3,
      protection: -1,
      health: 4,
      shooting: null,
      magic: null,
    },
  }],
  [45, {
    name: 'Сержант Димс',
    stats: {
      attack: 2,
      protection: 1,
      health: 3,
      shooting: null,
      magic: null,
    },
  }],
  [46, {
    name: 'Джон Кристо',
    stats: {
      attack: 3,
      protection: 2,
      health: 3,
      shooting: null,
      magic: null,
    },
  }],
  [47, {
    name: 'Дельгадо',
    stats: {
      attack: 2,
      protection: 1,
      health: 3,
      shooting: null,
      magic: null,
    },
  }],
  [48, {
    name: 'Дон Эстебан',
    stats: {
      attack: 2,
      protection: 2,
      health: 3,
      shooting: null,
      magic: null,
    },
  }],
  [49, {
    name: 'Дон Афони',
    stats: {
      attack: 1,
      protection: 1,
      health: 3,
      shooting: null,
      magic: null,
    },
  }],
  [50, {
    name: 'Али Лучник',
    stats: {
      attack: 1,
      protection: 1,
      health: 1,
      shooting: {
        range: 3,
        accuracy: 3,
      },
      magic: null,
    },
  }],
  [51, {
    name: 'Мамбет Левантиец',
    stats: {
      attack: 2,
      protection: 2,
      health: 2,
      shooting: null,
      magic: null,
    },
  }],
  [52, {
    name: 'Уг Бана',
    stats: {
      attack: 2,
      protection: 2,
      health: 2,
      shooting: null,
      magic: null,
    },
  }],
  [53, {
    name: 'Джон Постульский',
    stats: {
      attack: 3,
      protection: 1,
      health: 2,
      shooting: null,
      magic: null,
    },
  }],
  [54, {
    name: 'Кровавый клык',
    stats: {
      attack: 4,
      protection: 1,
      health: 1,
      shooting: null,
      magic: null,
    },
  }],
  [55, {
    name: 'Осквернитель',
    stats: {
      attack: 3,
      protection: 1,
      health: 2,
      shooting: null,
      magic: null,
    },
  }],
  [56, {
    name: 'Постульский кошмар',
    stats: {
      attack: 4,
      protection: 1,
      health: 1,
      shooting: null,
      magic: null,
    },
  }],
  [57, {
    name: 'Ороксин',
    stats: {
      attack: 0,
      protection: 1,
      health: 2,
      shooting: {
        range: 3,
        accuracy: 3,
      },
      magic: null,
    },
  }],
  [58, {
    name: 'Фарбор Кринч',
    stats: {
      attack: 0,
      protection: 1,
      health: 2,
      shooting: {
        range: 3,
        accuracy: 3,
      },
      magic: null,
    },
  }],
  [59, {
    name: 'Макар Лофорта',
    stats: {
      attack: 0,
      protection: 1,
      health: 2,
      shooting: {
        range: 3,
        accuracy: 3,
      },
      magic: null,
    },
  }],
  [60, {
    name: 'Касторджин',
    stats: {
      attack: 0,
      protection: 1,
      health: 2,
      shooting: {
        range: 3,
        accuracy: 3,
      },
      magic: null,
    },
  }],
  [61, {
    name: 'Генерал Готрау',
    stats: {
      attack: 1,
      protection: 2,
      health: 2,
      shooting: {
        range: 3,
        accuracy: 2,
      },
      magic: null,
    },
  }],
  [62, {
    name: 'Зураумак',
    stats: {
      attack: 3,
      protection: 1,
      health: 3,
      shooting: null,
      magic: null,
    },
  }],
  [63, {
    name: 'Атрумок',
    stats: {
      attack: 1,
      protection: 2,
      health: 2,
      shooting: {
        range: 4,
        accuracy: 3,
      },
      magic: null,
    },
  }],
  [64, {
    name: 'Ингурсказ',
    stats: {
      attack: 3,
      protection: 1,
      health: 2,
      shooting: null,
      magic: null,
    },
  }],
  [65, {
    name: 'Гонкар',
    stats: {
      attack: 3,
      protection: 1,
      health: 2,
      shooting: null,
      magic: null,
    },
  }],
  [66, {
    name: 'Зулгатан',
    stats: {
      attack: 3,
      protection: 1,
      health: 2,
      shooting: null,
      magic: null,
    },
  }],
  [67, {
    name: 'Назгор',
    stats: {
      attack: 1,
      protection: 1,
      health: 3,
      shooting: {
        range: 5,
        accuracy: 3,
      },
      magic: null,
    },
  }],
  [68, {
    name: 'Арганоз',
    stats: {
      attack: 1,
      protection: 1,
      health: 3,
      shooting: {
        range: 5,
        accuracy: 3,
      },
      magic: null,
    },
  }],
  [69, {
    name: 'Гармач',
    stats: {
      attack: 1,
      protection: 1,
      health: 3,
      shooting: {
        range: 6,
        accuracy: 4,
      },
      magic: null,
    },
  }],
  [70, {
    name: 'Громгр',
    stats: {
      attack: 1,
      protection: 1,
      health: 3,
      shooting: {
        range: 4,
        accuracy: 5,
      },
      magic: null,
    },
  }],
  [71, {
    name: 'Хаиза',
    stats: {
      attack: 0,
      protection: 1,
      health: 2,
      shooting: {
        range: 3,
        accuracy: 3,
      },
      magic: null,
    },
  }],
  [72, {
    name: 'Ямзан',
    stats: {
      attack: 1,
      protection: 1,
      health: 2,
      shooting: {
        range: 3,
        accuracy: 3,
      },
      magic: null,
    },
  }],
  [73, {
    name: 'Марали',
    stats: {
      attack: 1,
      protection: 1,
      health: 2,
      shooting: {
        range: 3,
        accuracy: 3,
      },
      magic: null,
    },
  }],
  [74, {
    name: 'Альбумед',
    stats: {
      attack: 1,
      protection: 1,
      health: 2,
      shooting: {
        range: 3,
        accuracy: 3,
      },
      magic: null,
    },
  }],
  [75, {
    name: 'Айладж Мохамет',
    stats: {
      attack: 2,
      protection: 2,
      health: 2,
      shooting: null,
      magic: null,
    },
  }],
  [76, {
    name: 'Гарен',
    stats: {
      attack: 2,
      protection: 2,
      health: 3,
      shooting: null,
      magic: null,
    },
  }],
  [77, {
    name: 'Скагги',
    stats: {
      attack: 2,
      protection: 2,
      health: 2,
      shooting: null,
      magic: null,
    },
  }],
  [78, {
    name: 'Арнилаут',
    stats: {
      attack: 1,
      protection: 1,
      health: 2,
      shooting: {
        range: 3,
        accuracy: 3,
      },
      magic: null,
    },
  }],
  [79, {
    name: 'Ролло',
    stats: {
      attack: 2,
      protection: 2,
      health: 3,
      shooting: null,
      magic: null,
    },
  }],
  [80, {
    name: 'Эгиль',
    stats: {
      attack: 1,
      protection: 1,
      health: 2,
      shooting: {
        range: 3,
        accuracy: 3,
      },
      magic: null,
    },
  }],
  [81, {
    name: 'Вождь Цинмарк',
    stats: {
      attack: 2,
      protection: 1,
      health: 4,
      shooting: null,
      magic: null,
    },
  }],
  [82, {
    name: 'Охотник Кеннас',
    stats: {
      attack: 2,
      protection: 0,
      health: 3,
      shooting: {
        range: 3,
        accuracy: 3,
      },
      magic: null,
    },
  }],
  [83, {
    name: 'Страж Галдар',
    stats: {
      attack: 3,
      protection: 0,
      health: 4,
      shooting: null,
      magic: null,
    },
  }],
  [84, {
    name: 'Дуэлянт Элдер',
    stats: {
      attack: 3,
      protection: 1,
      health: 3,
      shooting: null,
      magic: null,
    },
  }],
  [85, {
    name: 'Тафари',
    stats: {
      attack: 1,
      protection: 2,
      health: 2,
      shooting: {
        range: 2,
        accuracy: 5,
      },
      magic: null,
    },
  }],
  [86, {
    name: 'Джакудда',
    stats: {
      attack: 4,
      protection: 2,
      health: 2,
      shooting: {
        range: 2,
        accuracy: 3,
      },
      magic: null,
    },
  }],
  [87, {
    name: 'Мейгата',
    stats: {
      attack: 3,
      protection: 2,
      health: 2,
      shooting: {
        range: 3,
        accuracy: 3,
      },
      magic: null,
    },
  }],
  [88, {
    name: 'Астроук',
    stats: {
      attack: 2,
      protection: 2,
      health: 2,
      shooting: {
        range: 4,
        accuracy: 3,
      },
      magic: null,
    },
  }],
  [89, {
    name: 'Кодджо',
    stats: {
      attack: 3,
      protection: 2,
      health: 2,
      shooting: {
        range: 2,
        accuracy: 3,
      },
      magic: null,
    },
  }],
  [90, {
    name: 'Скелет Асасин',
    stats: {
      attack: 3,
      protection: 2,
      health: 1,
      shooting: null,
      magic: null,
    },
  }],
  [91, {
    name: 'Скелет Маг',
    stats: {
      attack: 1,
      protection: 2,
      health: 2,
      shooting: null,
      magic: null,
    },
  }],
  [92, {
    name: 'Скелет Гладиатор',
    stats: {
      attack: 1,
      protection: 2,
      health: 2,
      shooting: null,
      magic: null,
    },
  }],
  [93, {
    name: 'Скелет Разбойник',
    stats: {
      attack: 2,
      protection: 2,
      health: 1,
      shooting: null,
      magic: null,
    },
  }],
  [94, {
    name: 'Скелет Копейщик',
    stats: {
      attack: 2,
      protection: 2,
      health: 1,
      shooting: null,
      magic: null,
    },
  }],
  [95, {
    name: 'Скелет Мечник',
    stats: {
      attack: 3,
      protection: 2,
      health: 1,
      shooting: null,
      magic: null,
    },
  }],
  [96, {
    name: 'Мумато Мосалан',
    stats: {
      attack: 3,
      protection: 1,
      health: 3,
      shooting: null,
      magic: null,
    },
  }],
  [97, {
    name: 'Усуми Кидзын',
    stats: {
      attack: 2,
      protection: 2,
      health: 3,
      shooting: null,
      magic: null,
    },
  }],
  [98, {
    name: 'Хатсони Хукадо',
    stats: {
      attack: 1,
      protection: 1,
      health: 3,
      shooting: {
        range: 4,
        accuracy: 3,
      },
      magic: null,
    },
  }],
  [99, {
    name: 'Такеда Сугини',
    stats: {
      attack: 2,
      protection: 2,
      health: 3,
      shooting: null,
      magic: null,
    },
  }],
  [100, {
    name: 'Одэ Накугая',
    stats: {
      attack: 3,
      protection: 0,
      health: 3,
      shooting: null,
      magic: null,
    },
  }],
  [101, {
    name: 'Франзулет',
    stats: {
      attack: 1,
      protection: 3,
      health: 1,
      shooting: {
        range: 4,
        accuracy: 4,
      },
      magic: null,
    },
  }],
  [102, {
    name: 'Тарзаниец',
    stats: {
      attack: 4,
      protection: 3,
      health: 2,
      shooting: null,
      magic: null,
    },
  }],
  [103, {
    name: 'Талакриец',
    stats: {
      attack: 3,
      protection: 3,
      health: 3,
      shooting: null,
      magic: null,
    },
  }],
  [104, {
    name: 'Ирминол',
    stats: {
      attack: 3,
      protection: 3,
      health: 3,
      shooting: null,
      magic: null,
    },
  }],
  [105, {
    name: 'Эльзадир',
    stats: {
      attack: 2,
      protection: 3,
      health: 3,
      shooting: null,
      magic: null,
    },
  }],
  [106, {
    name: 'Капитан Полосатый Медведь',
    stats: {
      attack: 3,
      protection: 2,
      health: 3,
      shooting: null,
      magic: null,
    },
  }],
  [107, {
    name: 'Сорки Бурый Медведь',
    stats: {
      attack: 2,
      protection: 1,
      health: 3,
      shooting: null,
      magic: null,
    },
  }],
  [108, {
    name: 'Хельги Волосатые Штаны',
    stats: {
      attack: 3,
      protection: 1,
      health: 3,
      shooting: null,
      magic: null,
    },
  }],
  [109, {
    name: 'Скальд',
    stats: {
      attack: 0,
      protection: 2,
      health: 2,
      shooting: null,
      magic: null,
    },
  }],
  [110, {
    name: 'Эрик Кухонный Топор',
    stats: {
      attack: 2,
      protection: 2,
      health: 3,
      shooting: null,
      magic: null,
    },
  }],
  [111, {
    name: 'Кровавый бык',
    stats: {
      attack: 1,
      protection: 2,
      health: 2,
      shooting: null,
      magic: null,
    },
  }],
  [112, {
    name: 'Черная скала',
    stats: {
      attack: 0,
      protection: 3,
      health: 2,
      shooting: {
        range: 1,
        accuracy: 3,
      },
      magic: null,
    },
  }],
  [113, {
    name: 'Мамонтобой',
    stats: {
      attack: 0,
      protection: 3,
      health: 2,
      shooting: {
        range: 3,
        accuracy: 3,
      },
      magic: null,
    },
  }],
  [114, {
    name: 'Разъяренный медведь',
    stats: {
      attack: 0,
      protection: 1,
      health: 2,
      shooting: null,
      magic: null,
    },
  }],
  [115, {
    name: 'Вождь Сын Волка',
    stats: {
      attack: 1,
      protection: 2,
      health: 2,
      shooting: null,
      magic: null,
    },
  }],
  [116, {
    name: 'Вильгельм IV',
    stats: {
      attack: 2,
      protection: 1,
      health: 2,
      shooting: null,
      magic: null,
    },
  }],
  [117, {
    name: 'Капитан Мушкетёров',
    stats: {
      attack: 2,
      protection: 2,
      health: 2,
      shooting: null,
      magic: null,
    },
  }],
  [118, {
    name: 'Берет',
    stats: {
      attack: 2,
      protection: 2,
      health: 2,
      shooting: null,
      magic: null,
    },
  }],
  [119, {
    name: 'Новобранец',
    stats: {
      attack: 2,
      protection: 1,
      health: 2,
      shooting: {
        range: 3,
        accuracy: 3,
      },
      magic: null,
    },
  }],
  [120, {
    name: 'Королевский Мушкетёр',
    stats: {
      attack: 1,
      protection: 4,
      health: 2,
      shooting: {
        range: 4,
        accuracy: 3,
      },
      magic: null,
    },
  }],
  [121, {
    name: 'Унтер-офицер',
    stats: {
      attack: 1,
      protection: 2,
      health: 2,
      shooting: {
        range: 1,
        accuracy: 4,
      },
      magic: null,
    },
  }],
  [122, {
    name: 'Фельдмаршал',
    stats: {
      attack: 1,
      protection: 2,
      health: 2,
      shooting: null,
      magic: null,
    },
  }],
  [123, {
    name: 'Капрал',
    stats: {
      attack: 2,
      protection: 1,
      health: 2,
      shooting: {
        range: 1,
        accuracy: 4,
      },
      magic: null,
    },
  }],
  [124, {
    name: 'Рядовой',
    stats: {
      attack: 1,
      protection: 2,
      health: 2,
      shooting: null,
      magic: null,
    },
  }],
  [125, {
    name: 'Фугер',
    stats: {
      attack: 1,
      protection: 1,
      health: 2,
      shooting: null,
      magic: null,
    },
  }],
  [126, {
    name: 'Старый Шаман Зу',
    stats: {
      attack: 3,
      protection: 0,
      health: 4,
      shooting: null,
      magic: null,
    },
  }],
  [127, {
    name: 'Ироксуз',
    stats: {
      attack: 2,
      protection: 1,
      health: 4,
      shooting: {
        range: 3,
        accuracy: 3,
      },
      magic: null,
    },
  }],
  [128, {
    name: 'Старый Гачатый',
    stats: {
      attack: 2,
      protection: 3,
      health: 4,
      shooting: {
        range: 3,
        accuracy: 3,
      },
      magic: null,
    },
  }],
  [129, {
    name: 'Верная Рука',
    stats: {
      attack: 2,
      protection: 0,
      health: 4,
      shooting: {
        range: 3,
        accuracy: 3,
      },
      magic: null,
    },
  }],
  [130, {
    name: 'Рыцарь ордена',
    stats: {
      attack: 2,
      protection: 2,
      health: 3,
      shooting: null,
      magic: null,
    },
  }],
  [131, {
    name: 'Посланник ордена',
    stats: {
      attack: 2,
      protection: 1,
      health: 3,
      shooting: null,
      magic: null,
    },
  }],
  [132, {
    name: 'Гроссмейстер ордена',
    stats: {
      attack: 2,
      protection: 2,
      health: 3,
      shooting: null,
      magic: null,
    },
  }],
  [133, {
    name: 'Контур ордена',
    stats: {
      attack: 2,
      protection: 1,
      health: 3,
      shooting: null,
      magic: null,
    },
  }],
  [134, {
    name: 'Латник ордена',
    stats: {
      attack: 2,
      protection: 1,
      health: 3,
      shooting: null,
      magic: null,
    },
  }],
  [135, {
    name: 'Грауфман фон Шмарте',
    stats: {
      attack: 1,
      protection: 1,
      health: 2,
      shooting: null,
      magic: null,
    },
  }],
  [136, {
    name: 'Фельдмаршал Кранк',
    stats: {
      attack: 2,
      protection: 2,
      health: 2,
      shooting: {
        range: 4,
        accuracy: 4,
      },
      magic: null,
    },
  }],
  [137, {
    name: 'Рядовой Штранке',
    stats: {
      attack: 2,
      protection: 1,
      health: 2,
      shooting: {
        range: 4,
        accuracy: 4,
      },
      magic: null,
    },
  }],
  [138, {
    name: 'Рыцарь Хуто',
    stats: {
      attack: 3,
      protection: 1,
      health: 3,
      shooting: null,
      magic: null,
    },
  }],
  [139, {
    name: 'Эришаль',
    stats: {
      attack: 1,
      protection: 2,
      health: 3,
      shooting: {
        range: 4,
        accuracy: 3,
      },
      magic: null,
    },
  }],
  [140, {
    name: 'Рыцарь Тамплиер',
    stats: {
      attack: 2,
      protection: 1,
      health: 3,
      shooting: null,
      magic: null,
    },
  }],
  [141, {
    name: 'Командор Тамплиер',
    stats: {
      attack: 3,
      protection: 0,
      health: 3,
      shooting: null,
      magic: null,
    },
  }],
  [142, {
    name: 'Рыцарь Тамплиер',
    stats: {
      attack: 3,
      protection: 2,
      health: 3,
      shooting: null,
      magic: null,
    },
  }],
  [143, {
    name: 'Гурок',
    stats: {
      attack: 2,
      protection: 0,
      health: 3,
      shooting: {
        range: 5,
        accuracy: 3,
      },
      magic: null,
    },
  }],
  [144, {
    name: 'Гоблин Пулемётчик',
    stats: {
      attack: 2,
      protection: 1,
      health: 3,
      shooting: {
        range: 6,
        accuracy: 4,
      },
      magic: null,
    },
  }],
  [145, {
    name: 'Гоблин Вожак',
    stats: {
      attack: 2,
      protection: 0,
      health: 3,
      shooting: {
        range: 5,
        accuracy: 3,
      },
      magic: null,
    },
  }],
  [146, {
    name: 'Азог',
    stats: {
      attack: 2,
      protection: 0,
      health: 3,
      shooting: {
        range: 5,
        accuracy: 3,
      },
      magic: null,
    },
  }],
  [147, {
    name: 'Команданте Хакка',
    stats: {
      attack: 0,
      protection: 1,
      health: 1,
      shooting: {
        range: 5,
        accuracy: 3,
      },
      magic: null,
    },
  }],
  [148, {
    name: 'Магальд',
    stats: {
      attack: 0,
      protection: 1,
      health: 1,
      shooting: {
        range: 3,
        accuracy: 3,
      },
      magic: null,
    },
  }],
  [149, {
    name: 'Курчатый жнец',
    stats: {
      attack: 2,
      protection: 1,
      health: 1,
      shooting: null,
      magic: null,
    },
  }],
  [150, {
    name: 'Вождь Ангур',
    stats: {
      attack: 1,
      protection: 0,
      health: 1,
      shooting: {
        range: 4,
        accuracy: 3,
      },
      magic: null,
    },
  }],
  [151, {
    name: 'Арпак Костяной Лук',
    stats: {
      attack: 0,
      protection: 4,
      health: 1,
      shooting: {
        range: 3,
        accuracy: 3,
      },
      magic: null,
    },
  }],
  [152, {
    name: 'Функер',
    stats: {
      attack: 1,
      protection: 2,
      health: 2,
      shooting: {
        range: 3,
        accuracy: 4,
      },
      magic: null,
    },
  }],
  [153, {
    name: 'Бульдог',
    stats: {
      attack: 1,
      protection: 1,
      health: 2,
      shooting: {
        range: 3,
        accuracy: 2,
      },
      magic: null,
    },
  }],
  [154, {
    name: 'Штайнер',
    stats: {
      attack: 1,
      protection: 1,
      health: 2,
      shooting: {
        range: 3,
        accuracy: 3,
      },
      magic: null,
    },
  }],
  [155, {
    name: 'Шмайсер',
    stats: {
      attack: 0,
      protection: 2,
      health: 2,
      shooting: {
        range: 5,
        accuracy: 4,
      },
      magic: null,
    },
  }],
  [156, {
    name: 'Локстер',
    stats: {
      attack: 1,
      protection: 0,
      health: 2,
      shooting: {
        range: 4,
        accuracy: 4,
      },
      magic: null,
    },
  }],
  [157, {
    name: 'Уиспер',
    stats: {
      attack: 1,
      protection: 1,
      health: 2,
      shooting: null,
      magic: null,
    },
  }],
  [158, {
    name: 'Капрал роты',
    stats: {
      attack: 1,
      protection: 1,
      health: 2,
      shooting: null,
      magic: null,
    },
  }],
  [159, {
    name: 'Капитан роты',
    stats: {
      attack: 1,
      protection: 0,
      health: 2,
      shooting: null,
      magic: null,
    },
  }],
  [160, {
    name: 'Лейтинант роты',
    stats: {
      attack: 1,
      protection: 1,
      health: 2,
      shooting: null,
      magic: null,
    },
  }],
  [161, {
    name: 'Мушкетёр роты',
    stats: {
      attack: 1,
      protection: 2,
      health: 2,
      shooting: {
        range: 3,
        accuracy: 3,
      },
      magic: null,
    },
  }],
  [162, {
    name: 'Капитан',
    stats: {
      attack: 1,
      protection: 1,
      health: 3,
      shooting: null,
      magic: null,
    },
  }],
  [163, {
    name: 'Знаменосец',
    stats: {
      attack: 1,
      protection: 2,
      health: 3,
      shooting: null,
      magic: null,
    },
  }],
  [164, {
    name: 'Аркебузер',
    stats: {
      attack: 1,
      protection: 1,
      health: 3,
      shooting: {
        range: 4,
        accuracy: 3,
      },
      magic: null,
    },
  }],
  [165, {
    name: 'Рядовой',
    stats: {
      attack: 1,
      protection: 2,
      health: 3,
      shooting: null,
      magic: null,
    },
  }],
  [166, {
    name: 'Алебардист',
    stats: {
      attack: 2,
      protection: 1,
      health: 3,
      shooting: null,
      magic: null,
    },
  }],
  [167, {
    name: 'Охотник Шарк',
    stats: {
      attack: -1,
      protection: 0,
      health: 2,
      shooting: null,
      magic: null,
    },
  }],
  [168, {
    name: 'Чарли Ивалха',
    stats: {
      attack: 1,
      protection: 1,
      health: 2,
      shooting: {
        range: 1,
        accuracy: 4,
      },
      magic: null,
    },
  }],
  [169, {
    name: 'Командир Жан',
    stats: {
      attack: 0,
      protection: 1,
      health: 2,
      shooting: {
        range: 4,
        accuracy: 3,
      },
      magic: null,
    },
  }],
  [170, {
    name: 'Горан Аркадж',
    stats: {
      attack: 1,
      protection: 1,
      health: 2,
      shooting: null,
      magic: null,
    },
  }],
  [171, {
    name: 'Джимми Покер',
    stats: {
      attack: 0,
      protection: 1,
      health: 2,
      shooting: {
        range: 3,
        accuracy: 3,
      },
      magic: null,
    },
  }],
  [172, {
    name: 'Черный Пёс',
    stats: {
      attack: 2,
      protection: 1,
      health: 2,
      shooting: null,
      magic: null,
    },
  }],
  [173, {
    name: 'Ролло Длинный Меч',
    stats: {
      attack: 2,
      protection: 2,
      health: 2,
      shooting: null,
      magic: null,
    },
  }],
  [174, {
    name: 'Ингвар Бирюзовый',
    stats: {
      attack: 2,
      protection: 1,
      health: 2,
      shooting: null,
      magic: null,
    },
  }],
  [175, {
    name: 'Викинг Лучник',
    stats: {
      attack: 1,
      protection: 1,
      health: 2,
      shooting: { range: 3, accuracy: 3 },
      magic: null,
    },
  }],
  [176, {
    name: 'Ярл Терновый Морж',
    stats: {
      attack: 2,
      protection: 3,
      health: 2,
      shooting: null,
      magic: null,
    },
  }],
  [177, {
    name: 'Гулгак',
    stats: {
      attack: 2,
      protection: 1,
      health: 3,
      shooting: { range: 4, accuracy: 5 },
      magic: null,
    },
  }],
  [178, {
    name: 'Шагат',
    stats: {
      attack: 2,
      protection: 0,
      health: 3,
      shooting: { range: 6, accuracy: 4 },
      magic: null,
    },
  }],
  [179, {
    name: 'Арток',
    stats: {
      attack: 2,
      protection: 0,
      health: 4,
      shooting: { range: 5, accuracy: 3 },
      magic: null,
    },
  }],
  [180, {
    name: 'Парбаг',
    stats: {
      attack: 2,
      protection: 0,
      health: 3,
      shooting: { range: 4, accuracy: 5 },
      magic: null,
    },
  }],
  [181, {
    name: 'Капитан Черная Борода',
    stats: {
      attack: 2,
      protection: 1,
      health: 2,
      shooting: null,
      magic: null,
    },
  }],
  [182, {
    name: 'Флебустьер',
    stats: {
      attack: 2,
      protection: 0,
      health: 2,
      shooting: { range: 4, accuracy: 3 },
      magic: null,
    },
  }],
  [183, {
    name: 'Старый Боцман',
    stats: {
      attack: 3,
      protection: 2,
      health: 2,
      shooting: null,
      magic: null,
    },
  }],
  [184, {
    name: 'Пират',
    stats: {
      attack: 1,
      protection: 0,
      health: 2,
      shooting: { range: 4, accuracy: 4 },
      magic: null,
    },
  }],
  [185, {
    name: 'Контробандист',
    stats: {
      attack: 2,
      protection: 1,
      health: 1,
      shooting: null,
      magic: null,
    },
  }],
  [186, {
    name: 'Роджер Фаллер',
    stats: {
      attack: 1,
      protection: 1,
      health: 3,
      shooting: null,
      magic: null,
    },
  }],
  [187, {
    name: 'Капитан Смит',
    stats: {
      attack: 3,
      protection: 1,
      health: 3,
      shooting: null,
      magic: null,
    },
  }],
  [188, {
    name: 'Яростный Мартин',
    stats: {
      attack: 1,
      protection: 1,
      health: 3,
      shooting: null,
      magic: null,
    },
  }],
  [189, {
    name: 'Гарри Ржавый Гвоздь',
    stats: {
      attack: 2,
      protection: 1,
      health: 3,
      shooting: null,
      magic: null,
    },
  }],
  [190, {
    name: 'Джонни Скарпак',
    stats: {
      attack: 2,
      protection: 2,
      health: 3,
      shooting: null,
      magic: null,
    },
  }],
  [191, {
    name: 'Ферлинвекер',
    stats: {
      attack: 2,
      protection: 1,
      health: 2,
      shooting: { range: 1, accuracy: 3 },
      magic: null,
    },
  }],
  [192, {
    name: 'Бомбардир',
    stats: {
      attack: 1,
      protection: 2,
      health: 3,
      shooting: { range: 1, accuracy: 3 },
      magic: null,
    },
  }],
  [193, {
    name: 'Ездовой',
    stats: {
      attack: 1,
      protection: 2,
      health: 2,
      shooting: null,
      magic: null,
    },
  }],
  [194, {
    name: 'Канонир',
    stats: {
      attack: 1,
      protection: 2,
      health: 3,
      shooting: { range: 1, accuracy: 3 },
      magic: null,
    },
  }],
  [195, {
    name: 'Заряжатель',
    stats: {
      attack: 1,
      protection: 2,
      health: 2,
      shooting: null,
      magic: null,
    },
  }],
  [196, {
    name: 'Сержант Вильям',
    stats: {
      attack: 0,
      protection: 0,
      health: 2,
      shooting: { range: 6, accuracy: 4 },
      magic: null,
    },
  }],
  [197, {
    name: 'Лейтинант Ульрих',
    stats: {
      attack: 1,
      protection: 1,
      health: 2,
      shooting: { range: 4, accuracy: 4 },
      magic: null,
    },
  }],
  [198, {
    name: 'Пулемётчик Райан',
    stats: {
      attack: 1,
      protection: 0,
      health: 2,
      shooting: { range: 4, accuracy: 4 },
      magic: null,
    },
  }],
  [199, {
    name: 'Капитан Маверик',
    stats: {
      attack: 1,
      protection: 1,
      health: 2,
      shooting: { range: 4, accuracy: 5 },
      magic: null,
    },
  }],
  [200, {
    name: 'Майор Гилберт',
    stats: {
      attack: 2,
      protection: 1,
      health: 2,
      shooting: { range: 5, accuracy: 3 },
      magic: null,
    },
  }],
  [201, {
    name: 'Глабр',
    stats: {
      attack: 2,
      protection: 1,
      health: 3,
      shooting: null,
      magic: null,
    },
  }],
  [202, {
    name: 'Легионер',
    stats: {
      attack: 2,
      protection: 2,
      health: 3,
      shooting: null,
      magic: null,
    },
  }],
  [203, {
    name: 'Легат',
    stats: {
      attack: 2,
      protection: 0,
      health: 3,
      shooting: null,
      magic: null,
    },
  }],
  [204, {
    name: 'Лектор',
    stats: {
      attack: 2,
      protection: 2,
      health: 3,
      shooting: null,
      magic: null,
    },
  }],
  [205, {
    name: 'Центурион',
    stats: {
      attack: 3,
      protection: 1,
      health: 3,
      shooting: null,
      magic: null,
    },
  }],
  [206, {
    name: 'Чамди',
    stats: {
      attack: 3,
      protection: 0,
      health: 4,
      shooting: null,
      magic: null,
    },
  }],
  [207, {
    name: 'Агни',
    stats: {
      attack: 3,
      protection: 1,
      health: 4,
      shooting: { range: 2, accuracy: 3 },
      magic: null,
    },
  }],
  [208, {
    name: 'Шакал',
    stats: {
      attack: 4,
      protection: 1,
      health: 4,
      shooting: null,
      magic: null,
    },
  }],
  [209, {
    name: 'Кундазан',
    stats: {
      attack: 2,
      protection: -1,
      health: 4,
      shooting: null,
      magic: null,
    },
  }],
  [210, {
    name: 'Ополченец',
    stats: {
      attack: 1,
      protection: 2,
      health: 3,
      shooting: null,
      magic: null,
    },
  }],
  [211, {
    name: 'Щитник',
    stats: {
      attack: 3,
      protection: 2,
      health: 4,
      shooting: null,
      magic: null,
    },
  }],
  [212, {
    name: 'Лучник',
    stats: {
      attack: 1,
      protection: 1,
      health: 3,
      shooting: { range: 3, accuracy: 3 },
      magic: null,
    },
  }],
  [213, {
    name: 'Тур',
    stats: {
      attack: 3,
      protection: 2,
      health: 4,
      shooting: null,
      magic: null,
    },
  }],
  [214, {
    name: 'Копейщик',
    stats: {
      attack: 2,
      protection: 1,
      health: 3,
      shooting: null,
      magic: null,
    },
  }],
  [215, {
    name: 'Лейтинант Петров',
    stats: {
      attack: 0,
      protection: 2,
      health: 2,
      shooting: { range: 3, accuracy: 3 },
      magic: null,
    },
  }],
  [216, {
    name: 'Политрук',
    stats: {
      attack: 0,
      protection: 2,
      health: 2,
      shooting: { range: 5, accuracy: 4 },
      magic: null,
    },
  }],
  [217, {
    name: 'Миномётчик',
    stats: {
      attack: -1,
      protection: 1,
      health: 2,
      shooting: { range: 8, accuracy: 3 },
      magic: null,
    },
  }],
  [218, {
    name: 'Бронебойник',
    stats: {
      attack: 0,
      protection: 2,
      health: 2,
      shooting: { range: 1, accuracy: 5 },
      magic: null,
    },
  }],
  [219, {
    name: 'Гранатомётчик',
    stats: {
      attack: 0,
      protection: 1,
      health: 3,
      shooting: { range: 5, accuracy: 4 },
      magic: null,
    },
  }],
  [220, {
    name: 'Мутант-террорист',
    stats: {
      attack: 1,
      protection: 0,
      health: 2,
      shooting: { range: 3, accuracy: 4 },
      magic: null,
    },
  }],
  [221, {
    name: 'Террорист-снайпер',
    stats: {
      attack: 0,
      protection: 0,
      health: 2,
      shooting: { range: 5, accuracy: 4 },
      magic: null,
    },
  }],
  [222, {
    name: 'Террорист',
    stats: {
      attack: 1,
      protection: 2,
      health: 2,
      shooting: { range: 4, accuracy: 4 },
      magic: null,
    },
  }],
  [223, {
    name: 'Командир террористов',
    stats: {
      attack: 1,
      protection: 0,
      health: 3,
      shooting: null,
      magic: null,
    },
  }],
  [224, {
    name: 'Мутант-автоматчик',
    stats: {
      attack: 1,
      protection: 1,
      health: 2,
      shooting: { range: 4, accuracy: 4 },
      magic: null,
    },
  }],
  [225, {
    name: 'Бриарей',
    stats: {
      attack: 2,
      protection: 1,
      health: 3,
      shooting: null,
      magic: null,
    },
  }],
  [226, {
    name: 'Антей',
    stats: {
      attack: 1,
      protection: -1,
      health: 3,
      shooting: null,
      magic: null,
    },
  }],
  [227, {
    name: 'Котт',
    stats: {
      attack: 0,
      protection: 2,
      health: 3,
      shooting: { range: 4, accuracy: 4 },
      magic: null,
    },
  }],
  [228, {
    name: 'Огненный шмель',
    stats: {
      attack: 1,
      protection: 2,
      health: 1,
      shooting: null,
      magic: null,
    },
  }],
  [229, {
    name: 'Хитрый крот',
    stats: {
      attack: 1,
      protection: 1,
      health: 1,
      shooting: { range: 4, accuracy: 3 },
      magic: null,
    },
  }],
  [230, {
    name: 'Ячник сын Ягуара',
    stats: {
      attack: -1,
      protection: 2,
      health: 1,
      shooting: { range: 6, accuracy: 4 },
      magic: null,
    },
  }],
  [231, {
    name: 'Шакал',
    stats: {
      attack: 1,
      protection: 1,
      health: 2,
      shooting: null,
      magic: null,
    },
  }],
  [232, {
    name: 'Черный буйвол',
    stats: {
      attack: -1,
      protection: 1,
      health: 2,
      shooting: { range: 6, accuracy: 4 },
      magic: null,
    },
  }],
  [233, {
    name: 'Волк в засаде',
    stats: {
      attack: -1,
      protection: 1,
      health: 1,
      shooting: { range: 6, accuracy: 4 },
      magic: null,
    },
  }]
])
