/* eslint-disable prefer-template */
const PICTURE_COUNT_MIN = 1;
const PICTURE_COUNT_MAX = 25;
const AVATAR_COUNT = 6;
const LIKE_MIN = 15;
const LIKE_MAX = 200;
const COMMENT_COUNT = 20;
const COMMENT_LINES = [
'Всё отлично!',
'В целом всё неплохо. Но не всё.',
'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const DESCRIPTIONS = null;

const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

const SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг',
];






// При помощи js написать функции для создания массива из 25 объектов.

// Структура каждого объекта должна быть следующей:

const getRamdomNumber = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const higher = Math.floor(Math.max(a, b));
  const result = Math.random() * (higher - lower + 1) + lower;
  return Math.floor(result);
};


const getPhoto = () => {
  const randomId = getRamdomNumber(PICTURE_COUNT_MIN, PICTURE_COUNT_MAX - 1);

  return {
    id:[randomId],
    url:'',
    description:'',
    likesCountter:''
  };
};
getPhoto();

// url, строка — адрес картинки вида photos/{{i}}.jpg,
// где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.
let url;

// description, строка — описание фотографии. Описание придумайте самостоятельно.
let description;

// likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.
const likesCounter = () => {};
likesCounter();

// comments, массив объектов — список комментариев, оставленных другими пользователями к этой фотографии.

const getComments = () => {
  const randomNameIndex = getRamdomNumber(0, NAMES.length - 1);
  const randomSurnameIndex = getRamdomNumber(0, SURNAMES.length - 1);

  return {
    authorName: NAMES[randomNameIndex] + ' ' + SURNAMES[randomSurnameIndex],
    url:'',
    description:'',
    likesCountter:''
  };
};
getComments();
