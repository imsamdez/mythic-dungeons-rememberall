import classnames from 'classnames';
import React from 'react';
import {Content} from '../../components/Content';
import {Sidebar} from '../../components/Sidebar';
import './_Styles.scss';

const fakeJson = [
  {
    id: 1,
    watchAt: 2000,
    creatures: [
      {
        name: 'Fungalmancer',
        imageUrl:
          'https://wow.zamimg.com/modelviewer/live/webthumbs/npc/160/83616.webp',
        abilities: [
          {
            name: 'Wonder Grow',
            actions: ['ACTION_SHOULD_BE_KICKED', 'ACTION_CAN_BE_SPELL_STEAL'],
          },
          {
            name: 'Bindings Fungus',
            actions: ['ACTION_DODGE_IT'],
          },
        ],
      },
      {
        name: 'Fungalmancer',
        imageUrl:
          'https://wow.zamimg.com/modelviewer/live/webthumbs/npc/160/83616.webp',
        abilities: [
          {
            name: 'Wonder Grow',
            actions: ['ACTION_SHOULD_BE_KICKED', 'ACTION_CAN_BE_SPELL_STEAL'],
          },
          {
            name: 'Bindings Fungus',
            actions: ['ACTION_DODGE_IT'],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    watchAt: 2000,
    creatures: [
      {
        name: 'Fungalmancer',
        imageUrl:
          'https://wow.zamimg.com/modelviewer/live/webthumbs/npc/160/83616.webp',
        abilities: [
          {
            name: 'Wonder Grow',
            actions: ['ACTION_SHOULD_BE_KICKED', 'ACTION_CAN_BE_SPELL_STEAL'],
          },
          {
            name: 'Bindings Fungus',
            actions: ['ACTION_DODGE_IT'],
          },
        ],
      },
      {
        name: 'Fungalmancer',
        imageUrl:
          'https://wow.zamimg.com/modelviewer/live/webthumbs/npc/160/83616.webp',
        abilities: [
          {
            name: 'Wonder Grow',
            actions: ['ACTION_SHOULD_BE_KICKED', 'ACTION_CAN_BE_SPELL_STEAL'],
          },
          {
            name: 'Bindings Fungus',
            actions: ['ACTION_DODGE_IT'],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    watchAt: 2000,
    creatures: [
      {
        name: 'Fungalmancer',
        imageUrl:
          'https://wow.zamimg.com/modelviewer/live/webthumbs/npc/160/83616.webp',
        abilities: [
          {
            name: 'Wonder Grow',
            actions: ['ACTION_SHOULD_BE_KICKED', 'ACTION_CAN_BE_SPELL_STEAL'],
          },
          {
            name: 'Bindings Fungus',
            actions: ['ACTION_DODGE_IT'],
          },
        ],
      },
      {
        name: 'Fungalmancer',
        imageUrl:
          'https://wow.zamimg.com/modelviewer/live/webthumbs/npc/160/83616.webp',
        abilities: [
          {
            name: 'Wonder Grow',
            actions: ['ACTION_SHOULD_BE_KICKED', 'ACTION_CAN_BE_SPELL_STEAL'],
          },
          {
            name: 'Bindings Fungus',
            actions: ['ACTION_DODGE_IT'],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    watchAt: 2000,
    creatures: [
      {
        name: 'Fungalmancer',
        imageUrl:
          'https://wow.zamimg.com/modelviewer/live/webthumbs/npc/160/83616.webp',
        abilities: [
          {
            name: 'Wonder Grow',
            actions: ['ACTION_SHOULD_BE_KICKED', 'ACTION_CAN_BE_SPELL_STEAL'],
          },
          {
            name: 'Bindings Fungus',
            actions: ['ACTION_DODGE_IT'],
          },
        ],
      },
      {
        name: 'Fungalmancer',
        imageUrl:
          'https://wow.zamimg.com/modelviewer/live/webthumbs/npc/160/83616.webp',
        abilities: [
          {
            name: 'Wonder Grow',
            actions: ['ACTION_SHOULD_BE_KICKED', 'ACTION_CAN_BE_SPELL_STEAL'],
          },
          {
            name: 'Bindings Fungus',
            actions: ['ACTION_DODGE_IT'],
          },
        ],
      },
    ],
  },
  {
    id: 5,
    watchAt: 2000,
    creatures: [
      {
        name: 'Fungalmancer',
        imageUrl:
          'https://wow.zamimg.com/modelviewer/live/webthumbs/npc/160/83616.webp',
        abilities: [
          {
            name: 'Wonder Grow',
            actions: ['ACTION_SHOULD_BE_KICKED', 'ACTION_CAN_BE_SPELL_STEAL'],
          },
          {
            name: 'Bindings Fungus',
            actions: ['ACTION_DODGE_IT'],
          },
        ],
      },
      {
        name: 'Fungalmancer',
        imageUrl:
          'https://wow.zamimg.com/modelviewer/live/webthumbs/npc/160/83616.webp',
        abilities: [
          {
            name: 'Wonder Grow',
            actions: ['ACTION_SHOULD_BE_KICKED', 'ACTION_CAN_BE_SPELL_STEAL'],
          },
          {
            name: 'Bindings Fungus',
            actions: ['ACTION_DODGE_IT'],
          },
        ],
      },
    ],
  },
  {
    id: 6,
    watchAt: 2000,
    creatures: [
      {
        name: 'Fungalmancer',
        imageUrl:
          'https://wow.zamimg.com/modelviewer/live/webthumbs/npc/160/83616.webp',
        abilities: [
          {
            name: 'Wonder Grow',
            actions: ['ACTION_SHOULD_BE_KICKED', 'ACTION_CAN_BE_SPELL_STEAL'],
          },
          {
            name: 'Bindings Fungus',
            actions: ['ACTION_DODGE_IT'],
          },
        ],
      },
      {
        name: 'Fungalmancer',
        imageUrl:
          'https://wow.zamimg.com/modelviewer/live/webthumbs/npc/160/83616.webp',
        abilities: [
          {
            name: 'Wonder Grow',
            actions: ['ACTION_SHOULD_BE_KICKED', 'ACTION_CAN_BE_SPELL_STEAL'],
          },
          {
            name: 'Bindings Fungus',
            actions: ['ACTION_DODGE_IT'],
          },
        ],
      },
    ],
  },
  {
    id: 7,
    watchAt: 2000,
    creatures: [
      {
        name: 'Truc',
        imageUrl:
          'https://wow.zamimg.com/modelviewer/live/webthumbs/npc/160/83616.webp',
        abilities: [
          {
            name: 'Wonder Grow',
            actions: ['ACTION_SHOULD_BE_KICKED', 'ACTION_CAN_BE_SPELL_STEAL'],
          },
          {
            name: 'Bindings Fungus',
            actions: ['ACTION_DODGE_IT'],
          },
        ],
      },
    ],
  },
];

export default () => {
  const classNames = classnames('dungeon-tnw');

  return (
    <div className={classNames}>
      <Sidebar
        name="Plaguefall"
        region="maldraxxus"
        videoUrl="https://www.youtube.com/embed/ZsxNwwTXZFk"></Sidebar>
      <Content data={fakeJson}></Content>
    </div>
  );
};
