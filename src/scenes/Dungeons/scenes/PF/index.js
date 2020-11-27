import classnames from 'classnames';
import React from 'react';
import {Content} from '../../components/Content';
import {Sidebar} from '../../components/Sidebar';

const fakeJson = [
  {
    id: 'Gulhe',
    creatures: [
      {
        id: '357ml',
        creatureId: 'LDO7T',
        focus: 0,
        creature: {
          id: 'LDO7T',
          name: 'Plagueroc',
          isBoss: false,
          imageUrl:
            'https://wow.zamimg.com/modelviewer/live/webthumbs/npc/4/96772.webp',
          abilities: [
            {id: '2mtg6', name: 'Wind Buffet', actions: ['ACTION_DODGE_IT']},
          ],
        },
      },
    ],
    watchAt: 100,
  },
  {
    id: 'f1nbO',
    creatures: [
      {
        id: 'Xc345',
        creatureId: 'yupDi',
        focus: 0,
        creature: {
          id: 'yupDi',
          name: 'Decaying Flesh Giant',
          isBoss: false,
          imageUrl:
            'https://wow.zamimg.com/modelviewer/live/webthumbs/npc/119/99191.webp',
          abilities: [
            {
              id: 'J4SXh',
              name: 'Creepy Crawlers',
              actions: ['ACTION_SHOULD_BE_KICKED'],
            },
          ],
        },
      },
    ],
    watchAt: 180,
  },
  {
    id: 'gIDzL',
    creatures: [
      {
        id: 'PC5HM',
        creatureId: '3AUug',
        focus: 0,
        creature: {
          id: '3AUug',
          name: 'Fungi Stormer',
          isBoss: false,
          imageUrl:
            'https://wow.zamimg.com/modelviewer/live/webthumbs/npc/165/83621.webp',
          abilities: [],
        },
      },
      {
        id: 'LmnIM',
        creatureId: 'eJMu1',
        focus: 0,
        creature: {
          id: 'eJMu1',
          name: 'Fungalmancer',
          isBoss: false,
          imageUrl:
            'https://wow.zamimg.com/modelviewer/live/webthumbs/npc/160/83616.webp',
          abilities: [
            {
              id: 'GFeg6',
              name: 'Wonder grow',
              actions: ['ACTION_MUST_BE_KICKED', 'ACTION_CAN_BE_SPELL_STEAL'],
            },
            {id: '9mY7W', name: 'Binding Fungus', actions: ['ACTION_DODGE_IT']},
          ],
        },
      },
      {
        id: 'Gd9dc',
        creatureId: 'Ym32w',
        focus: 0,
        creature: {
          id: 'Ym32w',
          name: 'Mire soldier',
          isBoss: false,
          imageUrl:
            'https://wow.zamimg.com/modelviewer/live/webthumbs/npc/140/83596.webp',
          abilities: [],
        },
      },
    ],
    watchAt: 243,
  },
  {
    id: 'JUpyd',
    creatures: [
      {
        id: 'AiykM',
        creatureId: 'Ym32w',
        focus: 0,
        creature: {
          id: 'Ym32w',
          name: 'Mire soldier',
          isBoss: false,
          imageUrl:
            'https://wow.zamimg.com/modelviewer/live/webthumbs/npc/140/83596.webp',
          abilities: [],
        },
      },
      {
        id: 'nk3br',
        creatureId: '3AUug',
        focus: 0,
        creature: {
          id: '3AUug',
          name: 'Fungi Stormer',
          isBoss: false,
          imageUrl:
            'https://wow.zamimg.com/modelviewer/live/webthumbs/npc/165/83621.webp',
          abilities: [],
        },
      },
    ],
    watchAt: 300,
  },
];

export default () => {
  const classNames = classnames('s-dungeon dungeon-pf');

  return (
    <div className={classNames}>
      <Sidebar
        name="Plaguefall"
        region="maldraxxus"
        videoUrl="https://www.youtube.com/embed/ZsxNwwTXZFk"
        videoId="ZsxNwwTXZFk"></Sidebar>
      <Content data={fakeJson}></Content>
    </div>
  );
};
