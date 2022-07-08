'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Trashes', [
      {
        trash_can_id: 1,
        trash_name: 'стеклянная банка',
        trash_img_src: 'https://e7.pngegg.com/pngimages/963/1016/png-clipart-shrek-the-musical-donkey-princess-fiona-shrek-film-series-shrek-heroes-fictional-character.png',
        info: 'blablabla',
        score: 1,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 1,
        trash_name: 'стеклянная бутылка',
        trash_img_src: 'https://e7.pngegg.com/pngimages/963/1016/png-clipart-shrek-the-musical-donkey-princess-fiona-shrek-film-series-shrek-heroes-fictional-character.png',
        info: 'blablabla',
        score: 1,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 1,
        trash_name: 'флакон от духов',
        trash_img_src: 'https://e7.pngegg.com/pngimages/963/1016/png-clipart-shrek-the-musical-donkey-princess-fiona-shrek-film-series-shrek-heroes-fictional-character.png',
        info: 'blablabla',
        score: 2,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 2,
        trash_name: 'одноразовая посуда',
        trash_img_src: '/trashes/tableware.png',
        info: 'blablabla',
        score: 1,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 2,
        trash_name: 'пластиковая бутылка',
        trash_img_src: '/trashes/plasticBottle.png',
        info: 'blablabla',
        score: 1,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 2,
        trash_name: 'полиэтиленовый пакет',
        trash_img_src: '/trashes/packets.png',
        info: 'blablabla',
        score: 2,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 2,
        trash_name: 'коробка от диска',
        trash_img_src: '/trashes/disk.png',
        info: 'blablabla',
        score: 1,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 2,
        trash_name: 'пластиковые трубочки',
        trash_img_src: '/trashes/tubules.png',
        info: 'blablabla',
        score: 1,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 2,
        trash_name: 'картриджи от фильтров для воды',
        trash_img_src: '/trashes/cartridge.png',
        info: 'blablabla',
        score: 3,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 2,
        trash_name: 'обертка от шоколадки',
        trash_img_src: '/trashes/chocolate.png',
        info: 'blablabla',
        score: 2,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 2,
        trash_name: 'упаковка от торта',
        trash_img_src: '/trashes/cake.png',
        info: 'blablabla',
        score: 1,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 2,
        trash_name: 'пенопласт',
        trash_img_src: '/trashes/styrofoam.png',
        info: 'blablabla',
        score: 3,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 2,
        trash_name: 'Fairy',
        trash_img_src: '/trashes/fairy.png',
        info: 'blablabla',
        score: 2,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 2,
        trash_name: 'таз',
        trash_img_src: '/trashes/pelvis.png',
        info: 'blablabla',
        score: 2,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 2,
        trash_name: 'пластиковый стаканчик',
        trash_img_src: '/trashes/cup.png',
        info: 'blablabla',
        score: 2,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 3,
        trash_name: 'жестяная банка',
        trash_img_src: '/trashes/can.png',
        info: 'blablabla',
        score: 1,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 3,
        trash_name: 'алюминиевая банка',
        trash_img_src: 'https://e7.pngegg.com/pngimages/963/1016/png-clipart-shrek-the-musical-donkey-princess-fiona-shrek-film-series-shrek-heroes-fictional-character.png',
        info: 'blablabla',
        score: 1,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 3,
        trash_name: 'фольга',
        trash_img_src: 'https://e7.pngegg.com/pngimages/963/1016/png-clipart-shrek-the-musical-donkey-princess-fiona-shrek-film-series-shrek-heroes-fictional-character.png',
        info: 'blablabla',
        score: 3,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 3,
        trash_name: 'аэрозольные балончики',
        trash_img_src: 'https://e7.pngegg.com/pngimages/963/1016/png-clipart-shrek-the-musical-donkey-princess-fiona-shrek-film-series-shrek-heroes-fictional-character.png',
        info: 'blablabla',
        score: 2,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 3,
        trash_name: 'сломанный фен',
        trash_img_src: 'https://e7.pngegg.com/pngimages/963/1016/png-clipart-shrek-the-musical-donkey-princess-fiona-shrek-film-series-shrek-heroes-fictional-character.png',
        info: 'blablabla',
        score: 3,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 4,
        trash_name: 'упаковка от яиц',
        trash_img_src: '/trashes/eggs.png',
        info: 'blablabla',
        score: 2,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 4,
        trash_name: 'газета',
        trash_img_src: '/trashes/newspaper.png',
        info: 'blablabla',
        score: 1,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 4,
        trash_name: 'тетрадь',
        trash_img_src: '/trashes/notebook.png',
        info: 'blablabla',
        score: 1,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 4,
        trash_name: 'крафтовая бумага',
        trash_img_src: '/trashes/craft.png',
        info: 'blablabla',
        score: 1,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 4,
        trash_name: 'упаковка для круп',
        trash_img_src: '/trashes/groats.png',
        info: 'blablabla',
        score: 1,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 4,
        trash_name: 'цветной картон',
        trash_img_src: 'https://e7.pngegg.com/pngimages/963/1016/png-clipart-shrek-the-musical-donkey-princess-fiona-shrek-film-series-shrek-heroes-fictional-character.png',
        info: 'blablabla',
        score: 1,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 4,
        trash_name: 'разрисованный альбом для рисования',
        trash_img_src: 'https://e7.pngegg.com/pngimages/963/1016/png-clipart-shrek-the-musical-donkey-princess-fiona-shrek-film-series-shrek-heroes-fictional-character.png',
        info: 'blablabla',
        score: 2,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 4,
        trash_name: 'картонная коробка',
        trash_img_src: 'https://e7.pngegg.com/pngimages/963/1016/png-clipart-shrek-the-musical-donkey-princess-fiona-shrek-film-series-shrek-heroes-fictional-character.png',
        info: 'blablabla',
        score: 1,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 5,
        trash_name: 'огрызок',
        trash_img_src: 'https://e7.pngegg.com/pngimages/963/1016/png-clipart-shrek-the-musical-donkey-princess-fiona-shrek-film-series-shrek-heroes-fictional-character.png',
        info: 'blablabla',
        score: 1,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 5,
        trash_name: 'кожура овощей и фруктов',
        trash_img_src: 'https://e7.pngegg.com/pngimages/963/1016/png-clipart-shrek-the-musical-donkey-princess-fiona-shrek-film-series-shrek-heroes-fictional-character.png',
        info: 'blablabla',
        score: 1,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 5,
        trash_name: 'яичная скорлупа',
        trash_img_src: 'https://e7.pngegg.com/pngimages/963/1016/png-clipart-shrek-the-musical-donkey-princess-fiona-shrek-film-series-shrek-heroes-fictional-character.png',
        info: 'blablabla',
        score: 1,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 5,
        trash_name: 'кофейная гуща',
        trash_img_src: 'https://e7.pngegg.com/pngimages/963/1016/png-clipart-shrek-the-musical-donkey-princess-fiona-shrek-film-series-shrek-heroes-fictional-character.png',
        info: 'blablabla',
        score: 2,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 5,
        trash_name: 'увядшие цветы',
        trash_img_src: 'https://e7.pngegg.com/pngimages/963/1016/png-clipart-shrek-the-musical-donkey-princess-fiona-shrek-film-series-shrek-heroes-fictional-character.png',
        info: 'blablabla',
        score: 3,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 5,
        trash_name: 'недоеденный салат',
        trash_img_src: 'https://e7.pngegg.com/pngimages/963/1016/png-clipart-shrek-the-musical-donkey-princess-fiona-shrek-film-series-shrek-heroes-fictional-character.png',
        info: 'blablabla',
        score: 1,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 5,
        trash_name: 'продукты животного происхождения',
        trash_img_src: 'https://e7.pngegg.com/pngimages/963/1016/png-clipart-shrek-the-musical-donkey-princess-fiona-shrek-film-series-shrek-heroes-fictional-character.png',
        info: 'blablabla',
        score: 1,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 6,
        trash_name: 'бутылка непрозрачная',
        trash_img_src: '/trashes/colorBottle.png',
        info: 'blablabla',
        score: 2,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 6,
        trash_name: 'чек из магазина',
        trash_img_src: 'https://e7.pngegg.com/pngimages/963/1016/png-clipart-shrek-the-musical-donkey-princess-fiona-shrek-film-series-shrek-heroes-fictional-character.png',
        info: 'blablabla',
        score: 3,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 6,
        trash_name: 'перфорированный пенопласт',
        trash_img_src: '/trashes/apple.png',
        info: 'blablabla',
        score: 3,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 6,
        trash_name: 'чипсы',
        trash_img_src: '/trashes/lays.png',
        info: 'blablabla',
        score: 3,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 6,
        trash_name: 'CD-диск',
        trash_img_src: '/trashes/cd.png',
        info: 'blablabla',
        score: 3,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 6,
        trash_name: 'бутыль из поликарбоната(обычно с ручкой)',
        trash_img_src: 'https://e7.pngegg.com/pngimages/963/1016/png-clipart-shrek-the-musical-donkey-princess-fiona-shrek-film-series-shrek-heroes-fictional-character.png',
        info: 'blablabla',
        score: 3,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 6,
        trash_name: 'фломастеры',
        trash_img_src: '/trashes/markers.png',
        info: 'blablabla',
        score: 2,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 6,
        trash_name: 'зубная щетка',
        trash_img_src: 'https://e7.pngegg.com/pngimages/963/1016/png-clipart-shrek-the-musical-donkey-princess-fiona-shrek-film-series-shrek-heroes-fictional-character.png',
        info: 'blablabla',
        score: 3,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 6,
        trash_name: 'пробка от вина',
        trash_img_src: '/trashes/wine.png',
        info: 'blablabla',
        score: 3,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 6,
        trash_name: 'влажные салфетки',
        trash_img_src: '/trashes/napkins.png',
        info: 'blablabla',
        score: 2,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 6,
        trash_name: 'фольга с бумажным слоем',
        trash_img_src: '/trashes/foilPaper.png',
        info: 'blablabla',
        score: 3,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 6,
        trash_name: 'упаковка от мясных изделий',
        trash_img_src: '/trashes/meat.png',
        info: 'blablabla',
        score: 3,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 6,
        trash_name: 'коробка от лапши быстрого приготовления',
        trash_img_src: '/trashes/doshik.png',
        info: 'blablabla',
        score: 3,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 6,
        trash_name: 'разбитое зеркало',
        trash_img_src: 'https://e7.pngegg.com/pngimages/963/1016/png-clipart-shrek-the-musical-donkey-princess-fiona-shrek-film-series-shrek-heroes-fictional-character.png',
        info: 'blablabla',
        score: 2,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 6,
        trash_name: 'фужер',
        trash_img_src: '/trashes/wineGlass.png',
        info: 'blablabla',
        score: 3,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 6,
        trash_name: 'дой-пак',
        trash_img_src: '/trashes/doypack.png',
        info: 'blablabla',
        score: 3,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 6,
        trash_name: 'салфетки',
        trash_img_src: '/trashes/paperNapkins.png',
        info: 'blablabla',
        score: 1,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 7,
        trash_name: 'батарейки',
        trash_img_src: 'https://e7.pngegg.com/pngimages/963/1016/png-clipart-shrek-the-musical-donkey-princess-fiona-shrek-film-series-shrek-heroes-fictional-character.png',
        info: 'blablabla',
        score: 1,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 7,
        trash_name: 'ртутный градусник',
        trash_img_src: 'https://e7.pngegg.com/pngimages/963/1016/png-clipart-shrek-the-musical-donkey-princess-fiona-shrek-film-series-shrek-heroes-fictional-character.png',
        info: 'blablabla',
        score: 1,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 7,
        trash_name: 'лампочка',
        trash_img_src: 'https://e7.pngegg.com/pngimages/963/1016/png-clipart-shrek-the-musical-donkey-princess-fiona-shrek-film-series-shrek-heroes-fictional-character.png',
        info: 'blablabla',
        score: 1,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 7,
        trash_name: 'просроченные лекарства',
        trash_img_src: 'https://e7.pngegg.com/pngimages/963/1016/png-clipart-shrek-the-musical-donkey-princess-fiona-shrek-film-series-shrek-heroes-fictional-character.png',
        info: 'blablabla',
        score: 2,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 7,
        trash_name: 'лакокрасочные материалы',
        trash_img_src: 'https://e7.pngegg.com/pngimages/963/1016/png-clipart-shrek-the-musical-donkey-princess-fiona-shrek-film-series-shrek-heroes-fictional-character.png',
        info: 'blablabla',
        score: 2,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 8,
        trash_name: 'крыса',
        trash_img_src: '/trashes/rat.png',
        info: 'blablabla',
        score: 13,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 8,
        trash_name: 'костюм',
        trash_img_src: 'https://e7.pngegg.com/pngimages/963/1016/png-clipart-shrek-the-musical-donkey-princess-fiona-shrek-film-series-shrek-heroes-fictional-character.png',
        info: 'blablabla',
        score: 10,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 8,
        trash_name: 'телефон',
        trash_img_src: 'https://e7.pngegg.com/pngimages/963/1016/png-clipart-shrek-the-musical-donkey-princess-fiona-shrek-film-series-shrek-heroes-fictional-character.png',
        info: 'blablabla',
        score: 10,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Trashes', null, {});
  }
};
